import React from 'react'
import logo from '../assets/logo-removebg-preview.png'






import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {youtubePlay} from 'react-icons-kit/fa/youtubePlay'
import {twitter} from 'react-icons-kit/entypo/twitter'
import {pinterest} from 'react-icons-kit/entypo/pinterest'
import {instagram} from 'react-icons-kit/entypo/instagram'
import {facebook_1} from 'react-icons-kit/ikons/facebook_1'



const FooterWrapper= styled.div`

    width: 100%;
    height: 520px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    align-items: center;

    @media screen and (max-width: 983px){

        height: 700px;
        padding-top: 0px;
    }
    @media screen and (max-width: 768px){

        /* height: 1000px; */
        height: auto;
    }


`
const FooterTop= styled.div`

    width: 100%;
    height: 90%;
    /* background-color: yellow; */
    display: flex;
    gap: 130px;
    align-items: center;

    @media screen and (max-width: 983px){

        /* background-color: red; */
        flex-direction: column;
        margin-top: 30px;
        padding-bottom: 30px;
        position: relative;
    }
    @media screen and (max-width: 768px){

        /* background-color: red; */
        height: auto;
        padding-bottom: 500px;
    }


`
const FooterTopLeft= styled.div`

    width: 40%;
    height: 90%;
    /* background-color: aquamarine; */
    display: flex;
    margin-left: 60px;
    justify-content: space-between;

    @media screen and (max-width: 983px){

        flex-direction: column;
        /* background-color: aquamarine; */
        height: auto;
        width: 70%;

    }
    @media screen and (max-width: 768px){

        /* background-color: aquamarine; */
        align-items: center;
        margin-left: 0px;
    }

`
const FooterTopAddress= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: red; */

    @media screen and (max-width: 983px){

        /* background-color: purple; */
        height: auto;
        width: 100%;

    }

`
const FooterTopAddressTop = styled.div`

    width: 100%;
    height: 30%;
    /* background-color: brown; */
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 983px){

        height : 100px;
        width : 50%;
    
    }
    @media screen and (max-width: 768px){

        height : 70px;
    
    }

`
const FooterTopAddressTopLogo = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: contain;

`
const FooterTopAddressDetails= styled.div`

    width: 100%;
    height: auto;
    /* background-color: green; */
    margin-bottom: 10px;
    display: flex;

    @media screen and (max-width: 768px){

        /* background: green; */

    }

`
const FooterTopAddressDetailsImage= styled.div`

    width: 18%;
    height: 50px;
    /* background-color: orange; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){

        /* background: orange; */
        height: 40px;
        width: 10%;

    }

`
const FooterTopAddressDetailsImageImg= styled.img`

    width: 70%;
    height: 70%;
    object-fit: contain;
   
`

const FooterTopAddressDetailsText= styled.div`

    width: 82%;
    height: auto;
    /* background-color: pink; */
    padding-left: 10px;
    display: flex;
    flex-direction: column;

`
const FooterTopAddressDetailsTextNav = styled.h6`

    font-size: 16px;
    color: #F4F5F9;
    font-weight: 800;
    margin-top: 0px;
    margin-bottom: 0px;
`
const FooterTopAddressDetailsTextNavp = styled.p`

    font-size: 14px;
    color: #F8F9FA;
    font-weight: 500;
    margin-top: 2px;

`
const FooterTopAcount= styled.div`

    width: 35%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        /* background: blue; */
        margin-left: 100px;
        width: 25%;
        height: auto;
        align-items: center;

    }
    @media screen and (max-width: 768px){

        margin-left: 0px;
        width: 100%;
        /* background-color: blue; */

    }

`
const FooterTopAcountText= styled.h1`

    font-size: 24px;
    font-family: "Quiksand", sans-serif;
    font-weight: 600;
    color: #F4F5F9;
    margin-bottom: 15px;

    @media screen and (max-width: 768px){

        margin-bottom: 3px;

    }

`
const FooterTopAcountp= styled(Link)`

    font-size: 14px;
    color: #F4F5F9;
    font-weight: 500;
    margin-top: 17px;
    text-decoration: none;

`
const FooterTopRight= styled.div`

    width: 40%;
    height: 90%;
    /* background-color: aqua; */
    display: flex;

`
const FooterTopOurServices= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        position: absolute;
        top: 320px;
        right: 20px;
    }
    @media screen and (max-width: 768px){

        position: absolute;
        top: 550px;
        right: 100px;
        align-items: center;
    }
    

