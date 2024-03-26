import styled from "styled-components";

export const CartWrapper = styled.div`
 width: 100%;
 min-height: 100vh;
 background-color: white;
 font-family: arial;
`
export const Cartnav = styled.div`
 width: 100%;
 height: 70px;
 margin-top: 10px;
 padding-left: 1%;
 display: flex;
 align-items: center;
 border-top: 1px solid silver;
 border-bottom: 1px solid silver;
`
export const Navitems = styled.div`
 width: 30%;
 height: 70%;
 display: flex;
 justify-content: space-between;
//  background-color: blue;
`
export const Navdiv = styled.div`
 width: 30%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #0044c4;
//  background-color: yellow;
`
export const Cartwrite = styled.div`
 width: 100%;
 height: 150px;
 padding-left: 1%;
 background-color: white;
`
export const Cartwriteup = styled.div`
 width: 100%;
 height: 60%;
 display: flex;
 align-items: flex-end;
 background-color: white;
`
export const Cartwritedown = styled.div`
 width: 100%;
 height: 40%;
 display: flex;
 align-items: center;
 background-color: white;
`
export const Downhold = styled.div`
 width: 67%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: white;
`
export const H1 = styled.h1`
 font-size: 48px;
 color: #253d4e;
 font-weight: 700
//  font-family: Quicksand;
`
export const H2 = styled.h1`
 font-size: 30px;
 color: #253d4e;
 font-weight: 700
//  font-family: Quicksand;
`
export const Paragraph = styled.p`
 font-size: 16px;
 color: rgb(126, 126, 126);
 font-weight: 700;
 font-family: arial;
`
export const Dell = styled.div`
 display: flex;
 gap: 20px;
 cursor: pointer;
`
export const Span = styled.span`
 font-size: 16px;
 color: #0044c4;
 font-weight: 700;
 font-family: Quicksand;
`
export const Comp = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
//  justify-content: flex-end;
 height: max-content;
`
export const ProductWrap = styled.div`
 width: 100%;
 height: max-content;
 display: flex;
 justify-content: space-between;
 padding-left: 1%;
 padding-right: 1%;
//  padding-left: 1%;
//  border: 2px solid #ececec;
//  background-color: blue;
 margin-bottom: 100px;
`
export const ProductWrapleft = styled.div`
 width: 68%;
 height: max-content;
//  background-color: blue;
`
export const ProductWrapleftHead = styled.div`
 width: 100%;
 height: 70px;
 display: flex;
 background-color: #ececec;
`
export const Productp = styled.p`
 font-weight: 700;
 font-size: 17px;
 Font Color:#0044c4;
`
export const Wrapitem = styled.div`
 width: 50%;
 height: 100%;
 display:flex;
 align-items: center;
 justify-content: center;
//  background-color: green;
`
export const Wrapitemright = styled.div`
 width: 50%;
 height: 100%;
 display:flex;
 align-items: center;
 justify-content: space-around;
//  background-color: yellow;
`
export const ProductContain = styled.div`
 width: 100%;
 height: 140px;
 display:flex;
 border: 2px solid #ececec;
`
export const Productdetail = styled.div`
 width: 50%;
 height: 100%;
 display:flex;
 align-items: center;
 justify-content: space-around;
//  background-color: yellow;
`
export const Radio = styled.div`
 width: 20px;
 height: 20px;
 border: 3px solid #ececec;
//  background-color: blue;
`
export const ImageHold = styled.div`
 width: 70px;
 height: 55%;
 border: 1px solid #ececec;
 border-radius: 10px;
//  background-color: blue;
`
export const Image = styled.img`
 width: 100%;
 height: 100%;
 object-fit: contain;
`
export const ImageWrite = styled.div`
 width: 40%;
 height: 80%;
//  border: 1px solid #ececec;
`
export const ItemName = styled.div`
 width: 93%;
 height: 70%;
//  border: 1px solid #ececec;
`
export const Star = styled.div`
 width: 100%;
 height: 30%;
//  border: 1px solid #ececec;
`
export const BuyingDetail = styled.div`
 width: 50%;
 height: 100%;
 display:flex;
 align-items: center;
 justify-content: space-around;
//  background-color: yellow;
`
export const Price = styled.div`
 width: 20%;
 height: 50%;
 display:flex;
 align-items: center;
 justify-content: center;
//  border: 1px solid #ececec;
`
export const Quantity = styled.div`
 height: 50%;
 width: 20%;
 display:flex;
 align-items: center;
 justify-content: center;
 border: 2px solid #0044c4;
 border-radius: 10px
`
export const Quantitynumber = styled.div`
 height: 100%;
 width: 60%;
 display:flex;
 align-items: center;
 color: #0044c4;
 justify-content: center;
`
export const Quantityupdate = styled.div`
 height: 90%;
 width: 40%;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 color:#0044c4;
//  border: 2px solid green;
`
export const Subtotal = styled.div`
height: 50%;
width: 20%;
display:flex;
align-items: center;
justify-content: center;
 color:#0044c4;
//  border: 2px solid green;
`
export const Continue = styled.div`
height: 100px;
width: 100%;
display:flex;
align-items: center;
justify-content: space-between;
//  color:#bb2d5e;
//  border: 2px solid green;
`
export const Continueshoping = styled.div`
height: 45%;
width: max-content%;
display:flex;
align-items: center;
gap: 10px;
 background-color:#0044c4;
 color: white;
 padding: 2%;
 border-radius: 7px;
 cursor: pointer;
//  border: 2px solid green;
`
export const ProductWrapright = styled.div`
 width: 28%;
 height: max-content;
 border-radius: 20px;

 border: 1px solid #ececec;
 padding-bottom: 20px;
 padding-top: 20px;
 box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`
export const SelectOption = styled.div`
 width: 90%;
 height: 80px;
//  border: 2px solid #ececec;
`
export const Div = styled.div`
 width: 100%;
 height: max-content;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;
//  border: 2px solid #ececec;
`
export const OptionChose = styled.div`
 width: 80%;
 height: 50%;
 display:flex;
 align-items: center;
 justify-content: space-between;
//  border: 2px solid #ececec;
`
export const Total = styled.div`
 width: 90%;
 height: 45px;
 display:flex;
 align-items: center;
 justify-content: space-between;
 border: 2px solid #ececec;
 padding: 5px;
`
export const Delivery = styled.div`
 width: 90%;
 height: 250px;
 display:flex;
 flex-direction: column;
align-items: center;
justify-content: space-between;
// border: 2px solid #ececec;
`
export const InputHold = styled.div`
 width: 100%;
 height: 30%;
 display:flex;
 flex-direction: column;
// align-items: center;
justify-content: space-between;
// border: 2px solid #ececec;
`
export const CheckOut = styled.button`
 width: 90%;
 height: 45px;
 display:flex;
 align-items: center;
 justify-content: center;
 gap: 3%;
 border-radius: 5px;
 background-color: #0044c4;
 color: white;
 border: none;
 cursor: pointer;
//  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px 0px;
`