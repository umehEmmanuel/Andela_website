import React from 'react'
import styled from 'styled-components'
import header from "../Assets/header.webp"
import Button from '../Components/reUse/Button'

const Hero = () => {
  return (
    <div>
     <Container>
        <Wrapper>
<Txt>
<Big>
Discover brilliant talent <br />
around the world</Big>
<Small>
Join Andela to build your team with developers,
 engineers, product designers, and the best remote 
 technology experts.</Small>
</Txt>
<Holder>
    
<Button text='Hire Talent' bg='' w='150px' />
<Holder1>
<Button text='Apply for Jobs' bg='1' w='150px' />
</Holder1>
</Holder>
        </Wrapper>
        </Container> 
        <Container1>
            <Wrapper1>
                <Big1>Andela Launches New Platform <br />
to Power the Future of Customized Work</Big1>
                <Holder2>
                <Button bg='' text='Find out more'w='170px'/>
                </Holder2>
            </Wrapper1>
        </Container1>
    </div>
  )
}

export default Hero

const Big1 =styled.div`
font-size: 30px;
font-weight: 700;
color: white;
line-height: 40px;
margin-left: 30px;
`

const Wrapper1 =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #2A575B;
`

const Container1 =styled.div`
width: 100%;
height: 50px;
margin-bottom: 30px;
`

const Txt = styled.div`
margin-left: 30px;
`
const Holder2= styled.div`
margin-right: 200px;
`
const Holder1 = styled.div`
margin-left: 20px;
`

const Holder = styled.div`
display: flex;
margin-top: 50px;
margin-left: 30px;
`

const Small =styled.div`
font-size: 20px;
font-weight: 500;
color: white;
margin-top: 100px;
`

const Big =styled.div`
font-size: 70px;
font-weight: 700;
color: white;
top: 100px;
line-height: 70px;
`

const Wrapper= styled.div`
width: 100%;
height: 100%;

`

const Container= styled.div`
width: 100%;
height: 500px;
background-image:url(${header});
background-repeat: no-repeat;
background-position: center;
background-attachment:fixed;
background-size: cover;
`
