import { useTranslation } from '@iguanadex/localization'
import { Text } from '@iguanadex/uikit'
import { EvenWidthAutoRow } from 'components/Layout/EvenWidthAutoRow'
import { SelectButton } from 'components/SelectButton'
import { TOTAL_FEE } from 'config/constants/info'
import { useState } from 'react'

import { HandleFeePoolSelectFn, SELECTOR_TYPE } from '../types'
import HideShowSelectorSection from './HideShowSelectorSection'

export function V2Selector({
  isStable,
  handleFeePoolSelect,
  selectorType,
}: {
  isStable: boolean
  selectorType: SELECTOR_TYPE
  handleFeePoolSelect: HandleFeePoolSelectFn
}) {
  const { t } = useTranslation()
  const [showOptions, setShowOptions] = useState(false)

  return (
    <HideShowSelectorSection
      showOptions={showOptions}
      setShowOptions={setShowOptions}
      heading={
        selectorType === SELECTOR_TYPE.STABLE ? (
          <Text>StableSwap LP</Text>
        ) : selectorType === SELECTOR_TYPE.V2 ? (
          <Text>
            V2 LP - {(TOTAL_FEE * 100).toFixed(2)} {t('fee tier')}
          </Text>
        ) : (
          <Text>V3 LP</Text>
        )
      }
      content={
        <EvenWidthAutoRow gap="4px">
          {isStable ? (
            <SelectButton
              isActive={selectorType === SELECTOR_TYPE.STABLE}
              onClick={() => handleFeePoolSelect({ type: SELECTOR_TYPE.STABLE })}
            >
              StableSwap LP
            </SelectButton>
          ) : (
            <SelectButton
              isActive={selectorType === SELECTOR_TYPE.V3}
              onClick={() => handleFeePoolSelect({ type: SELECTOR_TYPE.V3 })}
            >
              V3 LP
            </SelectButton>
          )}
          <SelectButton
            isActive={selectorType === SELECTOR_TYPE.V2}
            onClick={() => handleFeePoolSelect({ type: SELECTOR_TYPE.V2 })}
          >
            V2 LP
          </SelectButton>
        </EvenWidthAutoRow>
      }
    />
  )
}
