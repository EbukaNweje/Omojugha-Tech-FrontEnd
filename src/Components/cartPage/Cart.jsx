import {
     CartWrapper,Cartnav,Cartwrite,Cartwriteup,Cartwritedown,H1,Paragraph,Span,Downhold,Dell,
     ProductWrap,ProductWrapleft,ProductWrapright,ProductWrapleftHead,Wrapitem,Wrapitemright,
     Productp,ProductContain,Productdetail,Radio,ImageHold,ImageWrite,ItemName,Star,BuyingDetail,
     Price,Quantity,Quantitynumber,Quantityupdate,Subtotal,Continue,Continueshoping,SelectOption,
     Total,CheckOut,H2,OptionChose,Delivery,InputHold,Navitems,Navdiv,Div,Comp
} from "./cartStyle"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import CheckOutcomponent from "../checkoutpage/CheckOut";
import { useNavigate } from "react-router-dom";

const MyCart = () => {

    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)
    const [produntId,setProductId] = useState()
    const [delivery,setDelivery] = useState(false)
    const [checkOut,setCheckOut] = useState(false)

    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")

    const item = [1,2,3]

    const handleAddquantity=(id)=>{
        if(id === produntId){
            setQuantity( quantity +1 )
            // console.log("id", id, "pro id", produntId)
        }else{
            console.log("no")
            // null
        }
        
        
    }
    const handleReducequantity=()=>{
        if( quantity < 2){
            setQuantity( 1 )
        }else{
            setQuantity( quantity -1 )
            console.log(produntId)
        }
    }

    const handleCheckout =()=>{
        navigate("/check")
    }

    return(
        <CartWrapper>
            <Cartwrite>
                <Cartwriteup>
                    <H1>Your Cart</H1>
                </Cartwriteup>
                <Cartwritedown>
                    <Downhold>
                        <Paragraph>
                            There are <Span>3</Span> products in your cart</Paragraph>
                        <Dell>
                            <RiDeleteBin6Line /> <Paragraph>Clear Cart</Paragraph>
                        </Dell>
                    </Downhold>
                </Cartwritedown>
            </Cartwrite>
            <ProductWrap>
                <ProductWrapleft>
                    <ProductWrapleftHead>
                        <Wrapitem>
                            <Productp>Product</Productp>
                        </Wrapitem>
                        <Wrapitemright>
                            <Productp>Unit Price</Productp>
                            <Productp>Quantity</Productp>
                             <Productp>Subtotal</Productp>
                            <Productp>Remove</Productp>
                        </Wrapitemright>
                    </ProductWrapleftHead>
                    {
                        item.map((e,id)=>(
                        <ProductContain key={id}>
                        <Productdetail>
                            <Radio>
                                <input
                                type="checkbox" />
                            </Radio>
                            <ImageHold>
                                {/* <img src="./ebukasample.png" alt="" /> */}
                            </ImageHold>
                            <ImageWrite>
                                <ItemName>
                                    <Productp>Tecno Camon 20 Premier 8GB RAM 512GB ROM 5G</Productp>
                                </ItemName>
                                <Star>
                                    <FaStar color="#fdc040"/>
                                    <FaStar color="#fdc040"/>
                                    <FaStar color="#fdc040"/>
                                    <FaStar color="#fdc040"/>
                                    <FaStar color="#fdc040"/>
                                    (5.0)
                                </Star>
                            </ImageWrite>
                        </Productdetail>
                        <BuyingDetail>
                            <Price>
                                <FaNairaSign /> <Productp>630,000</Productp>
                            </Price>
                            <Quantity>
                                <Quantitynumber>
                                    {quantity}
                                </Quantitynumber>
                                <Quantityupdate>
                                    <IoIosArrowUp style={{cursor: "pointer"}} onClick={()=>{
                                        setProductId(id)
                                        handleAddquantity(id)
                                    }}/>
                                    <IoIosArrowDown style={{cursor: "pointer"}} onClick={()=>{
                                        setProductId(id)
                                        handleReducequantity()
                                    }}/>
                                </Quantityupdate>
                            </Quantity>
                            <Subtotal>
                                <FaNairaSign /> <Productp>630,000</Productp>
                            </Subtotal>
                            <Price>
                                <RiDeleteBin6Line style={{cursor: "pointer"}}/>
                            </Price>
                        </BuyingDetail>
                    </ProductContain>
                        ))
                    }

                    <Continue>
                        <Continueshoping>
                            <BsArrowLeft/>
                            <Productp>Continue Shopping</Productp>
                        </Continueshoping>
                        
                        <Continueshoping>
                            <RxUpdate />
                            <Productp>Update Cart</Productp>
                        </Continueshoping>
                    </Continue>
                </ProductWrapleft>
                <ProductWrapright>
                 { 
                 checkOut?
                 <Comp>
                    <ImCancelCircle onClick={()=>setCheckOut(false)} style={{cursor: "pointer", fontSize: "20px", color: "red", marginRight: "10px"}}/>
                    <CheckOutcomponent />
                 </Comp>:  
                 <Div>
                 <SelectOption>
                        <H2>
                            Select an option
                        </H2>
                        <OptionChose>
                        <div style={{display:"flex", gap: "5px",}}>    
                            <input onClick={()=>setDelivery(false)} type="radio" name="go"/>
                            <Productp>Pickup</Productp>
                        </div>
                        <div style={{display:"flex", gap: "5px",}}>
                            <input onClick={()=>setDelivery(true)} type="radio" name="go"/>
                            <Productp>Delivery</Productp>
                        </div>
                        </OptionChose>
                    </SelectOption>
                        {
                            delivery?
                            <Delivery>
                                <InputHold>
                                    <p>Phone</p>
                                    <input 
                                        style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        value={phone}
                                    type="phone" />
                                </InputHold>
                                <InputHold>
                                    <p>Adress</p>
                                    <input 
                                        style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
                                        onChange={(e)=> setAdress(e.target.value)}
                                        value={adress}
                                    type="text" />
                                </InputHold>
                                <InputHold>
                                    <p>City</p>
                                    <input 
                                        style={{width: "100%",height: "60%", border: "1px solid silver", borderRadius: "5px", outline: "none", paddingLeft: "2%"}}
                                        onChange={(e)=> setCity(e.target.value)}
                                        value={city}
                                    type="text" />
                                </InputHold>
                            </Delivery>:null
                        }
                    <Total>
                        <Productp>Total</Productp>
                        <Subtotal>
                            <FaNairaSign /> <Productp>148700</Productp>
                        </Subtotal>
                    </Total>
                    <CheckOut onClick={handleCheckout}>
                         <Productp>Proceed to CheckOut</Productp>
                         <LuLogOut fontSize={17}/>
                    </CheckOut>
                    </Div>
                    }
                </ProductWrapright>
            </ProductWrap>
        </CartWrapper>
    )
}

export default MyCart