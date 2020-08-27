import styled from 'styled-components';

export const AddEditMovieFormRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  background-color: #232323;
    
  label {
    color: #f65261;
    text-transform: uppercase;
    margin: 10px 85px 10px 85px;
    font-size: 14px;
  }
  
  input, select {
   width: 415px;
   height: 35px;
   margin: 0 85px;
   color: #fff;
   padding-left: 20px;
   background-color: #424242;
   border: none;
   border-radius: 3%;
   opacity: 0.5;
   outline:none;
      
   &::placeholder {
     font-size: 15px;
    }
   }
   
   select {
    width: 435px;
    height: 37px;
   }
    
   &:last-child {
     height: 40px;
     flex-direction: row;
     justify-content: flex-end;
     padding: 20px 0;
   }
    
    &:nth-last-child(7) {
      input {
        background: right 2% center no-repeat url(assets/calendar_icon.jpg);
        background-color: #424242;
       }
       
       input[type='date'] {
         height: 37px;
         width: 417px;
         &::-webkit-inner-spin-button,
         &::-webkit-calendar-picker-indicator {
           opacity: 0;
       }
    }
`;
