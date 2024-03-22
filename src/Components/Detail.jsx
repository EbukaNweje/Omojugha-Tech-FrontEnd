import React from 'react'
// import foodImg from '../images/food.png'
// import { 
//     DetailPage, DetailTop, DetailTopLeft, 
//     DetailTopRight, DetailTopLeftHolder, DetailTopLeftHolderImageCard, 
//     DetailTopLeftHolderSearch, DetailTopLeftHolderImageCardImg, DetailTopLeftHolderSearchBtn,
//     InBtn,DetailTopRightH1,DetailBottom,DetailBottomContainer,DetailBottomBtn,DetailBottomTextContainer,
//     DetailBottomText,DetailTopRightRatingContainer,DetailTopRightRating,DetailTopRightReviews,
//     DetailTopRightPrice,DetailTopNewPrice,DetailTopOldPrice,AddCartBtn,DetailTopPoint,DetailTopPointText,
//     DetailTopPointTextSpan
//     } from './homeStyle'

import { Button } from 'react-bootstrap';
// import { IoCartOutline } from "react-icons/io5";

import styled from 'styled-components'



const DetailPage = styled.div`

    width: 100%;
    height: auto;
    /* background-color: yellow; */

    @media screen and (max-width: 427px) {

        /* background-color: yellow; */
        
    }
`

const DetailTop = styled.div`

    width: 100%;
    height: auto;
    /* background-color: red; */
    display: flex;
    gap: 40px;

    @media screen and (max-width: 427px) {
        
        /* background-color: red; */
        flex-direction: column;
        align-items: center;
    }

`
const DetailTopLeft = styled.div`

    width: 40%;
    height: 500px;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 427px) {
        
        width: 100%;
        /* background-color: blue; */
        justify-content: center;


    }

`
const DetailTopLeftHolder = styled.div`

    width: 85%;
    height: 90%;
    /* background-color: aquamarine; */
    border-radius: 20px;
    border: 1px solid lightgrey;
    display: flex;
    justify-content: flex-end;
    gap: 30px;

    @media screen and (max-width: 427px) {
        
        width: 95%;
        /* background-color: aquamarine; */

    }

`
const DetailTopLeftHolderImageCard = styled.div`

    width: 60%;
    height: 70%;
    /* background-color: purple; */
    margin-top: 20px;

`
const DetailTopLeftHolderImageCardImg = styled.img`

    width: 100%;
    height: 100%;
    object-fit: contain;

`
const DetailTopLeftHolderSearch = styled.div`

    width: 20%;
    height: 90%;
    /* background-color: green; */
    display: flex;
    justify-content: center;

`
const DetailTopLeftHolderSearchBtn = styled.div`

    width: 45%;
    height: 10%;
    /* background-color: red; */
    margin-top: 20px;
    object-fit: contain;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`
const DetailTopRight = styled.div`

    width: 40%;
    height: auto;
    /* background-color: aqua; */

    @media screen and (max-width: 427px) {
        
        width: 90%;
        /* background-color: aqua; */
    }

`
const InBtn = styled.button`

    width: 80px;
    height: 35px;
    background-color: #F8EaEF;
    border: none;
    margin-top: 25px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    color: #BB2D5E;

`
const DetailTopRightH1 = styled.h1`

    color: #253D4E;
    font-size: 30px;
    margin-top: 20px;
    font-weight: 600;

`
const DetailTopRightRatingContainer = styled.div`

    width: 40%;
    height: 30px;
    /* background-color: orange; */
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 427px) {
        
        width: 50%;
        /* background-color: orange; */

    }
    @media screen and (max-width: 395px) {
        
        width: 70%;
        /* background-color: orange; */

    }
    
`
const DetailTopRightRating = styled.div`

    width: 50%;
    height: 100%;
    /* background-color: red; */
    background-image: url('https://argone.ng/assets/imgs/theme/rating-stars.png');
    background-repeat: repeat-x;
    background-position: 0px 0px;

`
const DetailTopRightReviews = styled.p`

    font-size: 15px;
    color: #B6B6B6;
    margin-left: 10px;

`
const DetailTopRightPrice = styled.div`

    width: 70%;
    height: 80px;
    /* background-color: blue; */
    margin-top: 20px;
    display: flex;
    align-items: center;

`
const DetailTopNewPrice = styled.h1`

    color: #bb2d5e;
    font-weight: 600;

`
const DetailTopOldPrice = styled.h1`

    font-size: 23px;
    color: #B6B6B6;
    text-decoration: line-through;
    margin-left: 20px;

`
const AddCartBtn = styled.button`

    width: 150px;
    height: 50px;
    background-color: #BB2D5E;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    border-radius: 6px;
    margin-top: 30px;
    cursor: pointer;

`
const DetailTopPoint = styled.div`

    width: 70%;
    height: auto;
    /* background-color: blue; */
    margin-top: 40px;

    @media screen and (max-width: 427px) {
        
        width: 100%;

    }


`
const DetailTopPointText = styled.p`

    font-size: 16px;
    color: #7E7E7E;
    font-weight: 500;

`
const DetailTopPointTextSpan = styled.span`

    color: #BB2D5E;

`

