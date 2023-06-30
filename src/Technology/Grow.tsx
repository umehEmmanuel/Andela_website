import React from 'react'
import Button from '../Components/reUse/Button'
import styled from 'styled-components'
import people from "../Assets/people.jpeg"

const Grow = () => {
  return (
  <Container>
    <Wrapper>
        <Big>
Grow your potential beyond borders</Big>
        <Small>Connect with a global network and land international opportunities.</Small>
        <Button text='Discover opportunity' w='230px' bg=''/>
    </Wrapper>
  </Container>
  )
}

export default Grow

const Small= styled.div`
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
`

const Big = styled.div`
    font-size: 40px;
    font-style: italic;
    letter-spacing: 2px;
    color: white;
    margin-bottom: 20px;
`

const Wrapper = styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  z-index: 10;
`

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${people});
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
