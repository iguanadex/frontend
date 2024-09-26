import { Flex, PrizeIcon, Text } from '@iguanadex/uikit'
import { Achievement } from 'state/types'
import { styled } from 'styled-components'
import AchievementAvatar from './AchievementAvatar'
import AchievementDescription from './AchievementDescription'
import AchievementTitle from './AchievementTitle'

interface AchievementCardProps {
  achievement: Achievement
}

const Details = styled(Flex)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
`

const AchievementCard: React.FC<React.PropsWithChildren<AchievementCardProps>> = ({ achievement }) => {
  return (
    <Flex>
      <AchievementAvatar badge={achievement.badge} />
      <Details>
        <AchievementTitle title={achievement.title} />
        <AchievementDescription description={achievement.description} />
      </Details>
      <Flex alignItems="center">
        <PrizeIcon width="18px" color="textSubtle" mr="4px" />
        <Text color="textSubtle">{achievement.points}</Text>
      </Flex>
    </Flex>
  )
}

export default AchievementCard
