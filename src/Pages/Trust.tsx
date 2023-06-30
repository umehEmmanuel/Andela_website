import React from 'react'
import styled from 'styled-components'
import github from "../Assets/github-logo.svg"
import vision from "../Assets/invision-logo.svg"
import course from "../Assets/coursera-logo.svg"
import craft from "../Assets/Kraft-Heinz-Logo.svg"
import mic from "../Assets/seismic-logo.svg"
import gold from "../Assets/goldman-sachs-logo.svg"

const Trust = () => {
  return (
    <div>
      <Container>
        <Wrapper>
            <Trust1>Trusted by</Trust1>
            <Pics>
                <Img1 src={github}/>
                <Img2 src={vision}/>
                <Img3 src={course}/>
                <Img4 src={craft}/>
                <Img5 src={mic}/>
                <Img6 src={gold}/>
            </Pics>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Trust

const Img6= styled.img`
margin-right: 30px;
`

const Img5= styled.img`
margin-right: 30px;
`

const Img4= styled.img`
margin-right: 30px;
`

const Img3= styled.img`
margin-right: 30px;
`

const Img2= styled.img`
margin-right: 30px;
`

const Img1= styled.img`
margin-right: 30px;
`

const Pics= styled.div`
margin-bottom: 50px;
display: flex;
justify-content: center;
align-items: center;
`

const Trust1= styled.div`
font-size: 30px;
font-weight: 700;
margin-bottom: 50px;
color: rgb(19,33,40);
`

const Wrapper= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container= styled.div`
width: 100%;
height: 200px;
background-color: #E0F1EB;
display: flex;
justify-content: center;
align-items: center;
`
