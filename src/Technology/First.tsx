import React from 'react'
import styled from 'styled-components'
import shutter from "../Assets/shutterstock_1660490494-1024x683.jpeg"
import {HiOutlineCheck} from "react-icons/hi"

const First = () => {
  return (
    <Container>
<Wrapper>
<Left>
            <Img src={shutter}/>
        </Left>
        <Right>
            <Big>
            Grow your career with us
            </Big>
            <Small>
        <Icon/>
            <Txt>Find meaningful, long-term work with interesting organizations</Txt>
            </Small>
            <Small>
        <Icon/>
            <Txt>Work with an internationally distributed team and company</Txt>
            </Small>
            <Small>
        <Icon/>
            <Txt>Gain additional skills through exclusive learning opportunities</Txt>
            </Small>
            <Small>
        <Icon/>
            <Txt>Network with other technologists to develop your expertise</Txt>
            </Small>
        </Right>
</Wrapper>

    </Container>
  )
}

export default First


const Txt = styled.div`
font-size: 20px;
font-weight: 500;
color: grey;
`

const Icon = styled(HiOutlineCheck)`
font-size: 30px;
color: lightgreen;
`


const Small =styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Big =styled.div`
font-size: 40px;
font-weight: 500;
margin-bottom:20px;
`


const Right =styled.div`
width: 45%;
height: 100%;
display: flex;
justify-content: center;
/* align-items: center; */
flex-direction: column;
/* padding: 0 10px; */
`

const Img =styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

const Left =styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
`

const Wrapper =styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
/* align-items: center; */
`

const Container =styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
`

