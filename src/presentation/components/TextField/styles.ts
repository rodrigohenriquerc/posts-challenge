import styled from 'styled-components'

const getInputDefaultStyles = () => `
  width: 100%;
  background-color: #252b3b;
  box-sizing: border-box;
  border: none;
  outline: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  color: #ffffff;
  ::focus {
    outline: none;
  }
  ::placeholder {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
  border-radius: 8px;
  outline: none;
  padding: 0 1rem;
  line-height: 1.5rem;
`

export const Input = styled.input`
  ${getInputDefaultStyles()};
  height: 3rem;
`

export const LongInput = styled.textarea`
  ${getInputDefaultStyles()};
  padding-top: 12px;
  padding-bottom: 12px;
  height: 6rem;
  margin-top: 1rem;
  overflow: auto;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`
