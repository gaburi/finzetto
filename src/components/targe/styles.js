import styled from "styled-components";

export const Component = styled.div`
display: flex;
justify-content: center;
align-items: center;

padding: 1rem;
width: 100%;
gap: 4rem;

background-color: var(--primary-blue);

margin-top: 65px;
margin-bottom:25px;
position: relative;

::before {
    background-color: var(--primary-blue);
    width: 500px;
    height: 250px;
    top: -75px;
    left: 250px;
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(30px);
  }

img {
  max-width: 100%;
  width: 350px;
  transform: scaleX(-1);
  margin-top: -80px;
  position: relative;  
}

.tRight{
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  width: 450px;
  z-index:2;

  h2{
    color: var(--gradient-blue);
    font-weight: bolder;
  }

  p{
    
    
  }
}
`