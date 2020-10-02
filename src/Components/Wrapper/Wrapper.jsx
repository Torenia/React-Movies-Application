import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10%;
  background-color: #232323;
`;

export const ErrorBoundaryWrapper = styled(Wrapper)`
  height: calc(100vh - 350px);
  display: flex;
  justify-content: center;
  align-items: center;
  
  h2 {
    margin: 0;
    color: #f00;
  }
`;

