import { ChainId } from '@iguanadex/chains'
import { useTranslation } from '@iguanadex/localization'
import { Box, Flex, PageSection, useMatchBreakpoints } from '@iguanadex/uikit'
import { tradingCompetitionMoDABI } from 'config/abi/tradingCompetitionMoD'
import { API_PROFILE, TC_MOD_SUBGRAPH } from 'config/constants/endpoints'
import {
  CLAIM,
  CompetitionPhases,
  FINISHED,
  LIVE,
  OVER,
  REGISTRATION,
  SmartContractPhases,
} from 'config/constants/trading-competition/phases'
import useAccountActiveChain from 'hooks/useAccountActiveChain'
import { useTradingCompetitionContractMoD } from 'hooks/useContract'
import useTheme from 'hooks/useTheme'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useProfile } from 'state/profile/hooks'
import { publicClient } from 'utils/wagmi'
import BattleCta from './components/BattleCta'
import Countdown from './components/Countdown'
import HowToJoin from './components/HowToJoin'
import PrizesInfoSection from './components/PrizesInfoSection'
import RibbonWithImage from './components/RibbonWithImage'
import Rules from './components/Rules'
import TeamRanksWithParticipants from './components/TeamRanks/TeamRanksWithParticipants'
import ModBattleBanner, { CoinDecoration } from './mod/components/BattleBanner/ModBattleBanner'
import ModPrizesInfo from './mod/components/PrizesInfo/ModPrizesInfo'
import ModYourScore from './mod/components/YourScore/ModYourScore'
import { DARKBG, MIDBLUEBG, MIDBLUEBG_DARK, TRADINGCOMPETITIONBANNER } from './pageSectionStyles'
import MoDCakerBunny from './pngs/MoD-caker.png'
import StormBunny from './pngs/MoD-storm-bunny.png'
import { BannerFlex, BottomBunnyWrapper, CompetitionPage } from './styles'
import {
  //  RanksIcon,
  RulesIcon,
} from './svgs'
import RanksIcon from './svgs/RanksIcon'
import { UserTradingInformation, initialUserLeaderboardInformation, initialUserTradingInformation } from './types'
import { useRegistrationClaimStatus } from './useRegistrationClaimStatus'
import { useTeamInformation } from './useTeamInformation'

