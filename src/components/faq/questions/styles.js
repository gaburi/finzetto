import styled from "styled-components";

export const Component = styled.details`
background: var(--neutral-dark);
width: 800px;
margin-bottom: 5px;

summary{
  display: flex;
  justify-content: space-between;  
  padding: 16px;
  color: rgba(255, 255, 255);
   background: linear-gradient(45deg, rgba(77, 161, 255,0.6), rgba(0, 229, 188,0.6));
  width: 100% !important;
  cursor: pointer;
  border-bottom:1px solid rgba(var(--neutral-gray-rgb),0.8);
  transition: all 0.2s;

  span{
    color:rgba(0,0,0,0.6);
    background: #fff;
    border-radius: 50%;
     
  }
  #expand{
   display: none;
  }
 
}



p{
  padding:16px ;
  text-align: justify;
  color: #fff;
  font-size: 0.8rem;
}
`