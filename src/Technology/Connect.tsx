import React from 'react'
import styled from 'styled-components'
import me from "../Assets/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpeg"
import Button from '../Components/reUse/Button'

const Connect = () => {
  return (
  <Container>
    <Wrapper>
        <Txt>Connecting your brilliance <br />
with opportunity</Txt>
        <Button text='Apply to the talent network' bg='' w='250px'/>
    </Wrapper>

  </Container>
  )
}

export default Connect

const Txt =styled.div`
font-size: 45px;
text-align: center;
font-weight: 700;
color: white;
margin-bottom: 20px;
`

const Wrapper =styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  z-index: 10;
`

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${me});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(53, 84, 91, 0.85);
    position: absolute;
  }
`
