import React from 'react'
import Button from '../Components/reUse/Button'
import styled from 'styled-components'
import andela from "../Assets/Andela_NewLogos.png"

const Build = () => {
  return (
    <Container>
<Wrapper>
<Left>
            <Img src={andela}/>
        </Left>
        <Right>
            <Title>
Build your team today
</Title>
            <Big>
            We've cracked the code on creating engineering teams
            </Big>
            <Small>
            Skilled engineers, product managers, and designers at your fingertips.
             An extensive list of technical services to suit your business needs. 
             Start building your
             world-class team faster with talent from Andela.
            </Small>
            <Button text='Build your team' bg='' w='170px'/>
        </Right>
</Wrapper>

    </Container>
  )
}

export default Build

const Small =styled.div`
font-size: 20px;
font-weight: 500;
color: grey;
margin-bottom: 30px;
`

const Big =styled.div`
font-size: 40px;
font-weight: 700;
margin-bottom: 20px;
`

const Title =styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
`

const Right =styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding: 0 10px;
`

const Img =styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

const Left =styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
`

const Wrapper =styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container =styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`
