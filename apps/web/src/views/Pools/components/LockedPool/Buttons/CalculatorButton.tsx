import { CalculateIcon, IconButton } from '@iguanadex/uikit'
import { useContext } from 'react'

import { RoiCalculatorModalContext } from '../Modals/RoiCalculatorModalProvider'

const CalculatorButton = () => {
  const setShowRoiCalculator = useContext(RoiCalculatorModalContext)

  return (
    <IconButton variant="text" scale="sm" mr="-8px" onClick={() => setShowRoiCalculator && setShowRoiCalculator(true)}>
      <CalculateIcon color="textSubtle" width="18px" />
    </IconButton>
  )
}

export default CalculatorButton
