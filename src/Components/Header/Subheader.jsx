import React from 'react';
import { Container, Navbar, NavDropdown, Badge, Form, FormControl } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';
import { LuShoppingCart } from "react-icons/lu";
import {AiOutlineSearch} from 'react-icons/ai'
import styled from 'styled-components'



const HeaderSearchWrapper = styled.div`
  
  width: 60%;
  height: 55px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #b5b5ff;
  border-radius: 6px;

`
const HeaderSearchCategoryContainer = styled.div`
  
  width: 25%;
  height: 90%;
  /* background-color: #8888ff; */

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

const Subheader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

    
        {/* Search Input */}
        <HeaderSearchWrapper>
          <HeaderSearchCategoryContainer>
            <HeaderSearchCategory>
              <option selected>--Category--</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </HeaderSearchCategory>
            {/* <AiOutlineSearch className="search-icon" /> */}
          </HeaderSearchCategoryContainer>
          <HeaderSearchContainer>
          <FormControls type="search" placeholder="Search..." />
          </HeaderSearchContainer>
        </HeaderSearchWrapper>

        {/* Cart */}
        <div className="cart-wrapper ms-auto">
          <Badge bg="warning">0</Badge>
          <LuShoppingCart size={30} className="cart-icon" />
        </div>

        {/* Account Dropdown */}
        <NavDropdown title="Account" id="account-dropdown" align="end">
          <NavDropdown.Item>Login</NavDropdown.Item>
          <NavDropdown.Item>Register</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Subheader;
