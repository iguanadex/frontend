import { etherlinkTokens } from '@pancakeswap/tokens'

import { StableSwapPool } from '../../types'

export const pools: StableSwapPool[] = [
  {
    lpSymbol: 'USDT-USDC LP',
    lpAddress: '0x9a3dF3828ee08e0d0bE94C719ac279c98C441131',
    token: etherlinkTokens.usdt,
    quoteToken: etherlinkTokens.usdc,
    stableSwapAddress: '0xbB6AF5Cb8Bb12129AA051A96B25a94f33c117557',
    infoStableSwapAddress: '0x2Cf3967DA565E7C83676d326bE1f316CE7077507',
    stableLpFee: 0.0001,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  {
    lpSymbol: 'LBTC-WBTC LP',
    lpAddress: '0x80Cf929f8f3cf0648D9F44a8d948132a5883a4dF',
    token: etherlinkTokens.lbtc,
    quoteToken: etherlinkTokens.wbtc,
    stableSwapAddress: '0xF0cDE65d6899b13d20508FD071B331A86B57a13d',
    infoStableSwapAddress: '0x2Cf3967DA565E7C83676d326bE1f316CE7077507',
    stableLpFee: 0.0001,
    stableLpFeeRateOfTotalFee: 0.5,
  },
  // {
  //   lpSymbol: 'USDC-mBASIS LP',
  //   lpAddress: '0x1A2329546f11e4fE55b853D98Bba2c4678E3105A',
  //   token: etherlinkTokens.usdt,
  //   quoteToken: etherlinkTokens.mbasis,
  //   stableSwapAddress: '0x73ed25e04Aa673ddf7411441098fC5ae19976CE0',
  //   infoStableSwapAddress: '0x58B2F00f74a1877510Ec37b22f116Bf5D63Ab1b0',
  //   stableLpFee: 0.0025,
  //   stableLpFeeRateOfTotalFee: 0.5,
  // },
  // {
  //   lpSymbol: 'USDC-mTBILL LP',
  //   lpAddress: '0x1A2329546f11e4fE55b853D98Bba2c4678E3105A',
  //   token: etherlinkTokens.usdt,
  //   quoteToken: etherlinkTokens.mtbill,
  //   stableSwapAddress: '0x73ed25e04Aa673ddf7411441098fC5ae19976CE0',
  //   infoStableSwapAddress: '0x58B2F00f74a1877510Ec37b22f116Bf5D63Ab1b0',
  //   stableLpFee: 0.0025,
  //   stableLpFeeRateOfTotalFee: 0.5,
  // }
]
