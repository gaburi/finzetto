import styled from "styled-components";

export const Component = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
padding: 2rem 1rem;
position: relative;

::before {
    background-color: var(--gradient-dark-purple);
    width: 650px;
    height: 250px;
    top: 125px;
    content: "";
    position: absolute;
    z-index: -1;
    filter: blur(101px);
    opacity: 0.5;
  }

hgroup{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 550px;
  h2{
    color: var(--gradient-orange);
  }

  p{
    color: #fff;
    text-align: justify;
  }
  button{
    width: 150px;
  }

}

img{
  width: 503px;
  max-width: 100%;
  transform: scaleX(-1);
}


` 