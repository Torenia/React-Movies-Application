import styled from 'styled-components';

export const MovieDescription = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  margin: 10px 0;
`;

export const MovieDescriptionTitle = styled(MovieDescription)`
  justify-content: space-between;
`;

export const MovieDescriptionGenre = styled(MovieDescription)`
  justify-content: flex-start;
  font-size: 14px;
`;
