import React from "react";
import styled from "styled-components";
import google from "../assets/socialIcons/google.png";
import facebook from "../assets/socialIcons/facebook..png";
import apple from "../assets/socialIcons/apple.png";

const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  padding: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 890px) {
    /* For medium screens and smaller */
    grid-template-columns: 1fr; /* Change to 1 column */
    gap: 0px;
    padding: 30px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  width: 55%;

  padding-left: 50px;
  @media (max-width: 890px) {
    /* For medium screens and smaller */
    /* justify-content: center; */
    width: 100%;
    padding: 0px;
    /* padding-left: 20px; */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */

  @media (max-width: 890px) {
    /* For medium screens and smaller */
    justify-content: center;
  }
`;

const LoginImage = styled.img`
  max-width: 100%;
  width: 83%;
  height: auto;
  @media (max-width: 890px) {
    /* For medium screens and smaller */
    width: 70%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialImage = styled.img`
  max-width: 100%;
  width: 6%;
  height: auto;
  padding: 10px;
  margin: 10px;
  border: 1px solid #404142;
`;

const FormHeading = styled.h1`
  text-align: center;
`;

const EmailInputBar = styled.input`
  border: 1.5px solid black;
  padding: 22px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  border: 1px solid black;
  padding: 15px;
  margin-top: 15px;
  font-size: 14px;
  width: 100%;
  background-color: #a435f0;
  color: #f6eefc;
`;

const StyledH2 = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #3e4143;
  line-height: 0.1em;
  margin: 10px 0 20px;
  padding-top: 20px;
`;

const StyledSpan = styled.span`
  background: #fff;
  padding: 0 10px;
  color: #3e4143;
`;

const TextWrapper = styled.div`
  font-size: 16px;
  color: #333; /* Adjust the color as needed */
  background: #f7f9fa;
  width: 100%;
  padding: 20px 0px 20px 0px;
  text-align: center;
  margin: 1px;
`;

const LinkSpan = styled.a`
  color: #8072e6; /* Customize the link color */
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;
const LoginPage = () => {
  return (
    <LoginContainer>
      <ImageContainer>
        <LoginImage src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp" />
      </ImageContainer>
      <FormContainer>
        <FormHeading>Log in to continue your learning journey</FormHeading>
        <EmailInputBar type="text" placeholder="Email" />
        <SubmitButton>Submit</SubmitButton>
        <StyledH2>
          <StyledSpan>Other login Options</StyledSpan>
        </StyledH2>
        <SocialContainer>
          <SocialImage src={google} />
          <SocialImage src={facebook} />
          <SocialImage src={apple} />
        </SocialContainer>
        <br /> <br />
        <TextWrapper>
          Don't have an account? <LinkSpan>Sign Up</LinkSpan>{" "}
        </TextWrapper>
        <TextWrapper>
          <LinkSpan>Log in with your organization</LinkSpan>{" "}
        </TextWrapper>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginPage;
