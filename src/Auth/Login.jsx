


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col,  } from 'react-bootstrap';
  import styled from 'styled-components';
  import logoimg from '../assets/logo.jpg'


  const MainContainer =styled.div`
  width:100vw;
  height:100vh;
  backgound:black;
  display:flex;
  align-items:center;
  justify-content:center;

  @media screen and (max-width: 450px){


  }

  @media screen and (max-width: 320px){

  }

  
  `

  const Contain= styled(Container)`
  width:35%;
  height:80%;
 border:1px solid #d3d3d3;
  display:flex;
  align-items:center;
  justify-contents:center;
  flex-direction:column;
  border-radius:5px;


  @media screen and (max-width: 450px){
  width:95%;
  height:640px;
  display:flex;
  background:plum
  justify-content:space-evenly



 }

 @media screen and (max-width: 320px){
  }

  `

  const Rowholder=styled(Row)`
  width:100%;
@media screen and (max-width: 450px){


  height:320px

 }

 @media screen and (max-width: 320px){

 }
  `
  const LogoContainer =styled.div`
  width:90%;
  height:220px;

  @media screen and (max-width: 450px){
  width:100%;
  height:40%;
 

    

 }

 @media screen and (max-width: 320px){

 }
  `
  const Logo =styled.img`
  width:100%;
  height:80%;
  object-fit:contain;

  @media screen and (max-width: 450px){
   
    width:100%;
    height:90%;
    object-fit:contain;

 }

 @media screen and (max-width: 320px){

 }
  `

  const FormGroup= styled(Form.Group)`
  width:100%;
   height:100%;
  display:flex;
  justifycontent:center;
  flex-direction: column;

  @media screen and (max-width: 450px){

    

 }

 @media screen and (max-width: 320px){

 }

  `
  const FormController=styled(Form.Control)`
  width:100%;
  height:45px;
  border-radius: 10px;

  @media screen and (max-width: 450px){

    width:100%;
    height:40px;
    border-radius: 5px;


 }

 @media screen and (max-width: 320px){

 }
  `

  const FormLabel= styled(Form.Label)`
  font-size:13px;
  font-weight:300;
  font-family:Poppins;

  @media screen and (max-width: 450px){

    

 }

 @media screen and (max-width: 320px){

 }
  `

const Btn =styled(Button)`
width:100%;
height:45px;
border-radius:10px;
background:#003399;
border:none;

@media screen and (max-width: 450px){

  height:40px;
border-radius:6px;
background:#003399;
border:none;

`

const Coll =styled (Col)`
@media screen and (max-width: 450px){

  height:300px;
 
  


  

}

@media screen and (max-width: 320px){

}
`
const Forgot =styled.div`
font-size:13px;
font-weight:300;
font-family:Poppins;
color:red;
margin-block:8px;

@media screen and (max-width: 450px){

  

}

@media screen and (max-width: 320px){

}
`

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

  };

  return (
    <MainContainer>
      <Contain>
        < LogoContainer >
          <Logo src={logoimg}/>
          <h4>Signin</h4>
             </ LogoContainer >
            <Rowholder className="justify-content-md-center">
             <Col xs={20} md={15}>
          <div className="mt-3">
            Don't have an account? <a href="/signup">Signup here!</a>
          </div>
          <Form onSubmit={handleSubmit}>           
            <Form.Group controlId="formBasicEmail">
              <FormLabel>Email*</FormLabel>
              <FormController required type="text"  placeholder="" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group controlIe="formBasicPassword">
              <FormLabel>Password*</FormLabel>
              <FormController required type="" placeholder="" value={password} onChange={handlePasswordChange} />
            </Form.Group>
             <Forgot>
             <a href="/Forgot Password"></a>  Forgot Password?
               </Forgot>        
                  <Btn variant="primary" type="submit">
                     Signup
                  </Btn>
                 </Form>       
               </Col>
      </Rowholder>
    </Contain>
    </MainContainer>
  );
};
export default Login