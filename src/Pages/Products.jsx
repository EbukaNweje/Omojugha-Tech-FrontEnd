import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { BsHeart } from 'react-icons/bs';

const ProductBody = styled.div`
  width: 100%;
  height: max-content;
`

const ProductHeader = styled.header`
  width: 100%;
  height: 5rem;
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
`

const ProductWrapper = styled.div`
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
`


const CardHol = styled(Card)`
width: 19%;
position:relative;
margin:5px;



@media screen and (max-width:850px) {
 width: 30%;
}


@media screen and (max-width:450px) {
 width: 90%;
}
@media screen and (max-width:320px) {
 width: 90%;
}
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
`
const BtnHold = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;
`


const Products = ({ prod }) => {
  const data = Object.values(prod);

  return (
    <ProductBody>
      <ProductHeader>
        <h2>Popular Products</h2>
        <span>All Products</span>
      </ProductHeader>
      <ProductWrapper>
        {data.map((items) => (
          <CardHol>
            <HotLabel>Hot</HotLabel>
            <Card.Img variant="top" src={items.cardImg} alt="Product" />
            <Card.Body style={{ position: 'relative' }}>
              <div>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>Category: Mobile Phone</Card.Text>
                <Card.Text>5 Star Rating</Card.Text>
                <Card.Text>Company: Apple</Card.Text>
                <Card.Text>$999</Card.Text>
              </div>
              <BtnHold>
                <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                  Add to Cart
                </button>
                <BsHeart />
              </BtnHold>
            </Card.Body>
          </CardHol>
        ))}
      </ProductWrapper>
    </ProductBody>
  );
};

export default Products
