import { ContextApi, useTranslation } from '@iguanadex/localization'
import { BinanceIcon, Box, Button, Flex, Grid, Skeleton, Text, useModal } from '@iguanadex/uikit'
import { formatNumber } from '@iguanadex/utils/formatBalance'
import BigNumber from 'bignumber.js'
import { useBNBPrice } from 'hooks/useBNBPrice'
import { NftToken } from 'state/nftMarket/types'
import { styled } from 'styled-components'
import { safeGetAddress } from 'utils'
import BuyModal from 'views/Nft/market/components/BuySellModals/BuyModal'
import SellModal from 'views/Nft/market/components/BuySellModals/SellModal'
import ProfileCell from 'views/Nft/market/components/ProfileCell'
import { useAccount } from 'wagmi'
import { ButtonContainer } from '../../shared/styles'

const OwnersTableRow = styled(Grid)`
  grid-template-columns: 2fr 2fr 1fr;
  grid-row-gap: 16px;
  margin-top: 16px;
  & > div {
    padding-bottom: 16px;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
  }
`

interface RowProps {
  t: ContextApi['t']
  nft: NftToken
  bnbBusdPrice: BigNumber
  account?: string
  onSuccessSale: () => void
}

const Row: React.FC<React.PropsWithChildren<RowProps>> = ({ t, nft, bnbBusdPrice, account, onSuccessSale }) => {
  const priceInUsd =
    nft?.marketData?.currentAskPrice && bnbBusdPrice
      ? bnbBusdPrice.multipliedBy(parseFloat(nft?.marketData?.currentAskPrice)).toNumber()
      : undefined

  const ownNft = account ? safeGetAddress(nft?.marketData?.currentSeller) === safeGetAddress(account) : false
  const [onPresentBuyModal] = useModal(<BuyModal nftToBuy={nft} />)
  const [onPresentAdjustPriceModal] = useModal(
    <SellModal variant="edit" nftToSell={nft} onSuccessSale={onSuccessSale} />,
  )

  return (
    <>
      <Box pl="24px">
        <Flex justifySelf="flex-start" alignItems="center" width="max-content">
          <BinanceIcon width="24px" height="24px" mr="8px" />
          {nft?.marketData?.currentAskPrice ? (
            <Text bold>{formatNumber(parseFloat(nft?.marketData?.currentAskPrice), 0, 5)}</Text>
          ) : null}
        </Flex>
        {priceInUsd ? (
          <Text fontSize="12px" color="textSubtle">
            {`(~${formatNumber(priceInUsd, 2, 2)} USD)`}
          </Text>
        ) : (
          <Skeleton width="86px" height="12px" mt="4px" />
        )}
      </Box>
      <Box>
        {nft?.marketData?.currentSeller ? (
          <Flex width="max-content" alignItems="center">
            <ProfileCell accountAddress={nft.marketData.currentSeller} />
          </Flex>
        ) : null}
      </Box>
      <ButtonContainer>
        {ownNft ? (
          <Button
            disabled={!nft?.marketData?.isTradable}
            scale="sm"
            variant="danger"
            maxWidth="128px"
            onClick={onPresentAdjustPriceModal}
          >
            {t('Edit')}
          </Button>
        ) : (
          <Button
            disabled={!nft?.marketData?.isTradable}
            scale="sm"
            variant="secondary"
            maxWidth="128px"
            onClick={onPresentBuyModal}
          >
            {t('Buy')}
          </Button>
        )}
      </ButtonContainer>
    </>
  )
}

interface ForSaleTableRowsProps {
  nftsForSale: NftToken[]
  onSuccessSale: () => void
}

const ForSaleTableRow: React.FC<React.PropsWithChildren<ForSaleTableRowsProps>> = ({ nftsForSale, onSuccessSale }) => {
  const { address: account } = useAccount()
  const { t } = useTranslation()
  const bnbBusdPrice = useBNBPrice()
  return (
    <OwnersTableRow>
      {nftsForSale.map((nft) => (
        <Row
          key={nft.tokenId}
          t={t}
          nft={nft}
          bnbBusdPrice={bnbBusdPrice}
          account={account}
          onSuccessSale={onSuccessSale}
        />
      ))}
    </OwnersTableRow>
  )
}

export default ForSaleTableRow
