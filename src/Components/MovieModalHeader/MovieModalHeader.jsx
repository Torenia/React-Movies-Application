import styled from 'styled-components';

export const MovieModalHeader = styled.div`
  background-color: #232323;
  position: relative;
    
  h1 {
    color: #fff;
    text-transform: uppercase;
    font-weight: normal;
    padding: 30px 0 10px 80px;
    margin: 0;
  }
    
  span {
    position: absolute;
    top: 15px;
    right: 0;
    font-size: 15px;
    background: #232323;
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    outline:none;
    cursor: pointer;
  
    &:focus {
     outline:none;
    }
  
    &:after {
     content: "\\2716";
     display: inline-block;
     color: #fff;
    }
  }
`;
