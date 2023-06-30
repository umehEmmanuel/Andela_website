import React from 'react'
import styled from 'styled-components'

interface iSlider2{
    bg: string;
    name: string;
    testify: string;
    profile: string;
    country: string;
}

const Slider2:React.FC<iSlider2> = ({country, profile, testify,  name,   bg}) => {
  return (
    <Container>
        <Card bg= {bg}>
            <Profile>
                <Logo src={profile}/>
                <Holder>
                    <Name>{name}</Name>
                    <Country>{country}</Country>
                </Holder>
            </Profile>
            <Text1>{testify}</Text1>
        </Card>
    </Container>
  )
}

export default Slider2

const Text1 = styled.div`
 color: #3d444a;
    font-weight: 400;
    line-height: 25px;
`

const Country = styled.div``

const Name = styled.div`
  color: #3d444a;
  font-weight: 900;
  font-size: 20px;
`

const Holder = styled.div`
 display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const Logo = styled.img`
  height: 60px;
  width: 150px;
`

const Card = styled.div<{bg:string}>`
width: 220px;
height: 220px;
background-color:${({bg})=>bg};
padding: 20px;
box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
border-radius: 15px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Container = styled.div``