const DetailBottom = styled.div`

    width: 100%;
    height: auto;
    /* background-color: blue; */
    margin-top: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 427px) {
        
        /* background-color: blue; */
        justify-content: center;
    }

`
const DetailBottomContainer = styled.div`

    width: 65%;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding-left: 50px;

    @media screen and (max-width: 427px) {

        /* background-color: red; */
        margin-left: 0px;
        width: 95%;
        border: none;
        padding-left: 10px;
    }

`
const DetailBottomBtn = styled(InBtn)`

    width: 150px;
    height: 50px;
    color: #BB2D5E;
    font-family: 'quicksand', sans-serif;
    font-weight: 600;
    font-size: 17px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    margin-top: 40px;

`
const DetailBottomTextContainer = styled.div`

    width: 95%;
    height: auto;
    /* background-color: yellow; */
    margin-top: 60px;
    margin-bottom: 40px

`
const DetailBottomText = styled.p`

    font-size: 14px;
    color: #7E7E7E;
    line-height: 24px;
`







const Home = () => {

  return (

    <>
    
        <DetailPage>
            <DetailTop>
                <DetailTopLeft>
                    <DetailTopLeftHolder>
                        <DetailTopLeftHolderImageCard>
                            <DetailTopLeftHolderImageCardImg src='' alt='image'></DetailTopLeftHolderImageCardImg>
                        </DetailTopLeftHolderImageCard>
                        <DetailTopLeftHolderSearch>
                            <DetailTopLeftHolderSearchBtn>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" color='lightgrey' class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            </DetailTopLeftHolderSearchBtn>
                        </DetailTopLeftHolderSearch>
                    </DetailTopLeftHolder>
                </DetailTopLeft>
                <DetailTopRight>
                    <Button as={InBtn}>In Stock</Button>
                    <DetailTopRightH1>Samsung Galaxy Watch 6 <br></br> Classic 47mm</DetailTopRightH1>
                    <DetailTopRightRatingContainer>
                        <DetailTopRightRating></DetailTopRightRating>
                        <DetailTopRightReviews>(32 reviews)</DetailTopRightReviews>
                    </DetailTopRightRatingContainer>
                    <DetailTopRightPrice>
                        <DetailTopNewPrice>₦575,000</DetailTopNewPrice>
                        <DetailTopOldPrice>₦578,000</DetailTopOldPrice>
                    </DetailTopRightPrice>
                    <AddCartBtn>Add to cart</AddCartBtn>
                    <DetailTopPoint>
                        <DetailTopPointText>
                            Earn<DetailTopPointTextSpan>1000</DetailTopPointTextSpan>Point when you buy this product. Points can
                            be Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </DetailTopPointText>
                    </DetailTopPoint>
                </DetailTopRight>
            </DetailTop>
            <DetailBottom>
                <DetailBottomContainer>
                    <DetailBottomBtn>Description</DetailBottomBtn>
                    <DetailBottomTextContainer>
                        <DetailBottomText>
                            Tecno Spark 20 256GB Tecno Spark 20 Full Specification Display Screen-size: 6.6-inch Type: IPS LCD Resolution: 1080 x 2400 pixels
                            Features: 1B colors, Dolby Vision, 90Hz Material: Glass front Phone Processor GPU: Arm Mali G57 Chipset: MediaTeK Helio G85
                            SoC CPU: Octa-core(2 Cortex-A75 cores and 6 Cortex-A55 cores) Software: Android 13 Phone Memory RAM: 8GB Internal-
                            Storage: 256GB Card: Yes Expandable: Yes Connectivity WLAN: Wi-Fi 802.11 b/g/n, hotspot, Wi-Fi Direct, dual-band Bluetooth: Yes
                            GPS: Supported USB: Type-C NFC: Yes Camera Back: Dual: 50MP + 5MP Front: 8MP Features: LED flash, HDR, panorama Network
                            SIM Type: Dual Nano SIMs Technology: GSM, LTE, 4G, HSPA, LTE-A 2G: 2G GSM 3G: 3G WCDMA 4G: 4G LTE Phone Features
                            Sensors: Fingerprint, Acceleration, proximity Loud-speaker: Supported Audio: Yes Browser: HTML5 Torch: Yes Battery-Life:
                            Endurance is 60 Hours Battery Size: Li-Po 5000 mAh, non-removable Charging: 18W Fast Charging What’s inside the box: Device,
                            Charger, SIM Tool Ejector, Earpiece Tecno Spark 20 256GB – Available
                        </DetailBottomText>
                    </DetailBottomTextContainer>
                </DetailBottomContainer>
            </DetailBottom>
        </DetailPage>
    
    </>

  )
}

export default Home