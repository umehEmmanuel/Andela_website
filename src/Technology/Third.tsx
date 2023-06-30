import React from 'react'
import styled from 'styled-components'
import {HiOutlineCheck} from "react-icons/hi"
import shutter from "../Assets/man.jpeg"

const Third = () => {
  return (
    <Container>
<Wrapper>
<Left>
            <Img src={shutter}/>
        </Left>
        <Right>
            <Big>
            Work anytime, anywhere
            </Big>
            <Small>
        <Icon/>
            <Txt>Ditch the commute and work from anywhere</Txt>
            </Small>
            <Small>
        <Icon/>
            <Txt>With roles across different time zones, you choose when you work</Txt>
            </Small>
            <Small>
        <Icon/>
            <Txt>Create a healthy, flexible work-life balance
</Txt>
            </Small>
        </Right>
</Wrapper>

    </Container>
  )
}

export default Third

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