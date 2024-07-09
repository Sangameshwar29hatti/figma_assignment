import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/mainImage.jpg'; // Import the image

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 1rem 0;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ImageContainer = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`;

const MainSection = () => (
  <MainContainer>
    <TextContainer>
      <Heading>We take care of your business</Heading>
      <SubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.</SubHeading>
      <Button>Start now</Button>
    </TextContainer>
    <ImageContainer>
      <MainImage src={mainImage} alt="Main" /> {/* Use the image here */}
    </ImageContainer>
  </MainContainer>
);

export default MainSection;
