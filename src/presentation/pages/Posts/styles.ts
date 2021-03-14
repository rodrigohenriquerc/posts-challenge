import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0;
  background-color: #0D122B;
`;

export const List = styled.ul`
  max-width: 768px;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`;
