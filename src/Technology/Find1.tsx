import React from 'react'
import styled from 'styled-components'

const Find = () => {
  return (
   <Container>
    <Wrapper>
     <Txt>
Find what you're looking for and more</Txt>
    </Wrapper>
   </Container>
  )
}

export default Find

const Txt = styled.div`
font-size: 40px;
font-weight: 700;
font-style: italic;
`

const Wrapper= styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
`

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
`