`
const FooterTopCompany= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        position: absolute;
        top: 320px;
        right: -200px;
    }
    @media screen and (max-width: 768px){

        position: absolute;
        top: 820px;
        right: 100px;
        align-items: center;
    }

`
const FooterBottom= styled.div`

    width: 98%;
    height: 15%;
    /* background-color: blue; */
    border-top: 2px solid grey;
    display: flex;
    align-items: center;

    @media screen and (max-width: 983px){

        /* background-color: blue; */
        width: 75%;

    }
    @media screen and (max-width: 768px){

        /* background-color: blue; */

    }

`
const FooterBottomDetailsContainer= styled.div`

    width: 100%;
    height: 70%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const FooterBottomDetailsContainerCopyRight= styled.p`

    font-size: 13px;
    color: #F8F9FA;
    font-weight: 500;
    margin-bottom: 0px;

`
const FooterBottomDetailFollowContainer = styled.div`

    width: 22%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 983px){

        /* background-color: red; */
        width: 38%;

    }
    @media screen and (max-width: 768px){

        display: none;

    }


`
const FooterBottomDetailsFollow= styled.p`

    font-size: 17px;
    color: #F8F9FA;
    font-weight: 700;
    margin-bottom: 0px;

`
const FooterBottomDetailsMediaImageContainer= styled.div`

    width: 68%;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    gap: 5px;
`
const FooterBottomDetailsMediaImageCircle= styled.div`

    width: 20%;
    height: 100%;
    /* background-color: #F1D5DF; */
    background-color: #0a58ca;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`






