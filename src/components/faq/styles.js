import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  z-index:100;
  margin-bottom: 15px;
  
  h1{
    color: var(--primary-blue);
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    
    ::before {
    content: "";
    position: absolute;
    width: 20px;
    bottom: 10px;
    left: -30px;
    border: solid 5px;
    border-color: var(--primary-blue) transparent transparent transparent;
    }
    ::after {
    content: "";
    position: absolute;
    width: 20px;
    bottom: 10px;
    right: -30px;
    border: solid 5px;
    border-color: var(--primary-blue) transparent transparent transparent;
    }

  }

  
  
`