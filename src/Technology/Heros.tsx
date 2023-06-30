import React from 'react'
import Button from '../Components/reUse/Button'
import styled from 'styled-components'
import header from "../Assets/green-wash.jpeg"

const Hero = () => {
  return (
  <Container>
    <Wrapper>
        <Big>Find work that you <br />
love with companies <br />
you can trust</Big>
        <Small>Join the Andela Talent Network to experience the joy of long-term work, <br />
with vetted companies and competitive compensation.</Small>
        <Button text='Apply to excess exclusive jobs' bg='' w='300px'/>
    </Wrapper>
  </Container>
  )
}

export default Hero

const Small = styled.div`
font-size: 20px;
font-weight: 500;
color: white;
margin-top: 50px;
margin-bottom: 30px;
`
const Big = styled.div`
font-size: 70px;
font-weight: 700;
color: white;
top: 100px;
line-height: 70px;
`
const Wrapper = styled.div`
width: 90%;
height: 100%;
margin-left: 30px;
`
const Container = styled.div`
width: 100%;
height: 500px;
background-image:url(${header});
background-repeat: no-repeat;
background-position: center;
background-attachment:fixed;
background-size: cover;
`