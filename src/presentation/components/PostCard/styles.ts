import styled from 'styled-components'
import { AiFillMessage } from 'react-icons/ai'

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

export const Icon = styled(AiFillMessage)`
  margin-left: 0.25rem;
`

export const CommentsSection = styled.div`
  width: 100%;
  padding-top: 1rem;
`

export const List = styled.ul`
  width: 100%;
`

export const ListItem = styled.li`
  list-style: none;
`

export const Division = styled.div<{ isFirst: boolean }>`
  width: 100%;
  margin: ${({ isFirst }) => (isFirst ? 0 : '1rem')} auto;
`
