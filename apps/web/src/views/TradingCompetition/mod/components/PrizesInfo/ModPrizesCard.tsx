import { useTranslation } from '@iguanadex/localization'
import { Box, Card, CardHeader, Heading, Text } from '@iguanadex/uikit'
import { styled } from 'styled-components'
import { modPrizes } from '../../../../../config/constants/trading-competition/prizes'
import PrizesGrid from '../../../components/PrizesInfo/PrizesGrid/PrizesGrid'

const StyledCard = styled(Card)`
  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 40px;
    flex: 1;
  }
`

const ModPrizesCard = () => {
  const { t } = useTranslation()

  return (
    <StyledCard>
      <CardHeader>
        <Heading scale="lg" color="secondary">
          {t('Prizes by Team')}
        </Heading>
        <Text color="textSubtle" fontSize="14px">
          {t('Higher trading volume = higher rank!')}
        </Text>
      </CardHeader>
      <PrizesGrid prizesConfig={modPrizes} />
      <Box p="24px">
        <Text color="textSubtle" fontSize="14px">
          {t(
            'Prizes to be distributed in CAKE and DAR in a distribution of 1:5 and shared by all members of each respective tier. The price of token prizes ($CAKE and $DAR) in USD will be determined as per their BUSD pair price during the tally period.',
          )}
        </Text>
      </Box>
    </StyledCard>
  )
}

export default ModPrizesCard
