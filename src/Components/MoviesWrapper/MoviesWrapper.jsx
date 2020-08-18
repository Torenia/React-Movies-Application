import styled from 'styled-components';

export const MoviesListWrapper = styled.div`
  background-color: #232323;
`;

export const MoviesResultsWrapper = styled(MoviesListWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  
  @media(max-width: 900px)  {
    justify-content: space-around
  };
`;