const Footer = () => {

    

  return (

    <>
    
        <FooterWrapper>
            <FooterTop>
                <FooterTopLeft>
                    <FooterTopAddress>
                        <FooterTopAddressTop>
                            <FooterTopAddressTopLogo src={logo} />
                        </FooterTopAddressTop>
                        <FooterTopAddressDetails>
                            <FooterTopAddressDetailsImage>
                                <FooterTopAddressDetailsImageImg src='https://argone.ng/assets/imgs/theme/icons/phone-icon.svg'></FooterTopAddressDetailsImageImg>
                            </FooterTopAddressDetailsImage>
                            <FooterTopAddressDetailsText>
                                <FooterTopAddressDetailsTextNav>Call Us:</FooterTopAddressDetailsTextNav>
                                <FooterTopAddressDetailsTextNavp>0818 024 9846|0818 024 9846</FooterTopAddressDetailsTextNavp>
                            </FooterTopAddressDetailsText>
                        </FooterTopAddressDetails>
                        <FooterTopAddressDetails>
                            <FooterTopAddressDetailsImage>
                                <FooterTopAddressDetailsImageImg src='https://argone.ng/assets/imgs/theme/icons/mail-icon.svg'></FooterTopAddressDetailsImageImg>
                            </FooterTopAddressDetailsImage>
                            <FooterTopAddressDetailsText>
                                <FooterTopAddressDetailsTextNav>Mail Us:</FooterTopAddressDetailsTextNav>
                                <FooterTopAddressDetailsTextNavp>info@argone.ng</FooterTopAddressDetailsTextNavp>
                            </FooterTopAddressDetailsText>
                        </FooterTopAddressDetails>
                        <FooterTopAddressDetails>
                            <FooterTopAddressDetailsImage>
                                <FooterTopAddressDetailsImageImg src='https://argone.ng/assets/imgs/theme/icons/location-icon.svg'></FooterTopAddressDetailsImageImg>
                            </FooterTopAddressDetailsImage>
                            <FooterTopAddressDetailsText>
                                <FooterTopAddressDetailsTextNav>Address:</FooterTopAddressDetailsTextNav>
                                <FooterTopAddressDetailsTextNavp>9 Saka Tinubu Street, [Tec plaza ground floor]Victoria Island, Lagos</FooterTopAddressDetailsTextNavp>
                            </FooterTopAddressDetailsText>
                        </FooterTopAddressDetails>
                    </FooterTopAddress>
                    <FooterTopAcount>
                        <FooterTopAcountText>Account</FooterTopAcountText>
                        <FooterTopAcountp>Sign In</FooterTopAcountp>
                        <FooterTopAcountp>View Cart</FooterTopAcountp>
                        <FooterTopAcountp>Help Ticket</FooterTopAcountp>
                        <FooterTopAcountp>Shipping Details</FooterTopAcountp>
                    </FooterTopAcount>
                </FooterTopLeft>
                <FooterTopRight>
                    <FooterTopOurServices>
                        <FooterTopAcountText>Our services</FooterTopAcountText>
                        <FooterTopAcountp>Phones</FooterTopAcountp>
                        <FooterTopAcountp>Accessories</FooterTopAcountp>
                        <FooterTopAcountp>Repairst</FooterTopAcountp>
                        <FooterTopAcountp>Trade-in</FooterTopAcountp>
                        <FooterTopAcountp>Training</FooterTopAcountp>
                    </FooterTopOurServices>
                    <FooterTopCompany>
                    <FooterTopAcountText>Company</FooterTopAcountText>
                        <FooterTopAcountp>About Us</FooterTopAcountp>
                        <FooterTopAcountp>Privacy Policy</FooterTopAcountp>
                        <FooterTopAcountp>Terms & Conditions</FooterTopAcountp>
                        <FooterTopAcountp>Contact Us</FooterTopAcountp>
                        <FooterTopAcountp>Support Center</FooterTopAcountp>
                    </FooterTopCompany>
                </FooterTopRight>
            </FooterTop>
            <FooterBottom>
                <FooterBottomDetailsContainer>
                    <FooterBottomDetailsContainerCopyRight>© 2024, Argone-All Rights Reserved</FooterBottomDetailsContainerCopyRight>
                    <FooterBottomDetailFollowContainer>
                        <FooterBottomDetailsFollow>Follow Us</FooterBottomDetailsFollow>
                        <FooterBottomDetailsMediaImageContainer>
                            <FooterBottomDetailsMediaImageCircle>
                                <div style={{color: '#fff'}}>
                                    <Icon
                                        icon={facebook_1}
                                        size={14}
                                    />
                                </div>
                            </FooterBottomDetailsMediaImageCircle>
                            <FooterBottomDetailsMediaImageCircle>
                                <div style={{color: '#fff'}}>
                                    <Icon
                                        icon={twitter}
                                        size={14}
                                    />
                                </div>
                            </FooterBottomDetailsMediaImageCircle>
                            <FooterBottomDetailsMediaImageCircle>
                                <div style={{color: '#fff'}}>
                                    <Icon
                                        icon={instagram}
                                        size={14}
                                    />
                                </div>
                            </FooterBottomDetailsMediaImageCircle>
                        
                            <FooterBottomDetailsMediaImageCircle>
                                <div style={{color: '#fff'}}>
                                    <Icon
                                        icon={youtubePlay}
                                        size={14}
                                    />
                                </div>
                            </FooterBottomDetailsMediaImageCircle>
                        </FooterBottomDetailsMediaImageContainer>
                    </FooterBottomDetailFollowContainer>
                </FooterBottomDetailsContainer>
            </FooterBottom>
        </FooterWrapper>
    
    </>

  )
}

export default Footer