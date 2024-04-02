import React from 'react'
import styled from 'styled-components'
import {Card} from 'react-bootstrap'


const OtherBody = styled.div`
    width: 100%;
    height: 40vh;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SectionHold = styled.section`
width: 90%;
height: 80%;
background: red;
`
const Cardb = styled(Card)`
width: 30%;
height: 10%;
`




const Others = () => {
  return (
    <OtherBody>
        <SectionHold>
            <Cardb/>
        </SectionHold>
    </OtherBody>
  )
}

export default Others