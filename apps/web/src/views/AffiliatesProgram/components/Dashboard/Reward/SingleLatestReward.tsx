import { ChainId } from '@iguanadex/chains'
import { useTranslation } from '@iguanadex/localization'
import { Button, Flex, Text } from '@iguanadex/uikit'
import { formatNumber } from '@iguanadex/utils/formatBalance'
import { LightGreyCard } from 'components/Card'
import { useActiveChainId } from 'hooks/useActiveChainId'

interface SingleLatestRewardProps {
  usdAmountTitle: string
  usdAmount: number
  cakeAmountTitle: string
  cakeAmount: number
  disabled: boolean
  clickClaim: () => void
}

const SingleLatestReward: React.FC<React.PropsWithChildren<SingleLatestRewardProps>> = ({
  usdAmountTitle,
  usdAmount,
  cakeAmountTitle,
  cakeAmount,
  disabled,
  clickClaim,
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()

  return (
    <LightGreyCard>
      <Flex justifyContent="space-between" mb="7px">
        <Text textTransform="uppercase" color="textSubtle" fontSize="14px">
          {usdAmountTitle}
        </Text>
        <Text bold fontSize="14px" textAlign="right">
          {`$ ${formatNumber(usdAmount)}`}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text textTransform="uppercase" color="textSubtle" fontSize="14px">
          {cakeAmountTitle}
        </Text>
        <Text bold fontSize="14px" textAlign="right">
          {`~ ${formatNumber(cakeAmount)} CAKE`}
        </Text>
      </Flex>
      <Button onClick={clickClaim} disabled={chainId !== ChainId.BSC || disabled} mt="18px" width="100%">
        {t('Claim')}
      </Button>
    </LightGreyCard>
  )
}

export default SingleLatestReward
