import styled from "styled-components";

export const Component = styled.div`
  padding: 1rem;
  background: var(--black);
  display: flex;

  .swiper {
    width: 850px;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: var(--black);
    opacity: 0.8;
    border-radius: 10px;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;

    img {
      display: block;
      object-fit: cover;

      :hover {
        animation: vertical-shaking 1.8s infinite;
        @keyframes vertical-shaking {
          0% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(2px);
          }
          50% {
            transform: translateY(-2px);
          }
          75% {
            transform: translateY(2px);
          }
          100% {
            transform: translateY(0);
          }
        }
      }
    }

    p{
      color: white;
      width: 50%;
    }
  }
`;
