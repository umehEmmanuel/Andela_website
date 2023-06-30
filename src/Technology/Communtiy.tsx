import React from 'react'
import styled from 'styled-components'
import img from "../Assets/andela-commmunity-video-profile-play.jpeg"

const Communtiy = () => {
  return (
    <Containter>
        <Wrapper>
            <Txt>
                <Big>Our vibrant community</Big>
                <Small>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</Small>
            </Txt>
            <Video src={img}/>
        </Wrapper>
    </Containter>
  )
}

export default Communtiy

const Video = styled.img`
  width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 20px;
`

const Small = styled.div`
    font-size: 25px;
    font-weight: 500;
    margin-top: 20px;
`

const Big = styled.div`
    font-size: 40px;
    font-style: italic;
    font-weight: 500;
    text-align: center;
`
const Txt = styled.div``

const Wrapper= styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`

const Containter = styled.div`
  width: 100%;
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
