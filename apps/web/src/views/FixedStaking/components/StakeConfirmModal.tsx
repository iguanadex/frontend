import { useTranslation } from '@iguanadex/localization'
import { CurrencyAmount, Percent } from '@iguanadex/sdk'
import { Currency } from '@iguanadex/swap-sdk-core'
import { Box, Flex, PreTitle, Text } from '@iguanadex/uikit'
import { GreyCard } from 'components/Card'

import { AmountWithUSDSub } from './AmountWithUSDSub'
import FixedStakingOverview from './FixedStakingOverview'
import { StakedLimitEndOn } from './StakedLimitEndOn'

export function StakeConfirmModal({
  stakeCurrencyAmount,
  poolEndDay,
  lockAPR,
  boostAPR,
  unlockAPR,
  lockPeriod,
  isBoost,
}: {
  stakeCurrencyAmount: CurrencyAmount<Currency>
  lockPeriod: number
  boostAPR: Percent
  lockAPR: Percent
  unlockAPR: Percent
  poolEndDay: number
  isBoost?: boolean
}) {
  const { t } = useTranslation()

  return (
    <>
      <PreTitle color="textSubtle">{t('Overview')}</PreTitle>
      <GreyCard mb="16px">
        <Flex justifyContent="space-between">
          <Box>
            <PreTitle fontSize="12px" color="textSubtle">
              {t('Stake Amount')}
            </PreTitle>
            <AmountWithUSDSub amount={stakeCurrencyAmount} />
          </Box>
          <Box
            style={{
              textAlign: 'end',
            }}
          >
            <PreTitle fontSize="12px" color="textSubtle">
              {t('Ends In')}
            </PreTitle>

            <Text bold>
              {lockPeriod} {t('days')}
            </Text>

            <Text color="textSubtle" fontSize="12px" marginTop="-4px">
              On <StakedLimitEndOn lockPeriod={lockPeriod} poolEndDay={poolEndDay} />
            </Text>
          </Box>
        </Flex>
      </GreyCard>
      <PreTitle textTransform="uppercase" bold mb="8px">
        {t('Position Details')}
      </PreTitle>
      <FixedStakingOverview
        isUnstakeView
        disableStrike
        poolEndDay={poolEndDay}
        stakeAmount={stakeCurrencyAmount}
        isBoost={isBoost}
        lockAPR={lockAPR}
        boostAPR={boostAPR}
        unlockAPR={unlockAPR}
        lockPeriod={lockPeriod}
      />
    </>
  )
}
