import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #232323;
  
  h1 {
    color: #fff;
    font-weight: normal;
    padding-top: 150px;
    text-align: center;
    margin: 0;
  }
  
  div {
    display: flex;
    justify-content: center;
    
    
    &:nth-last-child(2) {
      color: red;
      font-size:200px;
    }
    
    button {
      margin: 0;
      width: 200px;
    }
  }
`;
