import styled from 'styled-components';

export const MovieCardIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 30px;
  background: #232323;
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  outline:none;
  cursor: pointer;
  
  &:after {
    content: "\\22EE";
    display: inline-block;
    color: #fff;
  }
`;


