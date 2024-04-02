import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { RxDashboard } from "react-icons/rx";
import Subheader from './Subheader';
import DiscoverHeader from './DiscoverHeader';

const HeaderAll = styled.div`
width:100%;
`

const StyledDropdownToggle = styled(Button)`
  background-color: #00329B;
  color: white;
  border: none;
  &:hover {
    background-color: #03045e; 
  }
`

const ContainerBody = styled(Container)`

`






const HeaderStyle = styled(Container)`
display: flex;

`




const Header = () => {
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  const handleNestedMouseEnter = () => {
    setShowNestedDropdown(true);
  };

  const handleNestedMouseLeave = () => {
    setShowNestedDropdown(false);
  };

  return (
    <HeaderAll>
      <DiscoverHeader/>
      <Subheader/>
      <Navbar expand="lg" className="bg-body-light">
        <ContainerBody>
          <Navbar.Brand href="/">
            <Dropdown>
              <Dropdown.Toggle as={StyledDropdownToggle}>
                <RxDashboard/> Explore All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Category 1</Dropdown.Item>
                <Dropdown.Item href="#">Category 2</Dropdown.Item>
                <Dropdown.Item href="#">Category 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <HeaderStyle>
              <Nav.Link href="/">Home</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} id="phones-dropdown">
                  Mobile Phones
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Phones
                    {showNestedDropdown && (
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">iPhone</Dropdown.Item>
                        <Dropdown.Item href="#">Samsung</Dropdown.Item>
                        <Dropdown.Item href="#">Google Pixel</Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} id="accessories-dropdown">
                  Accessories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Accessory
                    {showNestedDropdown && (
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Phone Case</Dropdown.Item>
                        <Dropdown.Item href="#">Charging Cable</Dropdown.Item>
                        <Dropdown.Item href="#">Screen Protector</Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </HeaderStyle>
          </Navbar.Collapse>
        </ContainerBody>
      </Navbar>
    </HeaderAll>
  );
};

export default Header;
