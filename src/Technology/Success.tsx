import React from 'react'
import styled from 'styled-components'

const Success = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Our commitment to <br />
your success</Left>
            <Right>
                <Title>Technologist first culture</Title>
                <Txt>Ensuring a seamless experience for technologists is our top priority. You can rest assured there is always someone looking out for your interests and career.</Txt>
                <Title>Trusted platform</Title>
                <Txt>We only work with trusted and vetted companies. No matter what, we’ll ensure you are paid for the work you do, and on time.</Txt>
                <Title>Global support</Title>
                <Txt>Wherever you are, and whatever issues you may face, we’re here to help solve any disputes, fast!

</Txt>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Success

const Txt = styled.div`
font-size: 20px;
font-weight:500;
margin-bottom: 30px;
color: grey;
`

const Title = styled.div`
font-size: 40px;
font-weight: 500;
margin-bottom: 20px;
color: grey;
`

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
`

const Left = styled.div`
width: 50%;
font-size: 40px;
font-weight: 700;
color: grey;
`

const Wrapper = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
`

const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`