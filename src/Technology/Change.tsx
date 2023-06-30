import React from 'react'
import styled from 'styled-components'
import Sliders from '../Pages/Sliders'
// import Sliders from '../Pages/Sliders'

const Change = () => {
  return (
  <Container>
    <Wrapper>
        <Txt>
We're in the business of changing lives</Txt>
<Sliders />
    </Wrapper>
  </Container>
  )
}

export default Change

const Txt = styled.div`
font-size: 40px;
font-weight: 700;
text-align: center;
`
const Wrapper = styled.div`
width: 100%;
`

const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`
