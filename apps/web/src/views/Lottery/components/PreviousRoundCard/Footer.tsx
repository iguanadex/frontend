import { useTranslation } from '@iguanadex/localization'
import { CardFooter, ExpandableLabel, Flex } from '@iguanadex/uikit'
import { useEffect, useState } from 'react'
import { LotteryRound } from 'state/types'
import FooterExpanded from './FooterExpanded'

interface PreviousRoundCardFooterProps {
  lotteryNodeData: LotteryRound | null
  lotteryId: string | null
}

const PreviousRoundCardFooter: React.FC<React.PropsWithChildren<PreviousRoundCardFooterProps>> = ({
  lotteryNodeData,
  lotteryId,
}) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!lotteryId) {
      setIsExpanded(false)
    }
  }, [lotteryId])

  return (
    <CardFooter p="0">
      {isExpanded && <FooterExpanded lotteryNodeData={lotteryNodeData} lotteryId={lotteryId} />}
      <Flex p="8px 24px" alignItems="center" justifyContent="center">
        <ExpandableLabel
          expanded={isExpanded}
          onClick={() => {
            if (lotteryId) {
              setIsExpanded(!isExpanded)
            }
          }}
        >
          {isExpanded ? t('Hide') : t('Details')}
        </ExpandableLabel>
      </Flex>
    </CardFooter>
  )
}

export default PreviousRoundCardFooter
