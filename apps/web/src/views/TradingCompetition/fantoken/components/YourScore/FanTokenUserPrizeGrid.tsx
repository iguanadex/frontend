import { useTranslation } from '@iguanadex/localization'
import { BlockIcon, CheckmarkCircleIcon, Flex, Text } from '@iguanadex/uikit'

import { styled } from 'styled-components'
import { fanTokenPrizes } from '../../../../../config/constants/trading-competition/prizes'
import { BoldTd, StyledPrizeTable, Td } from '../../../components/StyledPrizeTable'
import AchievementPoints from '../../../components/YourScore/AchievementPoints'
import UserPrizeGridDollar from '../../../components/YourScore/UserPrizeGridDollar'
import { getRewardGroupAchievements, useFanTokenCompetitionRewards } from '../../../helpers'

const StyledThead = styled.thead`
  border-bottom: 2px solid ${({ theme }) => theme.colors.cardBorder};
`

const FanTokenUserPrizeGrid: React.FC<React.PropsWithChildren<{ userTradingInformation? }>> = ({
  userTradingInformation,
}) => {
  const { t } = useTranslation()
  const {
    userRewardGroup,
    userCakeRewards,
    userLazioRewards,
    userPortoRewards,
    userSantosRewards,
    userPointReward,
    canClaimNFT,
  } = userTradingInformation
  const { cakeReward, lazioReward, portoReward, santosReward, dollarValueOfTokensReward } =
    useFanTokenCompetitionRewards({
      userCakeRewards,
      userLazioRewards,
      userPortoRewards,
      userSantosRewards,
    })

  const achievement = getRewardGroupAchievements(fanTokenPrizes, userRewardGroup, userPointReward)

  return (
    <StyledPrizeTable>
      <StyledThead>
        <tr>
          <th>{t('Token Prizes')}</th>
          <th>{t('Achievements')}</th>
          <th>{t('NFT')}</th>
        </tr>
      </StyledThead>
      <tbody>
        <tr>
          <BoldTd>
            <Flex flexDirection="column">
              <Text bold>{cakeReward.toFixed(4)} CAKE</Text>
              <Text bold>{lazioReward.toFixed(4)} LAZIO</Text>
              <Text bold>{portoReward.toFixed(4)} PORTO</Text>
              <Text bold>{santosReward.toFixed(4)} SANTOS</Text>
              <UserPrizeGridDollar dollarValueOfTokensReward={dollarValueOfTokensReward} />
            </Flex>
          </BoldTd>
          <Td>
            <AchievementPoints achievement={achievement} userPointReward={userPointReward} />
          </Td>
          <Td>{canClaimNFT ? <CheckmarkCircleIcon color="success" /> : <BlockIcon color="textDisabled" />}</Td>
        </tr>
      </tbody>
    </StyledPrizeTable>
  )
}

export default FanTokenUserPrizeGrid
