import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from '../assets/jjj.png';
import Heroimage2 from '../assets/jj.png';
// import 'animate.css';

const HeroSection = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;

  @media screen and (max-width: 630px){

    height: 60vh

  }
  @media screen and (max-width: 535px){

    height: 50vh

  }
  @media screen and (max-width: 476px){

    height: 40vh

  }
  @media screen and (max-width: 414px){

    height: 30vh

  }
  @media screen and (max-width: 365px){

    height: 25vh

  }
`

const WrapperHold = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${state => state.image});
  background-size: 100% 100%;
  background-position: center;
  background-repeat:  no-repeat;

`

const MoveHold = styled.div`
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;

  

  & > span {
    width: 20px;
    height: 20px;
    background: #0a58ca;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;

    @media screen and (max-width: 500px){

      width: 15px;
      height: 15px;

    }
    @media screen and (max-width: 365px){

      width: 10px;
      height: 10px;

    }
  }

`;

const Hero = () => {
  const images = [HeroImage, Heroimage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <HeroSection>
      <WrapperHold  image={images[currentImageIndex]}>
        <MoveHold>
          <span onClick={nextImage}></span>
          <span onClick={prevImage}></span>
          <span onClick={nextImage}></span>
        </MoveHold>
      </WrapperHold>
    </HeroSection>
  );
};

export default Hero;
