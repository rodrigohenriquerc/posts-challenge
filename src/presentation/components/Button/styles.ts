import styled from 'styled-components'
import { AiFillMessage } from 'react-icons/ai'

export const Container = styled.button<{ onClick: () => void }>`
  background-color: transparent;
  border-width: 0;
  color: #ffffff;
  padding: 0;
  margin-top: 1rem;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
`

export const Icon = styled(AiFillMessage)`
  margin-left: 0.25rem;
`
