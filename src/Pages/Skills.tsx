import React from 'react'
import styled from 'styled-components'


const Skills= () => {
    const Array=[
        "Python" ,
        "React Native" ,
        "Javascript" ,
        "Golang" ,
        "Salesforce" ,
        "Node.js" ,
        "Vue.js" ,
        "Ruby" ,
        "Data scientist" ,
        "Java" ,
        "Kotlin" ,
        "PHP" ,
        "C#" ,
        "React.js" ,
        "Django" ,
        "Andriod" ,
        "DevOps" ,
        "Swift" ,
        "Swift" ,
        "Coding" ,
    ]
  return (
    <Container>
        <Small>Scale faster with Andela</Small>
        <Big>What skills will drive your vision?</Big>
        <Wrapper>
{
    Array.map((props,i:number)=>(
        <Divs>
<Title key={Array.length}>{props}</Title>
</Divs>
    ))
}
        </Wrapper>
    </Container>
  )
}

export default Skills

const Title = styled.div`
padding: 10px 20px;
font-size: 20px;
font-weight: 400;

`

const Divs = styled.div`
width: 300px;
height: 50px;
background-color: white;
border-radius: 30px;
color: black;
transition: all 350ms;

:hover{
    cursor: pointer;
    color: green;
    transform: translate(0, -5px);
}
`

const Big =styled.div`
font-size: 40px;
font-weight: 500;
margin-bottom:20px;
`

const Small =styled.div`
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
margin-top: 20px;
`

const Wrapper =styled.div`
width: 95%;
height: 400px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-right: 20px;
`

const Container =styled.div`
width: 100%;
height: 500px;
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;
background-color: #EDEFF1;
`
