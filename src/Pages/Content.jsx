import React from 'react'
import styled from 'styled-components'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'



const ContentBody = styled.div`
width: 100%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;





@media screen and (max-width:780px) {
    height: 50rem;
}


@media screen and (max-width:450px) {
    height: 50rem;
}

@media screen and (max-width:320px) {
    height: 30rem;
}

`

const ImageHolder = styled.div`
width: 95%;
height: 90%;
display:flex;
justify-content: space-around;
align-items: center;


& > img {
    width: 30%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width:780px) {
    flex-direction: column;
    height: 100%;

    & > img {
        width:50%;
    }
}


  @media screen and (max-width:450px) {
    flex-direction: column;
    height: 100%;

    & > img {
        width: 90%;
    }
}



  @media screen and (max-width:320px) {
    flex-direction: column;
    height: 100%;

    & > img {
        width: 75.4%;
    }
}
`






const Content = () => {


    const ImageHold = [
     {
        id : 1,
        image : one
     },
     {
        id : 2,
        image : two
     },
     {
        id : 3,
        image: three
     }
    ]


  return (
    <ContentBody>
        <ImageHolder>
            {
                ImageHold.map((item)=>(
                <img src={item.image} alt=''/>
                ))
            }
        </ImageHolder>
    </ContentBody>
  )
}

export default Content;