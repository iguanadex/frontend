import {
  BLOCKS_CLIENT,
  BLOCKS_CLIENT_BASE,
  BLOCKS_CLIENT_ETH,
  BLOCKS_CLIENT_ETHERLINK,
  BLOCKS_CLIENT_ETHERLINK_TESTNET,
  BLOCKS_CLIENT_LINEA,
  BLOCKS_CLIENT_OPBNB,
  BLOCKS_CLIENT_ZKSYNC,
} from 'config/constants/endpoints'
import { GraphQLClient } from 'graphql-request'
import { infoClient, infoClientETH, infoStableSwapClients, v2Clients } from 'utils/graphql'

import { ChainId } from '@pancakeswap/chains'
import {
  BSC_TOKEN_WHITELIST,
  ETH_TOKEN_BLACKLIST,
  ETH_TOKEN_WHITELIST,
  PCS_ETH_START,
  PCS_V2_START,
  TOKEN_BLACKLIST,
} from 'config/constants/info'
import mapValues from 'lodash/mapValues'
import { arbitrum, base, bsc, linea, mainnet, opBNB, polygonZkEvm, zkSync } from 'wagmi/chains'

const etherlink = {
  id: 42_793,
  name: 'Etherlink',
  network: 'etherlink',
  nativeCurrency: {
    decimals: 18,
    name: 'tez',
    symbol: 'XTZ',
  },
  rpcUrls: {
    public: { http: ['https://node.mainnet.etherlink.com'] },
    default: { http: ['https://node.mainnet.etherlink.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'Etherscout', url: 'https://explorer.etherlink.com/' },
    default: { name: 'Etherscout', url: 'https://explorer.etherlink.com/' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 33899,
    },
  },
} as const

export type MultiChainName =
  | 'BSC'
  | 'ETH'
  | 'POLYGON_ZKEVM'
  | 'ZKSYNC'
  | 'ARB'
  | 'LINEA'
  | 'BASE'
  | 'OPBNB'
  | 'ETHERLINK'

export type MultiChainNameExtend = MultiChainName | 'BSC_TESTNET' | 'ZKSYNC_TESTNET' | 'ETHERLINK_TESTNET'

export const multiChainName: Record<number | string, MultiChainNameExtend> = {
  [ChainId.BSC]: 'BSC',
  [ChainId.ETHEREUM]: 'ETH',
  [ChainId.BSC_TESTNET]: 'BSC_TESTNET',
  [ChainId.POLYGON_ZKEVM]: 'POLYGON_ZKEVM',
  [ChainId.ZKSYNC]: 'ZKSYNC',
  [ChainId.LINEA]: 'LINEA',
  [ChainId.BASE]: 'BASE',
  [ChainId.OPBNB]: 'OPBNB',
  [ChainId.ARBITRUM_ONE]: 'ARB',
  [ChainId.ETHERLINK_TESTNET]: 'ETHERLINK_TESTNET',
  [ChainId.ETHERLINK]: 'ETHERLINK',
}

export const multiChainShortName: Record<number, string> = {
  [ChainId.POLYGON_ZKEVM]: 'zkEVM',
}

export const multiChainQueryMainToken: Record<MultiChainName, string> = {
  BSC: 'BNB',
  ETH: 'ETH',
  POLYGON_ZKEVM: 'ETH',
  ZKSYNC: 'ETH',
  ARB: 'ETH',
  LINEA: 'ETH',
  BASE: 'ETH',
  OPBNB: 'ETH',
  ETHERLINK: 'XTZ',
}

export const multiChainBlocksClient: Record<MultiChainNameExtend, string> = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  BSC_TESTNET: 'https://api.thegraph.com/subgraphs/name/lengocphuc99/bsc_testnet-blocks',
  POLYGON_ZKEVM: 'https://api.studio.thegraph.com/query/45376/polygon-zkevm-block/version/latest',
  ZKSYNC_TESTNET: 'https://api.studio.thegraph.com/query/45376/blocks-zksync-testnet/version/latest',
  ZKSYNC: BLOCKS_CLIENT_ZKSYNC,
  ARB: 'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks',
  LINEA: BLOCKS_CLIENT_LINEA,
  BASE: BLOCKS_CLIENT_BASE,
  OPBNB: BLOCKS_CLIENT_OPBNB,
  ETHERLINK_TESTNET: BLOCKS_CLIENT_ETHERLINK_TESTNET,
  ETHERLINK: BLOCKS_CLIENT_ETHERLINK,
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  POLYGON_ZKEVM: 1686236845,
  ZKSYNC: 1690462800, // Thu Jul 27 2023 13:00:00 UTC+0000
  ARB: 1686732526,
  LINEA: 1692878400,
  BASE: 1693483200,
  OPBNB: 1695945600,
  ETHERLINK: 1721765600, // Tue 23 Jul 2024 08:13:20 UTC+0000
}

export const multiChainId: Record<MultiChainName, ChainId> = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  POLYGON_ZKEVM: ChainId.POLYGON_ZKEVM,
  ZKSYNC: ChainId.ZKSYNC,
  ARB: ChainId.ARBITRUM_ONE,
  LINEA: ChainId.LINEA,
  BASE: ChainId.BASE,
  OPBNB: ChainId.OPBNB,
  ETHERLINK: ChainId.ETHERLINK,
}

