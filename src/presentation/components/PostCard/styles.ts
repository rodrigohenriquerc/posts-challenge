import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #181f3c;
`

export const ContainerAuthor = styled.div`
  display: flex;
`

export const By = styled.p`
  color: #ffffff;
  margin-right: 1ch;
  font-size: 0.875rem;
`

export const Author = styled.p`
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
`

export const Description = styled.p`
  color: #ffffff;
  font-weight: 300;
  line-height: 1.5rem;
`

export const CommentsSection = styled.div`
  width: 100%;
  padding-top: 1rem;
`

export const ListItem = styled.li`
  list-style: none;
`

export const Division = styled.div<{ isFirst: boolean }>`
  width: 100%;
  height: ${({ isFirst }) => (isFirst ? 0 : '1px')};
  background-color: rgba(255, 255, 255, 0.5);
  margin: ${({ isFirst }) => (isFirst ? 0 : '1.5rem')} auto;
`
