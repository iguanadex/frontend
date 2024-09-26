import { Ifo, PoolIds } from '@iguanadex/ifos'
import { useTranslation } from '@iguanadex/localization'
import { CAKE } from '@iguanadex/tokens'
import {
  BalanceInput,
  Box,
  Button,
  Flex,
  IfoHasVestingNotice,
  Image,
  Link,
  Modal,
  ModalBody,
  Text,
  TooltipText,
  useToast,
  useTooltip,
} from '@iguanadex/uikit'
import { formatNumber, getBalanceAmount } from '@iguanadex/utils/formatBalance'
import { getFullDecimalMultiplier } from '@iguanadex/utils/getFullDecimalMultiplier'
import BigNumber from 'bignumber.js'
import ApproveConfirmButtons from 'components/ApproveConfirmButtons'
import { ToastDescriptionWithTx } from 'components/Toast'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { useMemo, useState } from 'react'
import { parseEther, parseUnits } from 'viem'
import { PublicIfoData, WalletIfoData } from 'views/Ifos/types'

interface Props {
  poolId: PoolIds
  ifo: Ifo
  publicIfoData: PublicIfoData
  walletIfoData: WalletIfoData
  userCurrencyBalance: BigNumber
  creditLeft: BigNumber
  onSuccess: (amount: BigNumber, txHash: string) => void
  onDismiss?: () => void
}

const multiplierValues = [0.1, 0.25, 0.5, 0.75, 1]

// Default value for transaction setting, tweak based on BSC network congestion.
const gasPrice = parseEther('10', 'gwei')

