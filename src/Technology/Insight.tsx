import React from 'react'
import styled from 'styled-components'

const Insight = () => {
  return (
    <Container>
        <Wrapper>
            <Text>Insights to inspire</Text>
            <Txt>The latest articles from Andela</Txt>
        </Wrapper>
    </Container>
  )
}

export default Insight

const Txt = styled.div`
font-size: 20px;
font-weight: 500;
margin-top: 20px;
color: grey;
`

const Text = styled.div`
font-size: 40px;
font-weight: 700;
font-style: italic;
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
