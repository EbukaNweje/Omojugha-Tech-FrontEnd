import React, { useState } from 'react'

import { 
  Checkoutwrap, Cardtypewrap, Cardtype, Image, Carddiv, Cardinfo, Cardshort, Cvv, Card,
  CheckoutHold,Check,Amount
} from './checkoutstyle'
import { Paragraph, CheckOut,Total,Subtotal,Productp } from '../cartPage/cartStyle'
import { FaNairaSign } from "react-icons/fa6";
import { RiMastercardFill } from "react-icons/ri";
import { SiVisa } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { ImCancelCircle } from "react-icons/im";
import { FaSpinner } from 'react-icons/fa';
// import { toast } from 'react-hot-toast'
import { toast } from 'react-hot-toast'

const CheckOutcomponent = () => {
  const navigate = useNavigate()

  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [loading, setLoading]= useState(false)

  const handleCancel =()=>{
    navigate("/cart")
  } 

  const handleCheckout =(e)=>{
    e.preventDefault()
    setLoading(true)
    // console.log("true")
    if(!cardName){
      toast.error("Card Name is required");
      setLoading(false);
      //  console.log("Cardname")
    }else if(!cardNumber){
      toast.error("Card Number is required");
      setLoading(false)
    }else if (!expirationDate){
      toast.error("Expiration Date is required");
      setLoading(false)
    }else if(!cvv){
      toast.error("CVV is required");
      setLoading(false)
    }else{
      toast.success("checkOut complete")
      setLoading(false)
    }

  }
  return (
    <Checkoutwrap>
      <CheckoutHold>
      <Card>
        <Paragraph>Card Details</Paragraph>
        <ImCancelCircle onClick={handleCancel} style={{cursor: "pointer", fontSize: "20px", color: "red", marginRight: "10px"}}/>
      </Card>
      <Cardtypewrap>
        <Cardtype>
          <RiMastercardFill />
        </Cardtype>
        <Cardtype>
          <SiVisa />
        </Cardtype>
      </Cardtypewrap>
      <Carddiv>
        <Cardinfo>
          <Paragraph>Card Name</Paragraph>
          <input
          style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
          type="text" 
          value={cardName}
          onChange={(e)=> setCardName(e.target.value)}
          />
        </Cardinfo>
        <Cardinfo>
          <Paragraph>Card Number</Paragraph>
          <input
          style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
          type="number" 
          value={cardNumber}
          onChange={(e)=> setCardNumber(e.target.value)}
          />
        </Cardinfo>
        <Cardshort>
          <Cvv>
            <Paragraph>Expiration Date</Paragraph>
            <input
          style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
          type="date" 
          value={expirationDate}
          onChange={(e)=> setExpirationDate(e.target.value)}
          />
          </Cvv>
          <Cvv>
            <Paragraph>CVV</Paragraph>
            <input
          style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
          type="number" 
          value={cvv}
          onChange={(e)=> setCvv(e.target.value)}
          />
          </Cvv>
        </Cardshort>
        <Amount>
            <Paragraph>Total</Paragraph>
            <Subtotal>
                <FaNairaSign style={{fontSize: "20px", color: "blue"}}/> <Productp>148700</Productp>
            </Subtotal>
        </Amount>
        <Check onClick={handleCheckout}>{
          loading? <FaSpinner />: <h3>Check Out</h3>
        }</Check>
      </Carddiv>
      </CheckoutHold>
    </Checkoutwrap>
  )
}

export default CheckOutcomponent