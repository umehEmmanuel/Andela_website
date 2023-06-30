import React from 'react'
import styled from 'styled-components'
import {HiOutlineCheck} from "react-icons/hi"
import girl from "../Assets/girlCoding.jpeg"


const Second = () => {
  return (
   <Container>
    <Wrapper>
        <Left>
            <Big>Set your own rate</Big>
            <Small>
                <Icon></Icon>
                <Txt>Only work with companies we trust</Txt>
            </Small>
            <Small>
                <Icon></Icon>
                <Txt>Receive payments on time in your local currency, USD, or in Crypto</Txt>
            </Small>
            <Small>
                <Icon></Icon>
                <Txt>Discover salaries that match your skills and experience
</Txt>
            </Small>
        </Left>
        <Right>
<Img src={girl}/>
        </Right>
    </Wrapper>
   </Container>
  )
}

export default Second

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


const Left =styled.div`
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

const Right =styled.div`
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
margin-bottom: 50px;
margin-top: 30px;
`


