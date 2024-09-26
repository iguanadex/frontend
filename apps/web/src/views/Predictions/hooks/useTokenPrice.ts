import { Currency } from '@iguanadex/swap-sdk-core'
import { BIG_ZERO } from '@iguanadex/utils/bigNumber'
import BigNumber from 'bignumber.js'
import { useCurrencyUsdPrice } from 'hooks/useCurrencyUsdPrice'
import { useMemo } from 'react'

export const useTokenUsdPriceBigNumber = (token: Currency | undefined, enabled = true): BigNumber => {
  const { data: tokenPrice } = useCurrencyUsdPrice(token, {
    enabled,
  })

  return useMemo(() => (tokenPrice ? new BigNumber(tokenPrice) : BIG_ZERO), [tokenPrice])
}
