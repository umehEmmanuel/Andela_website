import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import{SiAndela}from "react-icons/si"
import{RiArrowDropDownLine}from "react-icons/ri"
import {NavLink} from "react-router-dom"
import Button from '../reUse/Button'

const Header = () => {
    const [isSticky ,setIsSticky]=useState(false)
    useEffect(()=>{
        const handlescroll=()=>{
            const scroll =window.pageYOffset;
            if(scroll >=100){
              setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll" ,handlescroll)
        return ()=>{
            window.removeEventListener("scroll" , handlescroll)
        }

    })

const [hover, setHover] =useState<boolean>(false)
const onHover =()=>{
    setHover(!hover)
}
  return (
<>
{
    isSticky?(
        <Container bg="white" p="fixed">
        <Main>
        <Logos>
            <Icons c="#2A575B"><SiAndela size={40}/></Icons>
            <Logo to="" c="#2A575B">Andela</Logo>
            <Navs>
                <Nav to="/technology" c="#2A575B">For Technology Experts</Nav>
                <Nav to="/Business" c="#2A575B">Business</Nav>
                <Nav to="enterprise" c="#2A575B">Enterprise</Nav>
            </Navs>
        </Logos>
        <Divs>
            <Nav1 c="#2A575B">Apply for Jobs</Nav1>
            <Button bg='' text='Hire Talents' w='130px'/>
            <Log c="#2A575B">
                <Logs onMouseEnter={onHover} c="#2A575B">Log In</Logs>
               {
                hover?  <Icon ><RiArrowDropDownLine size={30}/></Icon>: <Icon><RiArrowDropDownLine size={30}/></Icon>
               }
               {
                hover?<Drop bg="#2A575B">
                <Dropdown c="black">Client login</Dropdown>
                <Dropdown1 c="black">Talent login</Dropdown1>
                </Drop>:null
               }
            </Log>
        </Divs>
        </Main>
</Container>
    ):(
        <Container bg="#2A575B"  p="">
        <Main>
        <Logos>
            <Icons c="white"><SiAndela size={40}/></Icons>
            <Logo to="" c="white">Andela</Logo>
            <Navs>
                <Nav to="/technology" c="white">For Technology Experts</Nav>
                <Nav to="/Business" c="white">Business</Nav>
                <Nav to="enterprise" c="white">Enterprise</Nav>
            </Navs>
        </Logos>
        <Divs>
            <Nav1 c="white">Apply for Jobs</Nav1>
            <Button bg='' text='Hire Talents'  w='130px'/>
            <Log c="white">
                <Logs onMouseEnter={onHover} c="white">Log In</Logs>
               {
                hover?  <Icon ><RiArrowDropDownLine size={30}/></Icon>: <Icon><RiArrowDropDownLine size={30}/></Icon>
               }
               {
                hover?<Drop bg="white">
                <Dropdown c="grey">Client login</Dropdown>
                <Dropdown1 c="grey">Talent login</Dropdown1>
                </Drop>:null
               }
            </Log>
        </Divs>
        </Main>
</Container>
    )
}
</>
  )
}

export default Header

const Dropdown1 =styled.div<{c:string}>`
margin-top: 10px;
color: ${({c})=>c};
transition: all 400ms;
:hover{
    cursor: pointer;
    padding: 5px 7px;
background-color: lightgray;
border-radius: 3px;
}
`

const Dropdown =styled.div<{c:string}>`
transition: all 400ms;
color: ${({c})=>c};
:hover{
    cursor: pointer;
    padding: 5px 7px;
background-color: lightgrey;
border-radius: 3px;
}
`

const Drop =styled.div<{bg:string}>`
width: 100px;
height: 70px;
background-color: ${({bg})=>bg};
top: 50px;
right: 155px;
padding: 5px 10px;
border-radius: 5px;
position: absolute;
`

const Icons= styled.div<{c:string}>`
margin-top: 7px;
margin-left: 30px;
color: ${({c})=>c};
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Icon= styled.div`
margin-top: 7px;
color: black;
position: relative;
`

const Log = styled.div<{c:string}>`
display: flex;
justify-content: center;
align-items: center;
color:${({c})=>c};
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Logs = styled.div<{c:string}>`
color: ${({c})=>c};
margin-left: 30px;
`


const Nav1 = styled.div<{c:string}>`
font-size: 15px;
font-weight: 500;
color: ${({c})=>c};
margin-right: 30px;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Divs = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 200px;
`

const Nav = styled(NavLink)<{c:string}>`
margin-left: 20px;
text-decoration: none;
color: ${({c})=>c};
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Navs  = styled.div`
display: flex;
font-size: 15px;
font-weight: 500;
margin-top: 5px;
margin-left: 50px;
`

const Logo = styled(NavLink)<{c:string}>`
font-size: 30px;
font-weight: 500;
color: ${({c})=>c};
margin-left: 10px;
text-decoration: none;
transition: all 350ms;

:hover{
    cursor: pointer;
}
`

const Logos = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div<{bg:string, p:string}>`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background-color:${({bg})=>bg};
position: ${({p})=>p};
z-index: 100;
`
