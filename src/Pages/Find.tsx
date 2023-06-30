import React from 'react'
import Button from '../Components/reUse/Button'
import styled from 'styled-components'
import {HiOutlineCheck} from "react-icons/hi"
import img from "../Assets/Visual-3.png"

const Find = () => {
  return (
   <Container>
  <Wrapper>
  <Left>
        <Title>Empower your future</Title>
        <Big>Why the world's best 
   talent prefers Andela</Big>
       <Small1>
       <Small>
        <Icon/>
            <Txt>Long-term placements</Txt>
            </Small>
        <Small>
            <Icon />
            <Txt>Trusted career partner</Txt>
            </Small>
            <Small>
            <Icon/>
            <Txt>Career Guidance</Txt>
            </Small>
            <Small>
            <Icon/>
            <Txt>96% match success</Txt>
            </Small>
       </Small1>
        <Button text='Find tech exxpert' bg='' w='170px'/>
    </Left>
    <Right src={img}/>
  </Wrapper>

   </Container>
  )
}

export default Find

const Small1 = styled.div``

const Right = styled.img`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
object-fit: contain;
`

const Txt = styled.div`
font-size: 20px;
font-weight: 500;
color: grey;
`

const Icon = styled(HiOutlineCheck)`
font-size: 30px;
color: lightgreen;
`

const Small = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const Big = styled.div`
font-size: 40px;
font-weight: 700;
margin-bottom: 20px;
`

const Title = styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
`

const Left = styled.div`
width: 30%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Wrapper = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
`
