import { ERC20Token, WNATIVE } from '@iguanadex/sdk'
import { feeOnTransferDetectorAddresses, fetchTokenFeeOnTransfer } from '@iguanadex/smart-router'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { usePublicClient } from 'wagmi'

export function useTokenFee(token?: ERC20Token) {
  const publicClient = usePublicClient({ chainId: token?.chainId })
  return useQuery({
    queryKey: ['tokenFee', token?.serialize, publicClient.key],
    queryFn: () => {
      if (!token) {
        throw new Error('Token not found')
      }
      if (publicClient.chain.id !== token.chainId) {
        throw new Error('Chain id mismatch')
      }
      if (!(token.chainId in feeOnTransferDetectorAddresses)) {
        throw new Error('Fee on transfer detector not found')
      }
      return fetchTokenFeeOnTransfer(publicClient, token.address)
    },
    placeholderData: keepPreviousData,
    enabled:
      !!token &&
      !!publicClient &&
      WNATIVE[publicClient.chain.id as keyof typeof WNATIVE] &&
      !token.equals(WNATIVE[publicClient.chain.id as keyof typeof WNATIVE]),
  })
}
