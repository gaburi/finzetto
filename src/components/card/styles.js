import styled from "styled-components";

export const Card = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

gap: 2rem;
padding: 1rem;

 ::before {
    background-color: var(--primary-light-blue);
    width: 658px;
    height: 150px;
    top: 478px;
    content: "";
    position: absolute;
    z-index:-1;
    filter: blur(150px);
  }
`
