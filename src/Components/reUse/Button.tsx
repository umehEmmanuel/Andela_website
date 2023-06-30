import React from 'react'
import styled from 'styled-components'

interface iButton{
  text?:string
  bg?:string
  w?:string
}

const Button:React.FC<iButton> = ({text, bg, w}) => {
  return (
    <Container bg={bg} w={w}>
{text}
    </Container>
  )
}

export default Button

const Container =styled.div<{bg?:string, w?:string}>`
width: ${({w})=>w};
/* padding: 3px 5px */
margin-right: 20px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
border: 1px solid black;
background-color: ${({bg})=>bg?"white":"#56C870"};
color: black;
font-size: 18px;
font-weight: 600;
transition: all 350ms;
:hover{
    cursor: pointer;
    transform: translate(0, -5px);
}
`
