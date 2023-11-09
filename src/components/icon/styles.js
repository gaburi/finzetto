import styled from "styled-components";

export const Component = styled.div`
  position: fixed;
  bottom: 5px;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  
  border-radius: 50%;
  z-index:2;

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }
  button{
    cursor: pointer;
    background-color: transparent !important;
    border: none !important;

    .whatsapp-ico {   
    fill: white;
    width: 50px;
    height: 50px;
    padding: 3px;
    background-color: #4dc247;
    border-radius: 50%;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
    position: fixed;
    bottom: 55px;
    right : 20px;
    z-index: 10;
    color: #fff;
    text-align: center;
    font-size: 40px;
    }
  }
`;