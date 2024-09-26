import { PoolType, SmartRouter, V4Router } from '@iguanadex/smart-router'
import { TradeType } from '@iguanadex/swap-sdk-core'

import { OrderType } from './orderType'

type LastInUnion<U> = UnionToIntersection<U extends unknown ? (x: U) => 0 : never> extends (x: infer l) => 0 ? l : never
type UnionToIntersection<union> = (union extends unknown ? (arg: union) => 0 : never) extends (arg: infer i) => 0
  ? i
  : never

export type UnionToTuple<
  union,
  ///
  last = LastInUnion<union>,
> = [union] extends [never] ? [] : [...UnionToTuple<Exclude<union, last>>, last]

export type TradeTypeKey = keyof typeof TradeType

export type PoolTypeKey = keyof typeof PoolType

export type TradeTypeKeys = UnionToTuple<TradeTypeKey>

export type PoolTypeKeys = UnionToTuple<PoolTypeKey>

export type AMMOrder = V4Router.Transformer.SerializedV4Trade & {
  quoteGasAdjusted: SmartRouter.Transformer.SerializedCurrencyAmount
  gasUseEstimateUSD: string
}

export type AMMRequestConfig = {
  protocols: ('V2' | 'V3' | 'STABLE')[]
  routingType: OrderType.PCS_CLASSIC
  gasPriceWei?: string
  maxHops?: number
  maxSplits?: number
}
