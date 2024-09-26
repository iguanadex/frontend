import { useTranslation } from '@iguanadex/localization'
import { Tag } from '@iguanadex/uikit'
import { useMerklInfo } from 'hooks/useMerkl'

export function MerklTag({ poolAddress }: { poolAddress: string | null }) {
  const { t } = useTranslation()
  const { hasMerkl } = useMerklInfo(poolAddress)

  if (!hasMerkl) return null

  return (
    <Tag ml="8px" outline variant="warning">
      {t('Merkl')}
    </Tag>
  )
}

export function MerklRewardsTag({ poolAddress }: { poolAddress: string | null }) {
  const { t } = useTranslation()
  const { hasMerkl } = useMerklInfo(poolAddress)

  if (!hasMerkl) return null

  return (
    <Tag variant="warning" mr="8px" outline>
      {t('Merkl Rewards')}
    </Tag>
  )
}
