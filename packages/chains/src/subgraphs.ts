import { ChainId } from './chainId'

type SubgraphParams = {
  noderealApiKey?: string
  etherlinkApiKey?: string
}

const publicSubgraphParams = {
  // Public key for nodereal subgraph endpoint
  noderealApiKey: '19bd2b3f75c24e23bb8a0e9d4f55b271',
  etherlinkApiKey: '5258cc72624688ae2fcd0c4119e0129c',
}

export const V3_SUBGRAPHS = getV3Subgraphs(publicSubgraphParams)

export const V2_SUBGRAPHS = getV2Subgraphs(publicSubgraphParams)

export const BLOCKS_SUBGRAPHS = getBlocksSubgraphs(publicSubgraphParams)

export const STABLESWAP_SUBGRAPHS = {
  [ChainId.BSC]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap',
  [ChainId.ARBITRUM_ONE]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap-arb',
  [ChainId.ETHERLINK]: `https://api.goldsky.com/api/public/project_cmcbuhqzll9ql01t6083a91go/subgraphs/stableswap-etherlink/1.0.0/gn`,
}

export function getV3Subgraphs({ noderealApiKey, etherlinkApiKey }: SubgraphParams) {
  return {
    [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-eth',
    [ChainId.GOERLI]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-goerli',
    [ChainId.BSC]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-bsc',
    [ChainId.BSC_TESTNET]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-chapel',
    [ChainId.ARBITRUM_ONE]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-arb',
    [ChainId.ARBITRUM_GOERLI]: 'https://api.thegraph.com/subgraphs/name/chef-jojo/exhange-v3-arb-goerli',
    [ChainId.POLYGON_ZKEVM]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-polygon-zkevm/version/latest',
    [ChainId.POLYGON_ZKEVM_TESTNET]: null,
    [ChainId.ZKSYNC]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-zksync/version/latest',
    [ChainId.ZKSYNC_TESTNET]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-zksync-testnet/version/latest',
    [ChainId.LINEA]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-linea/version/latest',
    [ChainId.LINEA_TESTNET]:
      'https://thegraph.goerli.zkevm.consensys.net/subgraphs/name/pancakeswap/exchange-v3-linea-goerli',
    [ChainId.BASE]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-base/version/latest',
    [ChainId.BASE_TESTNET]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-base-testnet/version/latest',
    [ChainId.OPBNB]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/exchange-v3`,
    [ChainId.OPBNB_TESTNET]: null,
    [ChainId.SCROLL_SEPOLIA]: 'https://api.studio.thegraph.com/query/45376/exchange-v3-scroll-sepolia/version/latest',
    [ChainId.SEPOLIA]: null,
    [ChainId.ARBITRUM_SEPOLIA]: null,
    [ChainId.BASE_SEPOLIA]: null,
    [ChainId.ETHERLINK_TESTNET]:
      'https://api.studio.thegraph.com/query/107385/exchange-v3-etherlink-test/version/latest',
    [ChainId.ETHERLINK]: `https://gateway.thegraph.com/api/${etherlinkApiKey}/subgraphs/id/FWg1DA2HPHRGS1ZTQg1pWiNisVmnXHHHD5znqE529kAf`,
  } satisfies Record<ChainId, string | null>
}

export function getV2Subgraphs({ noderealApiKey, etherlinkApiKey }: SubgraphParams) {
  return {
    [ChainId.BSC]: 'https://proxy-worker-api.pancakeswap.com/bsc-exchange',
    [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
    [ChainId.POLYGON_ZKEVM]: 'https://api.studio.thegraph.com/query/45376/exchange-v2-polygon-zkevm/version/latest',
    [ChainId.ZKSYNC_TESTNET]: 'https://api.studio.thegraph.com/query/45376/exchange-v2-zksync-testnet/version/latest',
    [ChainId.ZKSYNC]: ' https://api.studio.thegraph.com/query/45376/exchange-v2-zksync/version/latest',
    [ChainId.LINEA_TESTNET]: 'https://thegraph.goerli.zkevm.consensys.net/subgraphs/name/pancakeswap/exhange-eth/',
    [ChainId.ARBITRUM_ONE]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v2-arb',
    [ChainId.LINEA]: 'https://api.studio.thegraph.com/query/45376/exchange-v2-linea/version/latest',
    [ChainId.BASE]: 'https://api.studio.thegraph.com/query/45376/exchange-v2-base/version/latest',
    [ChainId.OPBNB]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/exchange-v2`,
    [ChainId.ETHERLINK_TESTNET]: 'https://api.studio.thegraph.com/query/107385/exchange-v2-etl-testnet/version/latest',
    [ChainId.ETHERLINK]: `https://gateway.thegraph.com/api/${etherlinkApiKey}/subgraphs/id/7vaswWAiGSVk4WKe9KRnGRsrfwSDqS35Cxf5sA67KWWe`,
  }
}

export function getBlocksSubgraphs({ noderealApiKey, etherlinkApiKey }: SubgraphParams) {
  return {
    [ChainId.BSC]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks',
    [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    [ChainId.POLYGON_ZKEVM]: 'https://api.studio.thegraph.com/query/45376/polygon-zkevm-block/version/latest',
    [ChainId.ZKSYNC]: 'https://api.studio.thegraph.com/query/45376/blocks-zksync/version/latest',
    [ChainId.ARBITRUM_ONE]: 'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks',
    [ChainId.LINEA]: 'https://api.studio.thegraph.com/query/45376/blocks-linea/version/latest',
    [ChainId.BASE]: 'https://api.studio.thegraph.com/query/48211/base-blocks/version/latest',
    [ChainId.OPBNB]: `https://open-platform-ap.nodereal.io/${noderealApiKey}/opbnb-mainnet-graph-query/subgraphs/name/pancakeswap/blocks`,
    [ChainId.ETHERLINK_TESTNET]: 'https://api.studio.thegraph.com/query/107385/blocks-etherlink-testnet/version/latest',
    [ChainId.ETHERLINK]: `https://gateway.thegraph.com/api/${etherlinkApiKey}/subgraphs/id/8SDVxT5MJd7YaFR8pmSsQ5Lxb49oGzDMRt3T8RQWepUq`,
  }
}
