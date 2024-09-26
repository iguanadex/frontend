import { TranslateFunction } from '@iguanadex/localization'
import { Strategy } from '@iguanadex/position-managers'

export function getStrategyName(t: TranslateFunction, strategy: Strategy, allTokenName?: string) {
  switch (strategy) {
    case Strategy.TYPICAL_WIDE:
      return t('Typical Wide')
    case Strategy.YIELD_IQ:
      return t('Yield IQ')
    case Strategy.ACTIVE:
      return t('Active')
    case Strategy.PASSIVE:
      return t('Passive')
    case Strategy.PEGGED:
      return t('Pegged')
    case Strategy.ALO:
      return t('Automated Liquidity Optimization')
    case Strategy.ASCEND:
      return t('Ascend')
    case Strategy.SAVINGS:
      return `${allTokenName ? `${allTokenName} ` : ''}${t('Savings')}`
    default:
      return ''
  }
}
