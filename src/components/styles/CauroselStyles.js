import styled, { keyframes } from "styled-components";

// Keyframes for animations
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CarousalWrapper = styled.div`
  padding-top: 20px;
  background-image: url("https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg");
  min-height: 52vh;
  background-size: cover; // Ensures the background image covers the entire container
  background-position: center; // Centers the background image
  background-repeat: no-repeat; // Prevents repeating the background image
  width: 100%; // Makes sure the container spans the full width

  @media (max-width: 890px) {
    /* For medium screens and smaller */
    /* Add more rules if you have more than 2 children */
  }
`;

const CarousalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding: 60px; */
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 890px) {
    /* For medium screens and smaller */
    grid-template-columns: 1fr; /* Change to 1 column */
    gap: 0px;
    & > *:nth-child(1) {
      order: 2;
    }
    & > *:nth-child(2) {
      order: 1;
    }
    /* Add more rules if you have more than 2 children */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 50vh;
  opacity: 0;
  transform: translateX(-100%);
  &.active {
    animation: ${slideInFromLeft} 1s forwards;
  }
  @media (max-width: 890px) {
    /* For medium screens and smaller */
    height: 40vh; /* Adjust the height as needed */
  }

  @media (max-width: 600px) {
    /* For small screens and smaller */
    height: 30vh; /* Adjust the height as needed */
  }

  @media (max-width: 400px) {
    /* For very small screens */
    height: 20vh; /* Adjust the height as needed */
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  width: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  margin: 0 40px;

  @media (max-width: 890px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const NextPrevButtonContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};

  @media (max-width: 890px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  color: #302d2d;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100px;
  transition: width 0.5s;
  position: relative;
  height: 60px;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #050404;
    font-weight: bold;
    width: 15%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 890px) {
    /* For medium screens and smaller */
    justify-content: center;
  }
`;

const CarousalDataContainer = styled.div`
  max-width: 70%;
  &.active h3,
  &.active h1,
  &.active button {
    opacity: 0;
    transform: translateY(100%);
    animation-fill-mode: forwards;
  }
  &.active h3 {
    animation: ${slideInFromBottom} 1s forwards 0.4s;
  }
  &.active h1 {
    animation: ${slideInFromBottom} 1s forwards 0.6s;
  }
  &.active button {
    animation: ${slideInFromBottom} 1s forwards 1s;
  }
  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;

    & > h1 {
      order: 1;
      padding-bottom: 10px;
    }

    & > h3 {
      order: 2;
    }

    & > button {
      order: 3;
    }
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;

    & > h1 {
      order: 1;
      padding-bottom: 10px;
    }

    & > h3 {
      order: 2;
    }

    & > button {
      order: 3;
    }
  }
`;

const Description = styled.h3`
  margin: 0;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 890px) {
    font-size: 1.2rem;
    align-self: center;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 50px;
  margin: 0;

  @media (max-width: 890px) {
    font-size: 40px;
    margin-top: 10px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 30px;
    margin-top: 10px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 25px;
    margin-top: 10px;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  margin-top: 100px;
  padding: 15px;
  background-color: whitesmoke;
  border-color: 2px solid black;
  width: 30%;
  font-size: large;
  font-weight: bold;
  color: black;
  border: 1px solid black;
  cursor: pointer;

  @media (min-width: 891px) and (max-width: 1438px) {
    font-size: medium;
    width: 50%;
  }

  @media (max-width: 890px) {
    width: 30%;
    padding: 15px;
    font-size: small;
    margin-top: 20px;
    align-self: center;
  }

  @media (max-width: 600px) {
    width: 40%;
    padding: 10px;
    font-size: small;
    align-self: center;
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    width: 30%;
    padding: 8px;
    font-size: smaller;
    align-self: center;
    margin-top: 20px;
  }
`;

export {
  CarousalContainer,
  ImageContainer,
  Image,
  ButtonContainer,
  Button,
  CarousalDataContainer,
  Description,
  Title,
  StyledButton,
  NextPrevButtonContainer,
};