export const multiChainPaths = {
  [ChainId.BSC]: '',
  [ChainId.ETHEREUM]: '/eth',
  [ChainId.POLYGON_ZKEVM]: '/polygon-zkevm',
  [ChainId.ZKSYNC]: '/zksync',
  [ChainId.ARBITRUM_ONE]: '/arb',
  [ChainId.LINEA]: '/linea',
  [ChainId.BASE]: '/base',
  [ChainId.OPBNB]: '/opbnb',
  [ChainId.ETHERLINK]: '/etherlink',
}

export const multiChainQueryClient = {
  BSC: infoClient,
  ETH: infoClientETH,
  POLYGON_ZKEVM: v2Clients[ChainId.POLYGON_ZKEVM],
  ZKSYNC: v2Clients[ChainId.ZKSYNC],
  ARB: v2Clients[ChainId.ARBITRUM_ONE],
  LINEA: v2Clients[ChainId.LINEA],
  BASE: v2Clients[ChainId.BASE],
  OPBNB: v2Clients[ChainId.OPBNB],
  ETHERLINK: v2Clients[ChainId.ETHERLINK],
}

export const multiChainQueryStableClient = {
  BSC: infoStableSwapClients[ChainId.BSC],
  ARB: infoStableSwapClients[ChainId.ARBITRUM_ONE],
  ETHERLINK: infoStableSwapClients[ChainId.ETHERLINK],
}

export const STABLESWAP_SUBGRAPHS_START_BLOCK = {
  ARB: 169319653,
  ETHERLINK: 16789352,
}

export const multiChainScan: Record<MultiChainName, string> = {
  BSC: bsc.blockExplorers.etherscan.name,
  ETH: mainnet.blockExplorers.etherscan.name,
  POLYGON_ZKEVM: polygonZkEvm.blockExplorers.default.name,
  ZKSYNC: zkSync.blockExplorers.default.name,
  ARB: arbitrum.blockExplorers.default.name,
  LINEA: linea.blockExplorers.default.name,
  BASE: base.blockExplorers.default.name,
  OPBNB: opBNB.blockExplorers.default.name,
  ETHERLINK: etherlink.blockExplorers.default.name,
}

export const multiChainTokenBlackList: Record<MultiChainName, string[]> = mapValues(
  {
    BSC: TOKEN_BLACKLIST,
    ETH: ETH_TOKEN_BLACKLIST,
    POLYGON_ZKEVM: ['0x'],
    ZKSYNC: ['0x'],
    ARB: ['0x'],
    LINEA: ['0x'],
    BASE: ['0x'],
    OPBNB: ['0x'],
    ETHERLINK: ['0x'],
  },
  (val) => val.map((address) => address.toLowerCase()),
)

export const multiChainTokenWhiteList: Record<MultiChainName, string[]> = mapValues(
  {
    BSC: BSC_TOKEN_WHITELIST,
    ETH: ETH_TOKEN_WHITELIST,
    POLYGON_ZKEVM: [],
    ZKSYNC: [],
    ARB: [],
    LINEA: [],
    BASE: [],
    OPBNB: [],
    ETHERLINK: [],
  },
  (val) => val.map((address) => address.toLowerCase()),
)

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainNameExtend): GraphQLClient => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return multiChainQueryStableClient[chainName]
  return multiChainQueryClient[chainName]
}

export const subgraphTokenName = {
  [ChainId.BSC]: {
    '0x738d96Caf7096659DB4C1aFbf1E1BDFD281f388C': 'Ankr Staked MATIC',
    '0x14016E85a25aeb13065688cAFB43044C2ef86784': 'True USD Old',
    '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5': 'Lista USD',
    '0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B': 'Staked Lista BNB',
    '0x346575fC7f07E6994D76199E41D13dC1575322E1': 'dLP',
  },
}

export const subgraphTokenSymbol = {
  [ChainId.BSC]: {
    '0x14016E85a25aeb13065688cAFB43044C2ef86784': 'TUSDOLD',
    '0x346575fC7f07E6994D76199E41D13dC1575322E1': 'dLP',
    '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5': 'lisUSD',
    '0xB0b84D294e0C75A6abe60171b70edEb2EFd14A1B': 'slisBNB',
    '0x11727E5b7Fa33FF4D380F3E7E877F19876c25b97': 'mdLP',
  },
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')

export const ChainLinkSupportChains = [ChainId.BSC, ChainId.BSC_TESTNET]
