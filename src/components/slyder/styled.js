import styled from "styled-components";

export const Component = styled.div`
  background-color: var(--black);
  padding: 1rem;
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;

  ::before {
    background-color: var(--primary-blue);
    opacity: 0.95;
    width: 500px;
    height: 500px;
    right: 10px;
    top: -64px;
    border-radius: 50%;
    content: "";
    position: absolute;
    align-self: end;
    filter: blur(220px);
  }

  hgroup {
    z-index: 1;

    grid-row-gap: 11px;
    width: 450px;

    h1 {
      color: #fff;
      font-weight: 900;
      font-size: 45px;
    }

    p {
      line-break: auto;
      color: #868686;
      font-size: 18px ;
      padding: 13px 0;
    }
  }

  button,
  a {
    width: auto;
    padding: 0.5rem 1rem;

    :last-child {
      margin-left: 10px;
    }
  }

  .img {
    width: 350px;
    height: 300px;
    background-color: var(--primary-light-blue);
    margin-top: 10px;
    animation: vertical-shaking 2s infinite;
    @keyframes vertical-shaking {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(3px);
      }
      50% {
        transform: translateY(-3px);
      }
      75% {
        transform: translateY(3px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
