import styled from 'styled-components';

export const MovieSearchWrapper = styled.div`
  height: 300px;
  text-align: right;
  background: rgb(66,66,66);
  background: linear-gradient(90deg, rgba(66,66,66,1) 1%, rgba(37,37,90,1) 54%, rgba(66,66,66,1) 100%);
  
  button {
    color: #f65261;
    background-color: #555;
    font-size: 15px;
    text-transform: uppercase;
    border: none;
    border-radius: 5%;
    outline:none;
    cursor: pointer;
    padding: 10px 20px;
    margin: 20px 55px 0 0;
  }
    
  h1 {
    color: #fff;
    text-transform: uppercase;
    text-align: left;
    font-weight: normal;
    margin: 40px 0 50px 110px;
  }
`;
