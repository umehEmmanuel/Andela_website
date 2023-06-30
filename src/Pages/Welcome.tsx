import React from 'react'
import styled from 'styled-components'

const Welcome = () => {
  return (
    <Container>
        <Wrapper>
            <Big>
            Welcome to the future of <br />
meaningful, sustainable work
            </Big>
            <Small>
            We believe that the sum is greater than our parts -
            ` our impact can be seen globally. We specialize in 
            helping our highly-skilled, global technology talent  community 
            in emerging markets,connect with hundreds of leading companies
            </Small>
        </Wrapper>
        
    </Container>
    
  )
}

export default Welcome

const Small = styled.div`
font-size: 20px;
font-weight: 500;
margin-top: 20px;
text-align: center;
`

const Big = styled.div`
text-align: center;
font-size: 40px;
font-weight: 500;
line-height: 50px;
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
/* align-items: end; */
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`
