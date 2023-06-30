import React from 'react'
import Hero from '../../Pages/Hero'
import Trust from '../../Pages/Trust'
import Build from '../../Pages/Build'
import Find from '../../Pages/Find'
import Brilliant from '../../Pages/Brilliant'
import Welcome from '../../Pages/Welcome'
import Card from '../../Pages/Card'
import styled from 'styled-components'
import Button from '../reUse/Button'
import Anytime from '../../Pages/Anytime'
import Skills from '../../Pages/Skills'
import Sliders from '../../Pages/Sliders'
import Card2 from '../../Technology/Card2'



const Home = () => {
  return (
    <div>
      <Hero />
      <Trust />
      <Build />
      <Find />
      <Brilliant />
     <Sliders />
      <Welcome />
     <Divs>
     <Card num="110+" text='Countries represented on
6 continents'/>
     <Card num="96%" text='Successful placements'/>
     <Card num="84%" text='Increased income for Andelans'/>
     <Card num="175,000+" text='Technologists represented'/>
     <Card num="18+" text='Months
Average engagement'/>
     </Divs>
     <Holder>
     <Button bg='1' text='Apply for remote jobs' w='200px'/>
    <Button bg='' text='Hire talents' w='150px' />
     </Holder>
     <Anytime />
     <Card2 />
 <Holder1>
 <Button bg='1' text='All case study' w='170px'/>
 </Holder1>
 <Skills />
    </div>
  )
}

export default Home



const Holder1 =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Holder = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom:20px ;
`

const Divs =styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
`