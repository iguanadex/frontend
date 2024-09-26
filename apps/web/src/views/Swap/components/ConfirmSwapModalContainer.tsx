import { useTranslation } from '@iguanadex/localization'
import { BoxProps, Modal } from '@iguanadex/uikit'

interface ConfirmSwapModalContainerProps extends BoxProps {
  hideTitleAndBackground?: boolean
  headerPadding?: string
  bodyTop?: string
  bodyPadding?: string
  handleDismiss: () => void
}

const ConfirmSwapModalContainer: React.FC<React.PropsWithChildren<ConfirmSwapModalContainerProps>> = ({
  children,
  headerPadding,
  bodyTop,
  bodyPadding,
  hideTitleAndBackground,
  handleDismiss,
  ...props
}) => {
  const { t } = useTranslation()

  return (
    <Modal
      {...props}
      title={hideTitleAndBackground ? '' : t('Confirm Swap')}
      headerPadding={hideTitleAndBackground && headerPadding ? headerPadding : '12px 24px'}
      bodyPadding={hideTitleAndBackground && bodyPadding ? bodyPadding : '24px'}
      bodyTop={bodyTop}
      headerBackground={hideTitleAndBackground ? 'transparent' : 'gradientCardHeader'}
      headerBorderColor={hideTitleAndBackground ? 'transparent' : undefined}
      onDismiss={handleDismiss}
    >
      {children}
    </Modal>
  )
}

export default ConfirmSwapModalContainer
