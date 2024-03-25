import React from 'react';
import { Container, Navbar, NavDropdown, Badge, Form, FormControl } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';
import { LuShoppingCart } from "react-icons/lu";
import {AiOutlineSearch} from 'react-icons/ai'
import styled from 'styled-components'



const Sub = styled(Container)`
width: 90%;
height: 6rem;
display: flex;
justify-content: space-around;
align-items: center;
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
const FormControls= styled(FormControl)`
  width: 100%;
  height: 50%;
  background-color: transparent;
  border-left: 1px solid grey;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 0px;
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
          <FormControls type="search" placeholder="Search..." />
          </HeaderSearchContainer>
        </HeaderSearchWrapper>

        {/* Cart */}
        <Cart className="cart-wrapper ms-auto">
          <CartCircle bg='warning'>0</CartCircle>
          <LuShoppingCart size={25} style={{color:'#c0c0c0'}} className="cart-icon" />
          <span>Cart</span>
        </Cart>

        {/* Account Dropdown */}
        <NavDropdown title="Account" id="account-dropdown" align="end">
          <NavDropdown.Item>Login</NavDropdown.Item>
          <NavDropdown.Item>Register</NavDropdown.Item>
        </NavDropdown>
      </Sub>
    </Navbar>
  );
};

export default Subheader;