import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const ProductBody = styled.div`
  width: 100%;
  height: max-content;
`;

const ProductHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;

  & > h2 {
    font-weight: 800;
    color: #253d4e;
  }

  span {
    color: #0a58ca;
    font-weight: 800;
    cursor: pointer;
    transition: all 350ms ease;
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ProductWrapper = styled(motion.div)`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width:450px) {
    flex-direction: column;
  }
  @media screen and (max-width:320px) {
    flex-direction: column;
  }
`;

const CardHol = styled(Card)`
  width: 19%;
  position:relative;
  margin:5px;
  cursor: pointer;
  transform: scale(1);
  transition: 360ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  @media screen and (max-width:850px) {
    width: 30%;
  }

  @media screen and (max-width:450px) {
    width: 90%;
  }
  @media screen and (max-width:320px) {
    width: 90%;
  }
`;


const CardOthersContent = styled.div`
  
`



const HotLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 5px;
  font-weight: bold;
  border-radius: 5px;
`;

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconHeart = styled.div`
  width: 20%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarIcon = styled(FaStar)`
  color: #FFC107;
`;

const Products = ({ prod }) => {
  const data = Object.values(prod);


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



  return (
    <ProductBody>
      <ProductHeader>
        <h2>Popular Products</h2>
        <span>All Products</span>
      </ProductHeader>
      <ProductWrapper  variants={motionVariant}
       initial="close"
       animate="open" >
        {data.map((items) => (
          <CardHol>
            <HotLabel>Hot</HotLabel>
            <Card.Img variant="top" src={items.cardImg} alt="Product" />
            <Card.Body style={{ position: 'relative' }}>
              <CardOthersContent>
                <Card.Text>
                  <Link to='/detail' style={{textDecoration:'none'}}>Mobile Phone</Link>
                </Card.Text>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} gold={index < items.rating} />
                  ))}
                </Card.Text>
                <Card.Text>By <span style={{color:'#0a58ca',fontWeight:'600'}}>APPLE</span></Card.Text>
                <Card.Text>$999</Card.Text>
              </CardOthersContent>
              <BtnHold>
                <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                  Add to Cart
                </button>
                <IconHeart>
                  <BsHeart />
                </IconHeart>
              </BtnHold>
            </Card.Body>
          </CardHol>
        ))}
      </ProductWrapper>
    </ProductBody>
  );
};

export default Products;
