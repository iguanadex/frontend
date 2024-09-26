import { Box, Flex } from '@iguanadex/uikit'
import orderBy from 'lodash/orderBy'
import Image from 'next/image'
import { styled } from 'styled-components'
import { TeamRanksProps } from '../../types'
import Podium from './Podium'
import TopTradersCard from './TopTradersCard'

const Wrapper = styled(Flex)`
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const StyledPodiumWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 1;
    margin-right: 40px;
    margin-bottom: 0;
  }
`

const BunnyImageWrapper = styled(Box)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    width: 200px;
    height: 205px;
  }
`

const StyledTopTradersWrapper = styled(Flex)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 2;
  }
`

const TeamRanks: React.FC<React.PropsWithChildren<TeamRanksProps>> = ({
  team1LeaderboardInformation,
  team2LeaderboardInformation,
  team3LeaderboardInformation,
  globalLeaderboardInformation,
  image,
}) => {
  const isTeamLeaderboardDataComplete = Boolean(
    team1LeaderboardInformation?.leaderboardData &&
      team2LeaderboardInformation?.leaderboardData &&
      team3LeaderboardInformation?.leaderboardData,
  )

  const isGlobalLeaderboardDataComplete = Boolean(isTeamLeaderboardDataComplete && globalLeaderboardInformation)

  const getTeamsSortedByVolume = (arrayOfTeams: any) => {
    return orderBy(arrayOfTeams, (team) => team.leaderboardData.volume, 'desc')
  }

  return (
    <Wrapper>
      <StyledPodiumWrapper>
        <Podium
          teamsSortedByVolume={
            isTeamLeaderboardDataComplete
              ? getTeamsSortedByVolume([
                  team1LeaderboardInformation,
                  team2LeaderboardInformation,
                  team3LeaderboardInformation,
                ])
              : undefined
          }
        />
        <BunnyImageWrapper mt="24px">
          <Image src={image || ''} alt="team-ranks-image" width={200} height={205} />
        </BunnyImageWrapper>
      </StyledPodiumWrapper>
      <StyledTopTradersWrapper>
        <TopTradersCard
          team1LeaderboardInformation={team1LeaderboardInformation}
          team2LeaderboardInformation={team2LeaderboardInformation}
          team3LeaderboardInformation={team3LeaderboardInformation}
          globalLeaderboardInformation={globalLeaderboardInformation}
          isGlobalLeaderboardDataComplete={isGlobalLeaderboardDataComplete}
        />
      </StyledTopTradersWrapper>
    </Wrapper>
  )
}

export default TeamRanks
