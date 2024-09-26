import { Text } from '@iguanadex/uikit'
import { styled } from 'styled-components'

const TextEllipsis = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default TextEllipsis
