import styled from "styled-components";

export const Item = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 240px;
  padding: 1rem;
  background-color: rgba(var(--neutral-gray-rgb),0.6);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
    span{
      transform: scale(1.3);
    }
  }

  span {
       background: linear-gradient(45deg, rgba(77, 161, 255), rgba(0, 229, 188));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 7px;
    transition: transform 0.4s ease-in-out;
  }

  h2 {
    color: var(--gradient-orange);
    font-weight: bold;
    line-height: 1;

  }

  p {
    color: #fff;
    text-align: justify;
    letter-spacing: -1px;
  }
`;
