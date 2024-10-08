import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'
import { SupportedChainId } from './constants/supportedChains'
import { ContractAddresses } from './type'

export const chainlinkOracleBNB: Record<string, Address> = {
  [ChainId.BSC]: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
  [ChainId.ZKSYNC]: '0x',
  // [ChainId.ARBITRUM_ONE]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleCAKE: Record<string, Address> = {
  [ChainId.BSC]: '0xB6064eD41d4f67e353768aA239cA86f4F73665a1',
  [ChainId.ZKSYNC]: '0x',
  // [ChainId.ARBITRUM_ONE]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleETH: Record<string, Address> = {
  [ChainId.BSC]: '0x',
  [ChainId.ZKSYNC]: '0x',
  // [ChainId.ARBITRUM_ONE]: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleWBTC: Record<string, Address> = {
  [ChainId.BSC]: '0x',
  [ChainId.ZKSYNC]: '0x',
  // [ChainId.ARBITRUM_ONE]: '0x6ce185860a4963106506C203335A2910413708e9',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleXTZ: Record<string, Address> = {
  [ChainId.ETHERLINK]: '0xe92c00BC72dD12e26E61212c04E8D93aa09624F2',
  // [ChainId.ARBITRUM_ONE]: '0x',
}
