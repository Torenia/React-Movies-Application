import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 110px;
    
  button {
    color: #fff;
    background-color: #f65261;
    font-size: 15px;
    text-transform: uppercase;
    border: none;
    border-radius: 5%;
    outline:none;
    cursor: pointer;
    padding: 10px 20px;
    margin: 0;
    width: 160px;
  }
    
  input {
    width: 415px;
    height: 35px;
    color: #fff;
    margin-right: 15px;
    padding-left: 20px;
    background-color: #232323;
    border: none;
    border-radius: 5%;
    opacity: 0.5;
    outline:none;
      
    &::placeholder {
      font-size: 15px;
    }
  }
`;
