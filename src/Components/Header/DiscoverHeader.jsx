import React from 'react'
import styled from 'styled-components'
import Discover from '../../assets/eeee.png'

const StyleTop = styled.div`
  background-color: #F8F9FA;
  height: 11.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const DiscoverHeader = () => {
  return (
    <StyleTop>
      <img src={Discover} alt="" />
    </StyleTop>
  )
}

export default DiscoverHeader
