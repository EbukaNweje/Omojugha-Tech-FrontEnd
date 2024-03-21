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


const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  border: 1px solid #ebebeb;
`;

const StyleNavLink = styled(Nav)`
  font-weight:700;
  display:flex;
  justify-content: space-around;
`








const Header = () => {
  const [showBedFrameDropdown, setShowBedFrameDropdown] = useState(false);
  const [showSmartHomeDropdown, setShowSmartHomeDropdown] = useState(false);
  const [showKitchenItemsDropdown, setShowKitchenItemsDropdown] = useState(false);
  const [showPhonesDropdown, setShowPhonesDropdown] = useState(false);
  const [showMobilePhonesDropdown, setShowMobilePhonesDropdown] = useState(false);
  const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  const handleMainMouseEnter = (dropdown) => {
    switch (dropdown) {
      case 'bedFrame':
        setShowBedFrameDropdown(true);
        break;
      case 'smartHome':
        setShowSmartHomeDropdown(true);
        break;
      case 'kitchenItems':
        setShowKitchenItemsDropdown(true);
        break;
      case 'phones':
        setShowPhonesDropdown(true);
        break;
      case 'mobilePhones':
        setShowMobilePhonesDropdown(true);
        break;
      case 'accessories':
        setShowAccessoriesDropdown(true);
        break;
      default:
        break;
    }
    setShowNestedDropdown(true);
  };

  const handleMainMouseLeave = (dropdown) => {
    switch (dropdown) {
      case 'bedFrame':
        setShowBedFrameDropdown(false);
        break;
      case 'smartHome':
        setShowSmartHomeDropdown(false);
        break;
      case 'kitchenItems':
        setShowKitchenItemsDropdown(false);
        break;
      case 'phones':
        setShowPhonesDropdown(false);
        break;
      case 'mobilePhones':
        setShowMobilePhonesDropdown(false);
        break;
      case 'accessories':
        setShowAccessoriesDropdown(false);
        break;
      default:
        break;
    }
    setShowNestedDropdown(false);
  };

  const handleNestedMouseEnter = () => {
    setShowNestedDropdown(true);
  };

  const handleNestedMouseLeave = () => {
    setShowNestedDropdown(false);
  };

  return (
    <div>
      <DiscoverHeader/>
      <Subheader/>
      <StyledNavbar expand="lg">
        <Container>
        <Navbar  className="bg-body-light">
        <Navbar.Brand href="#home">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
           <RxDashboard/>   Explore All Categories
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
           <StyleNavLink>
           <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Dropdown
                show={showBedFrameDropdown}
                onMouseEnter={() => handleMainMouseEnter('bedFrame')}
                onMouseLeave={() => handleMainMouseLeave('bedFrame')}
              >
                <Dropdown.Toggle as={Nav.Link} id="bed-frame-dropdown">
                  Home Items
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Bed Frame
                    {showNestedDropdown && (
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Lifemate</Dropdown.Item>
                        <Dropdown.Item href="#">Bedtime</Dropdown.Item>
                        <Dropdown.Item href="#">Bedder</Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                show={showSmartHomeDropdown}
                onMouseEnter={() => handleMainMouseEnter('smartHome')}
                onMouseLeave={() => handleMainMouseLeave('smartHome')}
              >
                <Dropdown.Toggle as={Nav.Link} id="smart-home-dropdown">
                  Smart Homes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Smart Home
                    {showNestedDropdown && (
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Smart Light</Dropdown.Item>
                        <Dropdown.Item href="#">Smart Thermostat</Dropdown.Item>
                        <Dropdown.Item href="#">Smart Lock</Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                show={showKitchenItemsDropdown}
                onMouseEnter={() => handleMainMouseEnter('kitchenItems')}
                onMouseLeave={() => handleMainMouseLeave('kitchenItems')}
              >
                <Dropdown.Toggle as={Nav.Link} id="kitchen-items-dropdown">
                  Kitchen Items
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Kitchen Item
                    {showNestedDropdown && (
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">Knife Set</Dropdown.Item>
                        <Dropdown.Item href="#">Cookware Set</Dropdown.Item>
                        <Dropdown.Item href="#">Blender</Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                show={showPhonesDropdown}
                onMouseEnter={() => handleMainMouseEnter('phones')}
                onMouseLeave={() => handleMainMouseLeave('phones')}
              >
                <Dropdown.Toggle as={Nav.Link} id="phones-dropdown">
                  Phones
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Phone
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
              <Dropdown
                show={showMobilePhonesDropdown}
                onMouseEnter={() => handleMainMouseEnter('mobilePhones')}
                onMouseLeave={() => handleMainMouseLeave('mobilePhones')}
              >
                <Dropdown.Toggle as={Nav.Link} id="mobile-phones-dropdown">
                  Mobile Phones
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onMouseEnter={handleNestedMouseEnter}
                    onMouseLeave={handleNestedMouseLeave}
                  >
                    Mobile Phone
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
              <Dropdown
                show={showAccessoriesDropdown}
                onMouseEnter={() => handleMainMouseEnter('accessories')}
                onMouseLeave={() => handleMainMouseLeave('accessories')}
              >
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
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
           </StyleNavLink>
          </Navbar.Collapse>
      </Navbar>
        </Container>
      </StyledNavbar>
    </div>
  );
};

export default Header;
