import { Currency, CurrencyAmount } from '@iguanadex/sdk'
import { BalanceInput, Button, Flex, Text } from '@iguanadex/uikit'
import { CurrencyLogo } from '@iguanadex/widgets-internal'
import { MouseEvent, ReactNode, useCallback, useMemo } from 'react'

interface Props {
  value: string | number
  onChange: (val: string) => void
  currency?: Currency
  balance?: CurrencyAmount<Currency>
  balanceText?: ReactNode
  maxText?: ReactNode
  useTrustWalletUrl?: boolean
}

export function CurrencyInput({
  currency,
  balance,
  value,
  onChange,
  balanceText,
  maxText = 'Max',
  useTrustWalletUrl,
  ...rest
}: Props) {
  const isMax = useMemo(() => balance && value && balance.toExact() === value, [balance, value])
  const onMaxClick = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      onChange?.(balance?.toExact() || '')
    },
    [onChange, balance],
  )

  const currencyDisplay = currency ? (
    <Flex justifyContent="flex-end">
      <CurrencyLogo currency={currency} useTrustWalletUrl={useTrustWalletUrl} />
      <Text bold ml="4px">
        {currency.symbol}
      </Text>
    </Flex>
  ) : null

  const balanceDisplay = balance ? (
    <Flex justifyContent="flex-end" alignItems="center">
      <Text color="textSubtle" fontSize={1}>
        {balanceText}
      </Text>
      <Button
        onClick={onMaxClick}
        scale="xs"
        ml="4px"
        variant={isMax ? 'primary' : 'secondary'}
        style={{ textTransform: 'uppercase' }}
      >
        {maxText}
      </Button>
    </Flex>
  ) : null

  return (
    <BalanceInput
      {...rest}
      inputProps={{ style: { textAlign: 'left' } }}
      value={value}
      onUserInput={onChange}
      unit={currencyDisplay}
      currencyValue={balanceDisplay}
    />
  )
}
