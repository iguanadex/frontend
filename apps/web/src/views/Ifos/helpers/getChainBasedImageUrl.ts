import { ChainId, getChainName } from '@iguanadex/chains'

type GetUrlOptions = {
  chainId?: ChainId
  name: string
}

export function getChainBasedImageUrl({ chainId = ChainId.BSC, name }: GetUrlOptions) {
  return `/images/ifos/${name}/${getChainName(chainId)}.png`
}
