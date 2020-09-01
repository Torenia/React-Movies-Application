import styled from 'styled-components';

export const Button = styled.button`
    color: #fff;
    background-color: #f65261;
    font-size: 15px;
    text-transform: uppercase;
    border: none;
    border-radius: 5%;
    outline:none;
    cursor: pointer;
    padding: 10px 20px;
    margin-right: 80px;
    width: 160px;
`;

export const ResetButton = styled(Button)`
  background-color: #232323;
  color: #f65261;
  border: 1px solid #f65261;
`;
