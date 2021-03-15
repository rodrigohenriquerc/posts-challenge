import styled from 'styled-components'

export const Container = styled.div<{ isLoading: boolean }>`
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ isLoading }) => (isLoading ? 'center' : 'flex-start')};
  box-sizing: border-box;
  padding: 1rem;
  padding-bottom: 0;
  background-color: #0d122b;
`

export const List = styled.ul`
  max-width: 768px;
  margin-top: 1rem;
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`
