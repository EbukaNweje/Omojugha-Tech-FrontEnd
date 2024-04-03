import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import PriceTag from '../assets/price-tag.gif';
import CreditCard from '../assets/credit-card.gif';
import Shopping from '../assets/shopping.gif';
import TechSupport from '../assets/tech-support.gif';
import Unboxing from '../assets/unboxing.gif';
import {motion} from 'framer-motion'

const OtherBody = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionHold = styled(motion.section)`
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Car = styled(Card)`
  width: 18%;
  height: 50%;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items:center;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  transform: scale(1);

  &:hover{
    transform: scale(1);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

const ImageHold = styled.div`
width: 50%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;


& > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;


const Others = () => {



  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };








  const OthersData = [
    {
      image: PriceTag,
      text: 'Best Price & Offers',
    },
    {
      image: Shopping,
      text: 'Buy Now Pay Later',
    },
    {
      image: TechSupport,
      text: '24/7 Online support',
    },
    {
      image: CreditCard,
      text: '100% Secured payment',
    },
    {
      image: Unboxing,
      text: 'Easy Returns',
    },
  ];

  return (
    <OtherBody>
      <SectionHold
       variants={motionVariant}
       initial="close"
       animate="open"
      >
        {OthersData.map((item, index) => (
          <Car key={index}>
            <ImageHold>
              <img src={item.image} alt={item.text} /> 
            </ImageHold>
           <div>
            <span>{item.text}</span>
           </div>
          </Car>
        ))}
      </SectionHold>
    </OtherBody>
  );
};

export default Others;
