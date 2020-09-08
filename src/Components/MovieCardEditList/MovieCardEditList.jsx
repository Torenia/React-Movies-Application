import styled from 'styled-components';

export const MovieCardEditList = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 170px;
  height: 115px;
  background-color: #232323;
  border-radius: 5px;
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 35px 0 0;
  
    li {
      padding: 10px 0;
      padding-left: 20px;
      border-radius: 5px;
  
      &:hover{
        background-color: #f65261;
      }
  
       a {
         color: #fff;
         text-decoration: none;
        } 
    }
  }
  
  button {
    position: absolute;
    top: 0;
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
  
    &:first-child:after {
       content: "\\2716";
       display: inline-block;
       color: #fff;
    }
`;
