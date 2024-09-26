import { ChainId } from '@iguanadex/chains'
import { ERC20Token } from '@iguanadex/sdk'
import { bscTokens } from '@iguanadex/tokens'

export const WALLCHAIN_ENABLED = true

export const WallchainKeys = {
  bsc: process.env.NEXT_PUBLIC_WALLCHAIN_BSC_KEY,
} as { [key: string]: string }

export const WallchainTokens = [
  new ERC20Token(ChainId.BSC, '0xC9882dEF23bc42D53895b8361D0b1EDC7570Bc6A', 18, 'FIST'),
  bscTokens.raca,
  bscTokens.rdnt,
  bscTokens.mbox,
  bscTokens.link,
  bscTokens.xrp,
]