const ContributeModal: React.FC<React.PropsWithChildren<Props>> = ({
  poolId,
  ifo,
  publicIfoData,
  walletIfoData,
  userCurrencyBalance,
  creditLeft,
  onDismiss,
  onSuccess,
}) => {
  const publicPoolCharacteristics = publicIfoData[poolId]
  const userPoolCharacteristics = walletIfoData[poolId]

  const { currency, articleUrl } = ifo
  const { toastSuccess } = useToast()
  const limitPerUserInLP = publicPoolCharacteristics?.limitPerUserInLP
  const vestingInformation = publicPoolCharacteristics?.vestingInformation
  const amountTokenCommittedInLP = userPoolCharacteristics?.amountTokenCommittedInLP
  const { contract } = walletIfoData
  const [value, setValue] = useState('')
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  const multiplier = useMemo(() => getFullDecimalMultiplier(currency.decimals), [currency])
  const valueWithTokenDecimals = new BigNumber(value).times(multiplier)
  const cake = CAKE[ifo.chainId]
  const label = cake ? t('Max. CAKE entry') : t('Max. token entry')

  const { isApproving, isApproved, isConfirmed, isConfirming, handleApprove, handleConfirm } =
    useApproveConfirmTransaction({
      token: currency,
      spender: contract?.address,
      minAmount: value ? parseUnits(value as `${number}`, currency.decimals) : undefined,
      onApproveSuccess: ({ receipt }) => {
        toastSuccess(
          t('Successfully Enabled!'),
          <ToastDescriptionWithTx txHash={receipt.transactionHash}>
            {t('You can now participate in the %symbol% IFO.', { symbol: ifo.token.symbol })}
          </ToastDescriptionWithTx>,
        )
      },
      onConfirm: () => {
        return callWithGasPrice(
          contract as any,
          'depositPool',
          [valueWithTokenDecimals.integerValue(), poolId === PoolIds.poolBasic ? 0 : 1],
          {
            gasPrice,
          },
        )
      },
      onSuccess: async ({ receipt }) => {
        await onSuccess(valueWithTokenDecimals, receipt.transactionHash)
        onDismiss?.()
      },
    })

  // in v3 max token entry is based on ifo credit and hard cap limit per user minus amount already committed
  const maximumTokenEntry = useMemo(() => {
    if (!creditLeft || (ifo.version >= 3.1 && poolId === PoolIds.poolBasic)) {
      return limitPerUserInLP?.minus(amountTokenCommittedInLP || new BigNumber(0))
    }
    if (limitPerUserInLP?.isGreaterThan(0)) {
      return limitPerUserInLP.minus(amountTokenCommittedInLP || new BigNumber(0)).isLessThanOrEqualTo(creditLeft)
        ? limitPerUserInLP.minus(amountTokenCommittedInLP || new BigNumber(0))
        : creditLeft
    }
    return creditLeft
  }, [creditLeft, limitPerUserInLP, amountTokenCommittedInLP, ifo.version, poolId])

  // include user balance for input
  const maximumTokenCommittable = useMemo(() => {
    return maximumTokenEntry?.isLessThanOrEqualTo(userCurrencyBalance) ? maximumTokenEntry : userCurrencyBalance
  }, [maximumTokenEntry, userCurrencyBalance])

  const basicTooltipContent = t(
    'For the private sale, each eligible participant will be able to commit any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting proposal.',
  )

  const unlimitedToolipContent = (
    <Box>
      <Text display="inline">{t('For the public sale, Max CAKE entry is capped by')} </Text>
      <Text bold display="inline">
        {t('the number of iCAKE.')}{' '}
      </Text>
      <Text display="inline">
        {t('Lock more CAKE for longer durations to increase the maximum number of CAKE you can commit to the sale.')}
      </Text>
    </Box>
  )

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    poolId === PoolIds.poolBasic ? basicTooltipContent : unlimitedToolipContent,
    {},
  )

  const isWarning =
    valueWithTokenDecimals.isGreaterThan(userCurrencyBalance) ||
    valueWithTokenDecimals.isGreaterThan(maximumTokenEntry || new BigNumber(0))

  return (
    <Modal title={t('Contribute %symbol%', { symbol: currency.symbol })} onDismiss={onDismiss}>
      <ModalBody maxWidth="360px">
        <Box p="2px">
          <Flex justifyContent="space-between" mb="16px">
            {tooltipVisible && tooltip}
            <TooltipText ref={targetRef}>{label}:</TooltipText>
            <Text>{`${formatNumber(
              getBalanceAmount(maximumTokenEntry || new BigNumber(0), currency.decimals).toNumber(),
              3,
              3,
            )} ${ifo.currency.symbol}`}</Text>
          </Flex>
          <Flex justifyContent="space-between" mb="8px">
            <Text>{t('Commit')}:</Text>
            <Flex flexGrow={1} justifyContent="flex-end">
              <Image
                src={
                  ifo.currency.symbol === 'ING'
                    ? '/images/token_logo.png'
                    : `/images/farms/${currency.symbol.split(' ')[0].toLowerCase()}.svg`
                }
                width={24}
                height={24}
              />
              <Text ml="4px">{currency.symbol}</Text>
            </Flex>
          </Flex>
          <BalanceInput
            value={value}
            currencyValue={`${publicIfoData.currencyPriceInUSD.times(value || 0).toFixed(2)} USD`}
            onUserInput={setValue}
            isWarning={isWarning}
            decimals={currency.decimals}
            onBlur={() => {
              if (isWarning) {
                // auto adjust to max value
                setValue(getBalanceAmount(maximumTokenCommittable).toString())
              }
            }}
            mb="8px"
          />
          {isWarning && (
            <Text
              color={valueWithTokenDecimals.isGreaterThan(userCurrencyBalance) ? 'failure' : 'warning'}
              textAlign="right"
              fontSize="12px"
              mb="8px"
            >
              {valueWithTokenDecimals.isGreaterThan(userCurrencyBalance)
                ? t('Insufficient Balance')
                : t('Exceeded max CAKE entry')}
            </Text>
          )}
          <Text color="textSubtle" textAlign="right" fontSize="12px" mb="16px">
            {t('Balance: %balance%', {
              balance: getBalanceAmount(userCurrencyBalance, currency.decimals).toString(),
            })}
          </Text>
          <Flex justifyContent="space-between" mb="16px">
            {multiplierValues.map((multiplierValue, index) => (
              <Button
                key={multiplierValue}
                scale="xs"
                variant="tertiary"
                onClick={() => setValue(getBalanceAmount(maximumTokenCommittable.times(multiplierValue)).toString())}
                mr={index < multiplierValues.length - 1 ? '8px' : 0}
              >
                {multiplierValue * 100}%
              </Button>
            ))}
          </Flex>
          {vestingInformation?.percentage && vestingInformation.percentage > 0 && (
            <IfoHasVestingNotice url={articleUrl} />
          )}
          <Text color="textSubtle" fontSize="12px" mb="24px">
            {t(
              'If you don’t commit enough CAKE, you may not receive a meaningful amount of IFO tokens, or you may not receive any IFO tokens at all.',
            )}
            <Link
              fontSize="12px"
              display="inline"
              href="https://docs.pancakeswap.finance/products/ifo-initial-farm-offering"
              external
            >
              {t('Read more')}
            </Link>
          </Text>
          <ApproveConfirmButtons
            isApproveDisabled={isConfirmed || isConfirming || isApproved || !value}
            isApproving={isApproving}
            isConfirmDisabled={
              !isApproved || isConfirmed || valueWithTokenDecimals.isNaN() || valueWithTokenDecimals.eq(0) || isWarning
            }
            isConfirming={isConfirming}
            onApprove={handleApprove}
            onConfirm={handleConfirm}
          />
        </Box>
      </ModalBody>
    </Modal>
  )
}

export default ContributeModal
