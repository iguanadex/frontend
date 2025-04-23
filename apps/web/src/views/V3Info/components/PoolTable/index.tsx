import { useTranslation } from '@pancakeswap/localization'
import { ArrowBackIcon, ArrowForwardIcon, Box, SortArrowIcon, Text, TokenLogo } from '@pancakeswap/uikit'
import { ASSET_CDN } from 'config/constants/endpoints'
import { useActiveChainId } from 'hooks/useActiveChainId'
import NextLink from 'next/link'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useChainIdByQuery, useChainNameByQuery, useMultiChainPath } from 'state/info/hooks'
import { styled } from 'styled-components'
import { getTokenSymbolAlias } from 'utils/getTokenAlias'
import { DoubleCurrencyLogo } from 'views/Info/components/CurrencyLogo'
import { Arrow, Break, ClickableColumnHeader, PageButtons, TableWrapper } from 'views/Info/components/InfoTables/shared'
import { POOL_HIDE, v3InfoPath } from '../../constants'
import { PoolData } from '../../types'
import { feeTierPercent } from '../../utils'
import { formatDollarAmount } from '../../utils/numbers'
import { GreyBadge } from '../Card'
import Loader, { LoadingRows } from '../Loader'
import { RowFixed } from '../Row'
import { SortButton, useSortFieldClassName } from '../SortButton'

const ResponsiveGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  align-items: center;

  grid-template-columns: 20px 3.5fr repeat(4, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 20px 1.5fr repeat(3, 1fr);
    & :nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 20px 1.5fr repeat(2, 1fr);
    & :nth-child(6) {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1.3fr 1fr;
    > *:nth-child(1) {
      display: none;
    }
  }
`

const LinkWrapper = styled(NextLink)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const SORT_FIELD = {
  feeTier: 'feeTier',
  volumeUSD: 'volumeUSD',
  tvlUSD: 'tvlUSD',
  volumeUSDWeek: 'volumeUSDWeek',
  appleFarmAPR: 'appleFarmAPR',
}

const AppleStyledLogo = styled(TokenLogo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  color: ${({ theme }) => theme.colors.text};
`

const appleFarmRaw = (poolData: PoolData) => {
  if (!poolData.appleFarmAPR) return <Text fontWeight={400}>-</Text>
  return (
    <RowFixed>
      <Text mr="8px" fontWeight={400}>
        {poolData.appleFarmAPR.toFixed(2)}%
      </Text>
      <AppleStyledLogo size="16px" srcs={[`${ASSET_CDN}/apple_farm/appleSquare.svg`]} alt="token logo" useFilledIcon />
    </RowFixed>
  )
}

const DataRow = ({ poolData, index, chainPath }: { poolData: PoolData; index: number; chainPath: string }) => {
  const chainName = useChainNameByQuery()
  const chainId = useChainIdByQuery()
  const token0symbol = getTokenSymbolAlias(poolData.token0.address, chainId, poolData.token0.symbol)
  const token1symbol = getTokenSymbolAlias(poolData.token1.address, chainId, poolData.token1.symbol)

  return (
    <LinkWrapper href={`/${v3InfoPath}${chainPath}/pairs/${poolData.address}`}>
      <ResponsiveGrid>
        <Text fontWeight={400}>{index + 1}</Text>
        <Text fontWeight={400}>
          <RowFixed>
            <DoubleCurrencyLogo
              address0={poolData.token0.address}
              address1={poolData.token1.address}
              chainName={chainName}
            />
            <Text ml="8px">
              {token0symbol}/{token1symbol}
            </Text>
            <GreyBadge ml="10px" style={{ fontSize: 14 }}>
              {feeTierPercent(poolData.feeTier)}
            </GreyBadge>
          </RowFixed>
        </Text>
        {appleFarmRaw(poolData)}
        <Text fontWeight={400}>{formatDollarAmount(poolData.tvlUSD)}</Text>
        <Text fontWeight={400}>{formatDollarAmount(poolData.volumeUSD)}</Text>
        <Text fontWeight={400}>{formatDollarAmount(poolData.volumeUSDWeek)}</Text>
      </ResponsiveGrid>
    </LinkWrapper>
  )
}

const MAX_ITEMS = 10

export default function PoolTable({ poolDatas, maxItems = MAX_ITEMS }: { poolDatas: PoolData[]; maxItems?: number }) {
  const { chainId } = useActiveChainId()

  const { t } = useTranslation()

  // AppleFarm APR
  const [appleFarmData, setAppleFarmData] = useState<any[]>([])

  useEffect(() => {
    const fetchAppleFarmData = async () => {
      try {
        const response = await fetch(
          'https://api.merkl.xyz/v4/opportunities/?name=IguanaDEX&campaignId=&chainId=42793&test=true&status=LIVE',
        )
        const data = await response.json()

        setAppleFarmData(data)
      } catch (error) {
        console.error('Error fetching appleFarm data:', error)
      }
    }

    fetchAppleFarmData()
  }, [])

  // Enrich pool data with appleFarm APR
  const enrichedPoolDatas = useMemo(() => {
    if (!poolDatas || !appleFarmData) return poolDatas

    return poolDatas.map((pool) => {
      // Find the matching farm in appleFarmData
      const matchingFarm = appleFarmData.find((farm) => {
        const token0Match = farm.tokens.some((token) => token.address.toLowerCase() === pool.token0.address)
        const token1Match = farm.tokens.some((token) => token.address.toLowerCase() === pool.token1.address)
        const farmNameParts = farm.name.split(' ')
        const farmFee = farmNameParts[farmNameParts.length - 1]
        const poolFee = `${pool.feeTier / 10000}%`
        const tierMatch = farmFee === poolFee

        return token0Match && token1Match && tierMatch
      })

      return {
        ...pool,
        appleFarmAPR: matchingFarm?.apr || null, // Add the APR if a match is found
      }
    })
  }, [poolDatas, appleFarmData])

  // for sorting
  const [sortField, setSortField] = useState(SORT_FIELD.tvlUSD)
  const [sortDirection, setSortDirection] = useState<boolean>(true)
  const chainPath = useMultiChainPath()

  // pagination
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  useEffect(() => {
    let extraPages = 1
    if (enrichedPoolDatas.length % maxItems === 0) {
      extraPages = 0
    }
    setMaxPage(Math.floor(enrichedPoolDatas.length / maxItems) + extraPages)
  }, [maxItems, enrichedPoolDatas])

  const sortedPools = useMemo(() => {
    return enrichedPoolDatas
      ? enrichedPoolDatas
          .filter((x) => !!x && chainId && !POOL_HIDE?.[chainId]?.includes(x.address))
          .sort((a, b) => {
            if (a && b) {
              return a[sortField as keyof PoolData] > b[sortField as keyof PoolData]
                ? (sortDirection ? -1 : 1) * 1
                : (sortDirection ? -1 : 1) * -1
            }
            return -1
          })
          .slice(maxItems * (page - 1), page * maxItems)
      : []
  }, [chainId, maxItems, page, enrichedPoolDatas, sortDirection, sortField])

  const handleSort = useCallback(
    (newField: string) => {
      setSortField(newField)
      setSortDirection(sortField !== newField ? true : !sortDirection)
      setPage(1)
    },
    [sortDirection, sortField],
  )

  const getSortFieldClassName = useSortFieldClassName(sortField, sortDirection)

  if (!enrichedPoolDatas) {
    return <Loader />
  }

  return (
    <TableWrapper>
      {sortedPools.length > 0 ? (
        <>
          <ResponsiveGrid>
            <Text color="secondary">#</Text>
            <ClickableColumnHeader color="secondary">
              {t('Pool')}
              <SortButton
                scale="sm"
                variant="subtle"
                onClick={() => handleSort(SORT_FIELD.feeTier)}
                className={getSortFieldClassName(SORT_FIELD.feeTier)}
              >
                <SortArrowIcon />
              </SortButton>
            </ClickableColumnHeader>
            <ClickableColumnHeader color="secondary">
              Apple APR
              <SortButton
                scale="sm"
                variant="subtle"
                onClick={() => handleSort(SORT_FIELD.appleFarmAPR)}
                className={getSortFieldClassName(SORT_FIELD.appleFarmAPR)}
              >
                <SortArrowIcon />
              </SortButton>
            </ClickableColumnHeader>
            <ClickableColumnHeader color="secondary">
              {t('TVL')}
              <SortButton
                scale="sm"
                variant="subtle"
                onClick={() => handleSort(SORT_FIELD.tvlUSD)}
                className={getSortFieldClassName(SORT_FIELD.tvlUSD)}
              >
                <SortArrowIcon />
              </SortButton>
            </ClickableColumnHeader>
            <ClickableColumnHeader color="secondary">
              {t('Volume 24H')}
              <SortButton
                scale="sm"
                variant="subtle"
                onClick={() => handleSort(SORT_FIELD.volumeUSD)}
                className={getSortFieldClassName(SORT_FIELD.volumeUSD)}
              >
                <SortArrowIcon />
              </SortButton>
            </ClickableColumnHeader>
            <ClickableColumnHeader color="secondary">
              {t('Volume 7D')}
              <SortButton
                scale="sm"
                variant="subtle"
                onClick={() => handleSort(SORT_FIELD.volumeUSDWeek)}
                className={getSortFieldClassName(SORT_FIELD.volumeUSDWeek)}
              >
                <SortArrowIcon />
              </SortButton>
            </ClickableColumnHeader>
          </ResponsiveGrid>
          <Break />
          {sortedPools.map((poolData, i) => {
            if (poolData) {
              return (
                <React.Fragment key={`${poolData?.address}_Row`}>
                  <DataRow index={(page - 1) * MAX_ITEMS + i} poolData={poolData} chainPath={chainPath} />
                  <Break />
                </React.Fragment>
              )
            }
            return null
          })}
          <PageButtons>
            <Box
              onClick={() => {
                setPage(page === 1 ? page : page - 1)
              }}
            >
              <Arrow>
                <ArrowBackIcon color={page === 1 ? 'textDisabled' : 'primary'} />
              </Arrow>
            </Box>
            <Text>{`Page ${page} of ${maxPage}`}</Text>
            <Box
              onClick={() => {
                setPage(page === maxPage ? page : page + 1)
              }}
            >
              <Arrow>
                <ArrowForwardIcon color={page === maxPage ? 'textDisabled' : 'primary'} />
              </Arrow>
            </Box>
          </PageButtons>
        </>
      ) : (
        <LoadingRows>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </LoadingRows>
      )}
    </TableWrapper>
  )
}
