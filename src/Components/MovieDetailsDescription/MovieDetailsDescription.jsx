import styled from 'styled-components';

export const MovieDetailsDescription = styled.div`
  color: #fff;
  
  div:first-child {
    display: flex;
    align-items: center;
    margin: 0;
    
    span {
      color: #0beb0b;
      margin-left: 10px;
      padding: 5px;
      font-size: 20px;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }
  
  span {
    font-size: 14px;
  }
  
  div:nth-last-child(2) {
    display: flex;
    align-items: center;
    color: #f65261;
    margin: 10px 0;
    
    div {
      margin-right: 10px;
    }
  }
  
  p {
    font-size: 15px;
  }
`;
