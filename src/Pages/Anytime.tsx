import React from 'react'
import styled from 'styled-components'

const Anytime = () => {
  return (
    <Container>
        <Wrapper>
            <Big>Anytime, anywhere - with Andela, <br />
the future of work is here</Big>
            <Small>Discover how leading companies have built
                 impactful global teams with Andela</Small>
        </Wrapper>
    </Container>
  )
}

export default Anytime

const Small =styled.div`
font-size: 20px;
font-weight: 500;
color: grey;
`

const Big =styled.div`
font-size: 50px;
font-weight: 500;
margin-bottom: 10px;
text-align: center;
line-height: 60px;
`

const Wrapper =styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Container =styled.div`
width: 100%;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
`
