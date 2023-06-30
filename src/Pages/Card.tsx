import React from 'react'
import styled from 'styled-components'
// import Button from '../Components/reUse/Button'
interface iCard{
  text?:string,
  num?:string
}

const Card:React.FC<iCard> = ({text, num}) => {
  return (
    //  <Main>
      <Container1>
     <Container>
      <Wrapper>
        <Num>{num}</Num>
        <Text>{text}</Text>
      </Wrapper>
    </Container>
     </Container1>
     
    /* </Main> */
    
  )
}

export default Card

const Container1 =styled.div`
margin-left: 10px;
`

const Text =styled.div`
font-size: 18px;
font-weight: 400;
text-align: center;
`

const Num =styled.div`
font-size: 50px;
font-weight: 500;
margin-bottom: 10px;
`

const Wrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

// const Main =styled.div`
// width: 100%;
// height: 350px;
// display: flex;
// /* justify-content: center;
// align-items: center; */
// background-color: blue;


const Container =styled.div`
width: 400px;
height: 300px;
background-color:#B0D6CE;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-bottom: 30px;
margin-left: 30px;
`