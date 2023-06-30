import React from 'react'
import styled from 'styled-components'
import{SiAndela}from "react-icons/si"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
     <Container>
     <Wrapper>
     <Divs1>
      <Divs>
      <Icon/>
      <Logo>andela</Logo>
      </Divs>
      <Social>
        <Icon1><FaFacebook size={30}/></Icon1>
        <Icon1><AiOutlineTwitter size={30}/></Icon1>
        <Icon1><AiFillGithub size={30}/></Icon1>
        <Icon1><FaInstagram size={30}/></Icon1>
        <Icon1><AiFillYoutube size={30}/></Icon1>
        <Icon1><BsLinkedin size={30}/></Icon1>
      </Social>
     </Divs1>

      <Divs2>
<Title>
  Discover Talent
</Title>
<Txt>
  For Companies
</Txt>
<Txt>Enterprise</Txt>
<Txt>Case studies</Txt>
      </Divs2>

      <Divs3>
      <Title>
        Find Work
      </Title>
      <Txt>
        For Technologists
      </Txt>
      <Txt>Learning Community</Txt>
      <Txt>Leadership Program</Txt>
      <Txt>Resources</Txt>
      </Divs3>

      <Divs4>
      <Title>
        Andela
      </Title>
      <Txt>
        About us
      </Txt>
      <Txt>Events</Txt>
      <Txt>Blog</Txt>
      <Txt>Press Center</Txt>
      <Txt>Careers</Txt>
      </Divs4>

      <Divs5>
      <Title>
        Private Policy
      </Title>
      <Txt>
        Terms and Conditions
      </Txt>
      <Txt>Modern Slavery Statement</Txt>
      <Txt>Accessibility Statement</Txt>
      </Divs5>

      </Wrapper> 
     </Container>
    </div>
  )
}

export default Footer

const Icon1 = styled.div`
margin-left: 10px;
margin-top: 50px;
transition: all 350ms;
:hover{
  cursor: pointer;
}
`

const Divs =styled.div`
  display: flex;
`

const Txt = styled.div`
font-size: 15px;
font-weight: 300;
margin-top: 20px;
transition: all 400ms;

:hover{
  cursor: pointer;
}
`

const Title =styled.div`
font-size: 20px;
font-weight: 500;
color: white;
`

const Social =styled.div`
display: flex;
`

const Logo =styled.div`
font-size: 50px;
transition: all 350ms;
:hover{
  cursor: pointer;
}
`

const Icon =styled(SiAndela)`
font-size: 50px;
margin-top: 12px;
transition: all 350ms;
:hover{
  cursor: pointer;
}
`

const Divs5 =styled.div`
width: 200px;
height: 100%;
margin-top: 50px;
`

const Divs4 =styled.div`
width: 200px;
height: 100%;
margin-top: 50px;
`

const Divs3 =styled.div`
width: 200px;
height: 100%;
margin-top: 50px;
`

const Divs2 =styled.div`
width: 200px;
height: 100%;
margin-top: 50px;
`

const Divs1 =styled.div`
width: 400px;
height: 100%;
margin-top: 100px;
display: flex;
flex-direction: column;
/* margin-top: 50px; */
`

const Wrapper =styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* margin-top: 100px; */
`

const Container =styled.div`
width: 100%;
height: 400px;
background-color:rgb(23,59,63);
color: white;
display: flex;
justify-content: center;
align-items: center;
`