const MoDCompetition = () => {
  const { account, chainId } = useAccountActiveChain()
  const { t } = useTranslation()
  const { profile, isLoading: isProfileLoading } = useProfile()
  const { isMobile } = useMatchBreakpoints()
  const { isDark, theme } = useTheme()
  const tradingCompetitionContract = useTradingCompetitionContractMoD()
  const [currentPhase, setCurrentPhase] = useState(CompetitionPhases.CLAIM)
  const { registrationSuccessful, claimSuccessful, onRegisterSuccess, onClaimSuccess } = useRegistrationClaimStatus()
  const [userTradingInformation, setUserTradingInformation] =
    useState<UserTradingInformation>(initialUserTradingInformation)
  const [userLeaderboardInformation, setUserLeaderboardInformation] = useState(initialUserLeaderboardInformation)

  const {
    globalLeaderboardInformation,
    team1LeaderboardInformation,
    team2LeaderboardInformation,
    team3LeaderboardInformation,
  } = useTeamInformation(4)

  const isCompetitionLive = currentPhase.state === LIVE
  const hasCompetitionEnded =
    currentPhase.state === FINISHED || currentPhase.state === CLAIM || currentPhase.state === OVER

  const { hasUserClaimed, isUserActive, userCakeRewards, userDarRewards, userPointReward, canClaimNFT } =
    userTradingInformation

  const userCanClaimPrizes =
    currentPhase.state === CLAIM &&
    isUserActive &&
    !hasUserClaimed &&
    (userCakeRewards !== '0' || userDarRewards !== '0' || userPointReward !== '0' || canClaimNFT)
  const finishedAndPrizesClaimed = hasCompetitionEnded && account && hasUserClaimed
  const finishedAndNothingToClaim = hasCompetitionEnded && account && !userCanClaimPrizes

  useEffect(() => {
    const fetchCompetitionInfoContract = async () => {
      const competitionStatus = await tradingCompetitionContract.read.currentStatus()
      setCurrentPhase(SmartContractPhases[competitionStatus as number])
    }

    const fetchUserContract = async () => {
      try {
        const bscClient = publicClient({ chainId: ChainId.BSC })
        const [user, userClaimed] = await bscClient.multicall({
          contracts: [
            {
              address: tradingCompetitionContract.address,
              abi: tradingCompetitionMoDABI,
              functionName: 'claimInformation',
              args: [account || '0x'],
            },
            {
              address: tradingCompetitionContract.address,
              abi: tradingCompetitionMoDABI,
              functionName: 'userTradingStats',
              args: [account || '0x'],
            },
          ],
          allowFailure: false,
        })
        const userObject: UserTradingInformation = {
          isLoading: false,
          account,
          hasRegistered: user[0],
          isUserActive: user[1],
          hasUserClaimed: userClaimed,
          userRewardGroup: user[3].toString(),
          userCakeRewards: user[4].toString(),
          userDarRewards: user[5].toString(),
          userPointReward: user[6].toString(),
          canClaimNFT: user[7],
        }
        setUserTradingInformation(userObject)
      } catch (error) {
        console.error(error)
        setUserTradingInformation({ ...initialUserTradingInformation, account, isLoading: false })
      }
    }

    if (chainId === ChainId.BSC) {
      fetchCompetitionInfoContract()
      if (account) {
        fetchUserContract()
      } else {
        setUserTradingInformation({ ...initialUserTradingInformation, isLoading: false })
      }
    }
  }, [chainId, account, registrationSuccessful, claimSuccessful, tradingCompetitionContract])

  useEffect(() => {
    const fetchUserTradingStats = async () => {
      const res = await fetch(`${API_PROFILE}/api/users/${account}`)
      const data = await res.json()
      setUserLeaderboardInformation(data.leaderboard_dar)
    }
    // If user has not registered, user trading information will not be displayed and should not be fetched
    if (userTradingInformation.account && userTradingInformation.hasRegistered) {
      fetchUserTradingStats()
    } else {
      setUserLeaderboardInformation({ ...initialUserLeaderboardInformation })
    }
  }, [account, userTradingInformation])

  const isLoading = isProfileLoading || userTradingInformation.isLoading
  // Don't hide when loading. Hide if the account is connected && the user hasn't registered && the competition is live or finished
  const shouldHideCta =
    !isLoading &&
    userTradingInformation.account &&
    !userTradingInformation.hasRegistered &&
    (isCompetitionLive || hasCompetitionEnded)

  return (
    <>
      <CompetitionPage id="pcs-competition-page">
        <PageSection
          style={{ paddingTop: '0px' }}
          innerProps={{ style: { paddingTop: isMobile ? '30px' : '28px' } }}
          background={TRADINGCOMPETITIONBANNER}
          hasCurvedDivider={false}
          index={1}
          overflow="hidden"
        >
          <BannerFlex mb={shouldHideCta ? '0px' : '48px'}>
            <Countdown currentPhase={currentPhase} hasCompetitionEnded={hasCompetitionEnded} />
            <ModBattleBanner />
          </BannerFlex>
        </PageSection>
        <PageSection
          containerProps={{ style: { marginTop: '-30px' } }}
          background={isDark ? MIDBLUEBG_DARK : MIDBLUEBG}
          concaveDivider
          clipFill={{ light: '#CCD8F0', dark: '#434575' }}
          dividerPosition="top"
          index={2}
          dividerComponent={
            shouldHideCta ? null : (
              <BattleCta
                userTradingInformation={userTradingInformation}
                currentPhase={currentPhase}
                account={account}
                isCompetitionLive={isCompetitionLive}
                hasCompetitionEnded={hasCompetitionEnded}
                userCanClaimPrizes={userCanClaimPrizes}
                finishedAndPrizesClaimed={finishedAndPrizesClaimed}
                finishedAndNothingToClaim={finishedAndNothingToClaim}
                profile={profile}
                isLoading={isLoading}
                onRegisterSuccess={onRegisterSuccess}
                onClaimSuccess={onClaimSuccess}
                coinDecoration={<CoinDecoration />}
              />
            )
          }
        >
          <Box mt={shouldHideCta ? '0px' : ['94px', null, '36px']} mb="64px">
            {/* If competition has not yet started, render HowToJoin component - if not, render YourScore */}
            {currentPhase.state === REGISTRATION ? (
              <HowToJoin />
            ) : (
              <ModYourScore
                currentPhase={currentPhase}
                hasRegistered={userTradingInformation.hasRegistered}
                userTradingInformation={userTradingInformation}
                account={account}
                profile={profile}
                isLoading={isLoading}
                userLeaderboardInformation={userLeaderboardInformation}
                userCanClaimPrizes={userCanClaimPrizes}
                finishedAndPrizesClaimed={finishedAndPrizesClaimed}
                finishedAndNothingToClaim={finishedAndNothingToClaim}
                onClaimSuccess={onClaimSuccess}
              />
            )}
          </Box>
        </PageSection>
        {currentPhase.state !== REGISTRATION && (
          <PageSection
            containerProps={{ style: { marginTop: '-20px' } }}
            index={3}
            concaveDivider
            clipFill={{ light: theme.colors.background }}
            dividerPosition="top"
            dividerComponent={
              <RibbonWithImage imageComponent={<RanksIcon width="175px" />} ribbonDirection="up">
                {t('Team Ranks')}
              </RibbonWithImage>
            }
          >
            <Box my="64px">
              <TeamRanksWithParticipants
                image={MoDCakerBunny}
                team1LeaderboardInformation={team1LeaderboardInformation as any}
                team2LeaderboardInformation={team2LeaderboardInformation as any}
                team3LeaderboardInformation={team3LeaderboardInformation as any}
                globalLeaderboardInformation={globalLeaderboardInformation as any}
                participantSubgraphAddress={TC_MOD_SUBGRAPH}
                subgraphName="pancakeswap/trading-competition-v4"
              />
            </Box>
          </PageSection>
        )}
        <PrizesInfoSection prizesInfoComponent={<ModPrizesInfo />} />
        <PageSection
          containerProps={{ style: { marginTop: '-1px' } }}
          index={5}
          dividerPosition="top"
          clipFill={{
            light: 'linear-gradient(139.73deg, #ecf5ff 0%, #f2effe 100%)',
            dark: 'linear-gradient(139.73deg, #383357 0%, #3d2b53 100%)',
          }}
          dividerComponent={
            <RibbonWithImage imageComponent={<RulesIcon width="175px" />} ribbonDirection="up">
              {t('Rules')}
            </RibbonWithImage>
          }
        >
          <Box mt="64px">
            <Rules />
          </Box>
        </PageSection>
        <PageSection
          index={6}
          dividerPosition="top"
          dividerFill={{ light: '#191326' }}
          clipFill={{ light: theme.colors.background }}
          background={DARKBG}
        >
          <Flex alignItems="center" position="relative">
            <BottomBunnyWrapper>
              <Image src={StormBunny} alt="storm-bunny" width={182} height={213} />
            </BottomBunnyWrapper>
            {shouldHideCta ? null : (
              <Flex height="fit-content" position="relative" zIndex="2">
                <BattleCta
                  userTradingInformation={userTradingInformation}
                  currentPhase={currentPhase}
                  account={account}
                  isCompetitionLive={isCompetitionLive}
                  hasCompetitionEnded={hasCompetitionEnded}
                  userCanClaimPrizes={userCanClaimPrizes}
                  finishedAndPrizesClaimed={finishedAndPrizesClaimed}
                  finishedAndNothingToClaim={finishedAndNothingToClaim}
                  profile={profile}
                  isLoading={isLoading}
                  onRegisterSuccess={onRegisterSuccess}
                  onClaimSuccess={onClaimSuccess}
                />
              </Flex>
            )}
          </Flex>
        </PageSection>
      </CompetitionPage>
    </>
  )
}

export default MoDCompetition
