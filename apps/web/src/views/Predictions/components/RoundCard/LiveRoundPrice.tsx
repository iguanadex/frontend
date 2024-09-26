import { BetPosition } from '@iguanadex/prediction'
import { Skeleton, TooltipText } from '@iguanadex/uikit'
import { formatBigIntToFixed } from '@iguanadex/utils/formatBalance'
import React, { memo, useMemo } from 'react'
import CountUp from 'react-countup'

interface LiveRoundPriceProps {
  displayedDecimals: number
  betPosition: BetPosition
  price: bigint
}

const LiveRoundPrice: React.FC<React.PropsWithChildren<LiveRoundPriceProps>> = ({
  displayedDecimals,
  betPosition,
  price,
}) => {
  const priceAsNumber = useMemo(() => parseFloat(formatBigIntToFixed(price, 4, 8)), [price])

  const priceColor = useMemo(() => {
    switch (betPosition) {
      case BetPosition.BULL:
        return 'success'
      case BetPosition.BEAR:
        return 'failure'
      case BetPosition.HOUSE:
      default:
        return 'textDisabled'
    }
  }, [betPosition])

  if (!Number.isFinite(priceAsNumber)) {
    return null
  }

  if (price < 0n) {
    return <Skeleton height="36px" width="94px" />
  }

  return (
    <CountUp start={0} preserveValue delay={0} end={priceAsNumber} prefix="$" decimals={displayedDecimals} duration={1}>
      {({ countUpRef }) => (
        <TooltipText bold color={priceColor} fontSize="24px" style={{ minHeight: '36px' }}>
          <span ref={countUpRef} />
        </TooltipText>
      )}
    </CountUp>
  )
}

export default memo(LiveRoundPrice)
