import { ChainId } from '@iguanadex/chains'
import { chainlinkOracleXTZ } from '@iguanadex/prediction'
import { BIG_ZERO } from '@iguanadex/utils/bigNumber'
import { useQuery } from '@tanstack/react-query'
import BigNumber from 'bignumber.js'
import { chainlinkOracleABI } from 'config/abi/chainlinkOracle'
import { FAST_INTERVAL } from 'config/constants'
import { publicClient } from 'utils/wagmi'
import { formatUnits } from 'viem'

// for migration to bignumber.js to avoid breaking changes
export const useCakePrice = ({ enabled = true } = {}) => {
  const { data } = useQuery<BigNumber, Error>({
    queryKey: ['cakePrice'],
    queryFn: async () => new BigNumber(await getCakePriceFromOracle()),
    staleTime: FAST_INTERVAL,
    refetchInterval: FAST_INTERVAL,
    enabled,
  })
  return data ?? BIG_ZERO
}

export const getCakePriceFromOracle = async () => {
  const data = await publicClient({ chainId: ChainId.ETHERLINK }).readContract({
    abi: chainlinkOracleABI,
    address: chainlinkOracleXTZ[ChainId.ETHERLINK],
    // address: chainlinkOracleCAKE[ChainId.BSC],
    functionName: 'latestAnswer',
  })

  return formatUnits(data, 8)
}
