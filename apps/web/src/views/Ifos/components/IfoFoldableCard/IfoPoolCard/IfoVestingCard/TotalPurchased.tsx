import { Ifo, PoolIds } from '@iguanadex/ifos'
import { useTranslation } from '@iguanadex/localization'
import { BalanceWithLoading, Box, Flex, HelpIcon, Text, useTooltip } from '@iguanadex/uikit'
import { BIG_ZERO } from '@iguanadex/utils/bigNumber'
import { getBalanceNumber } from '@iguanadex/utils/formatBalance'
import { LightGreyCard } from 'components/Card'
import { TokenImage } from 'components/TokenImage'
import { WalletIfoData } from 'views/Ifos/types'

interface TotalPurchasedProps {
  ifo: Ifo
  poolId: PoolIds
  walletIfoData: WalletIfoData
}

const TotalPurchased: React.FC<React.PropsWithChildren<TotalPurchasedProps>> = ({ ifo, poolId, walletIfoData }) => {
  const { t } = useTranslation()
  const { token } = ifo
  const offeringAmountInToken = walletIfoData[poolId]?.offeringAmountInToken
  const amountTokenCommittedInLP = walletIfoData[poolId]?.amountTokenCommittedInLP
  const refundingAmountInLP = walletIfoData[poolId]?.refundingAmountInLP
  const spentAmount = amountTokenCommittedInLP?.minus(refundingAmountInLP || BIG_ZERO)

  const tooltipContentOfSpent = t(
    'Based on "overflow" sales method. %refundingAmount% unspent %spentToken% are available to claim after the sale is completed.',
    {
      refundingAmount: getBalanceNumber(refundingAmountInLP, ifo.currency.decimals).toFixed(4),
      spentToken: ifo.currency.symbol,
    },
  )
  const {
    targetRef: tagTargetRefOfSpent,
    tooltip: tagTooltipOfSpent,
    tooltipVisible: tagTooltipVisibleOfSpent,
  } = useTooltip(tooltipContentOfSpent, {
    placement: 'bottom',
  })

  return (
    <LightGreyCard mt="35px" mb="24px">
      <Flex>
        <TokenImage mr="16px" width={32} height={32} token={token} style={{ alignSelf: 'flex-start' }} />
        <Box>
          <Text color="secondary" bold fontSize="12px" textTransform="uppercase">
            {t('Total %symbol% purchased', { symbol: token.symbol })}
          </Text>
          <BalanceWithLoading
            bold
            prefix="~"
            decimals={4}
            fontSize="20px"
            value={getBalanceNumber(offeringAmountInToken, token.decimals)}
          />
        </Box>
      </Flex>
      <Flex>
        <TokenImage mr="16px" width={32} height={32} token={ifo.currency} style={{ alignSelf: 'flex-start' }} />
        <Box>
          <Text bold color="secondary" fontSize="12px" textTransform="uppercase">
            {t('Your %symbol% committed', { symbol: ifo.currency.symbol })}
          </Text>
          <BalanceWithLoading
            bold
            decimals={4}
            fontSize="20px"
            value={getBalanceNumber(amountTokenCommittedInLP, ifo.currency.decimals)}
          />
        </Box>
      </Flex>
      <Flex ml="48px">
        <Box>
          <Flex>
            <Text bold color="secondary" fontSize="12px" textTransform="uppercase">
              {t('Your %symbol% spent', { symbol: ifo.currency.symbol })}
            </Text>
            {tagTooltipVisibleOfSpent && tagTooltipOfSpent}
            <span ref={tagTargetRefOfSpent}>
              <HelpIcon ml="4px" width="15px" height="15px" color="textSubtle" />
            </span>
          </Flex>
          <BalanceWithLoading
            bold
            decimals={4}
            fontSize="20px"
            value={getBalanceNumber(spentAmount, ifo.currency.decimals)}
          />
        </Box>
      </Flex>
    </LightGreyCard>
  )
}

export default TotalPurchased
