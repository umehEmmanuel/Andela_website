import React from 'react'
import styled from 'styled-components'
import Button from '../Components/reUse/Button'

interface iCard{
  text?:string;
  img?:string;
  bg?:string
}

const card:React.FC<iCard> = ({text, img, bg}) => {
  return (
   <Container>
    <Wrapper>
        <Holder bg={bg}>
            <Card>
              <Small>Insights</Small>
              <Big>{text}</Big>
              <Button text='Learn more' bg='1' w='150px'/>
            </Card>
            <Img src={img}/>
        </Holder>
    </Wrapper>
   </Container>
  )
}

export default card

const Big = styled.div`
font-size: 25px;
font-weight: 500;
margin-bottom: 20px;
`

const Small = styled.div`
font-size: 18px;
font-weight: 500;
margin-bottom: 20px;
`

const Img = styled.img`
width: 330px;
height: 350px;
object-fit: cover;
/* background-color: yellow; */
`

const Card = styled.div`
width: 380px;
height: 350px;
display: flex;
justify-content: center;
color: white;
margin-left: 10px;
/* align-items: center; */
flex-direction: column;
/* background-color: blue; */
`

const Holder = styled.div<{bg?:string}>`
width: 700px;
height: 350px;
display: flex;
justify-content: space-between;
margin-left: 20px;
border-radius: 15px;
background-color:${({bg})=>bg};
`

const Wrapper = styled.div``

const Container = styled.div``
