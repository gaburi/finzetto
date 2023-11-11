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
  transition: all 0.6s ease;
  :hover{
    .whatsapp-ico{
      background-color: #128c7e;
    }
  }

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
    transition: background-color .4s linear;

    .whatsapp-ico {   
    fill: white;
    width: 50px;
    height: 50px;
    padding: 3px;
    background-color: #25d366;
    border-radius: 50%;
    box-shadow: 1px 6px 24px 0 rgba(7,94,84,.24);
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