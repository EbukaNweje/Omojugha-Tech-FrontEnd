import React from 'react';
import { Container, Navbar, NavDropdown, Badge, FormControl } from 'react-bootstrap';
import logo from '../../assets/logo-removebg-preview.png';
import { LuShoppingCart } from "react-icons/lu";
import {AiOutlineSearch} from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const Sub = styled(Container)`
width: 90%;
height: 6rem;
display: flex;
justify-content: space-around;
align-items: center;


@media screen and (max-width:320px) {
 width: 90%;
 height: 4rem;
}

`

const Cart = styled.div`
width:10%;
height:100%;
display: flex;
justify-content:center;
align-items: center;
position: relative;


& > span {
   color:#0A58CA;
  }

`
const CartCircle = styled(Badge)`
position: absolute;
top: 20%;
right:65%;
background-color: #ffb703;
`


const HeaderSearchWrapper = styled.div`
  width: 60%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #0A58CA;
  border-radius: 6px;

  @media screen and (max-width:320px) {
    display: none;
}

`
const HeaderSearchCategoryContainer = styled.div`
  
  width: 25%;
  height: 90%;
`
const HeaderSearchCategory = styled.select`
  
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

`
const HeaderSearchContainer= styled.div`
  width: 70%;
  height: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;

`
const FormControls= styled.input`
 width: 100%;
  height: 50%;
  background-color: transparent;
  border: none;
  outline: none;

`

const Logo = styled(Navbar.Brand)`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width:320px){
    width: 30%;
}
`
const CartHol = styled(Cart)`
@media screen and (max-width:320px) {
 width: 50%;
}
`
const AccountHol = styled(NavDropdown)`
@media screen and (max-width:320px) {
 display: none;
}

`


const Subheader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Sub>
        {/* Logo */}
        <Logo href="#home">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Logo>

    
        {/* Search Input */}
        <HeaderSearchWrapper>
          <HeaderSearchCategoryContainer>
            <HeaderSearchCategory>
              <option selected>--Category--</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </HeaderSearchCategory>
          </HeaderSearchCategoryContainer>
          <HeaderSearchContainer>
            <FormControls type="search" placeholder='Search for items...' />
          </HeaderSearchContainer>
        </HeaderSearchWrapper>

        {/* Cart */}
        <CartHol className="cart-wrapper">
          <CartCircle bg='warning'>0</CartCircle>
          <LuShoppingCart size={25} style={{color:'#c0c0c0'}} className="cart-icon" />
          <span>Cart</span>
        </CartHol>

        {/* Account Dropdown */}
        <AccountHol title="Account" id="account-dropdown" align="end">
          <NavDropdown.Item >
            <Link to='/signin' style={{textDecoration:'none'}}>Login</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to='signup'  style={{textDecoration:'none'}}>
              Register
            </Link>
          </NavDropdown.Item>
        </AccountHol>
      </Sub>
    </Navbar>
  );
};

export default Subheader;