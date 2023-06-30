import React from 'react'
import styled from 'styled-components'

interface iSlider1{
    bg: string;
    name: string;
    testify: string;
    profile: string;
    country: string;
}

const Slider1:React.FC<iSlider1>= ({country, profile, testify,  name,   bg}) => {
  return (
    <Container>
        <Card bg={bg}>
            <Profile>
                <Img src={profile}/>
                <Bio>
                    <Name>{name}</Name>
                    <Country>{country}</Country>
                </Bio>
            </Profile>
            <Text>{testify}</Text>
        </Card>
    </Container>
  )
}

export default Slider1

const Text = styled.div`
    color: #3d444a;
    font-weight: 400;
    line-height: 25px;
`

const Country = styled.div`
  color: #3d444a;
  font-weight: 300;
`

const Name = styled.div`
  color: #3d444a;
  font-weight: 900;
  font-size: 20px;
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const Img = styled.img`
  height: 50px;
  width: 50px;
object-fit: cover;
  border-radius: 50%;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Card = styled.div<{bg:string}>`
width: 220px;
height: 220px;
background-color:${({bg})=>bg};
padding: 20px;
box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
border-radius: 15px;
`

const Container = styled.div``
