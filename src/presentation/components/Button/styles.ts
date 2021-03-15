import styled from 'styled-components'
import { ButtonType } from './models'

interface IStyledButton {
  buttonType?: ButtonType
  onClick: () => void
}

const getDefaultButtonStyles = () => `
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  border-radius: 8px;
  background-color: #252b3b;
  font-weight: 600;
  &:hover {
    background-color: #181f3c;
  };
`

const getGhostButtonStyles = () => `
  background-color: transparent;
  margin-top: 1rem;
  font-weight: 500;
`

export const Container = styled.button<IStyledButton>`
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  color: #ffffff;
  &:hover {
    background-color: #181f3c;
  }
  ${({ buttonType }) => (buttonType === 'ghost' ? getGhostButtonStyles() : getDefaultButtonStyles())}
`
