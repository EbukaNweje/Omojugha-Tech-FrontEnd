import React from 'react';
import { Container, Navbar, NavDropdown, Badge, Form, FormControl } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';
import { LuShoppingCart } from "react-icons/lu";
import {AiOutlineSearch} from 'react-icons/ai'

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
        <Form className="d-flex ms-auto">
          <div className="search-wrapper">
            <select className="form-select me-2" aria-label="Default select example">
              <option selected>Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
            <AiOutlineSearch className="search-icon" />
          </div>
          <FormControl type="search" placeholder="Search..." />
        </Form>

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
