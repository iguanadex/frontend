import { useTranslation } from '@iguanadex/localization'
import { Flex, UserMenuItem } from '@iguanadex/uikit'
import { useShowOnceAirdropModal } from 'hooks/useShowOnceAirdropModal'
import { styled } from 'styled-components'

const Dot = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`

const ClaimYourNFT = () => {
  const { t } = useTranslation()
  const [_, setShowOnceAirdropModal] = useShowOnceAirdropModal()

  return (
    <UserMenuItem as="button" onClick={() => setShowOnceAirdropModal(true)}>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        {t('Claim Your NFT')}
        <Dot />
      </Flex>
    </UserMenuItem>
  )
}

export default ClaimYourNFT
