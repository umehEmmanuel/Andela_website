import React from 'react'
import styled from 'styled-components'

const Brilliant = () => {
  return (
  <Container>
    <Wrapper>
        <Txt>
Brilliant minds and companies <br />
come together to build the future
        </Txt>
    </Wrapper>
  </Container>
  )
}

export default Brilliant

const Txt= styled.div`
font-size: 40px;
font-weight: 700;
text-align: center;
`

const Wrapper= styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: end;
`

const Container= styled.div`
width: 100%;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
`
