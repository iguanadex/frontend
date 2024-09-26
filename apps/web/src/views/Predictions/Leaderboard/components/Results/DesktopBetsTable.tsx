import { useTranslation } from '@iguanadex/localization'
import { Token } from '@iguanadex/sdk'
import { Box, Card, Text } from '@iguanadex/uikit'
import PreviousBetsTable from '../PreviousBetsTable'

interface DesktopBetsTableProps {
  account: string
  token: Token | undefined
  api: string
}

const DesktopBetsTable: React.FC<React.PropsWithChildren<DesktopBetsTableProps>> = ({ account, token, api }) => {
  const { t } = useTranslation()

  return (
    <Box p="24px">
      <Text as="h5" color="secondary" fontWeight="bold" textTransform="uppercase" fontSize="12px" mb="16px">
        {t('Last %num% Bets', { num: 5 })}
      </Text>
      <Card>{account && <PreviousBetsTable token={token} api={api} account={account} />}</Card>
    </Box>
  )
}

export default DesktopBetsTable
