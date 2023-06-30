import React from 'react'
import styled from 'styled-components'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import adetola from "../Assets/Adetola-Ahmed-talent-profile-150x150.jpeg";
import adeyinka from "../Assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpeg";
import attune from "../Assets/attune-1024x343.png";
import branch from "../Assets/branch-logo-kale-1.png";
import fluxx from "../Assets/Fluxx-logo-google-apps-copy.png";
import gopuff from "../Assets/gopuff.png";
import logitech from "../Assets/Logitech-Logo-2015-present-copy-1024x576.png";
import nebula from "../Assets/Nebula-color-stacked-kale.png";
import rafael from "../Assets/Rafael-Henrique-talent-profile-150x150.jpg";
import user from "../Assets/user (1).png";
import IBM from "../Assets/ibm.png.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {
    const settings={
        dots: true,
        infinite: true,
        slidesToShow: 4.5,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        // autoplaySpeed: 5000,
        cssEase: "linear",
    };

  return (
   <Container>
    <Wrapper>
        <Slider {...settings}>
        <Slider1
            bg='#9ad9fd'
            name='Rafael'
            testify='A few months have passed and i absolutely have no regrets. My career fast-forwarded in about five years to what i was expecting.'
            profile={rafael}
            country='Brazil'
          />

          <Slider2
            bg='#FCE1E1'
            name=''
            testify='We have been working with our Andela teammates since 2018. They are so committed, work incredibly well with our team.'
            profile={fluxx}
            country=''
          />

          <Slider2
            bg='#FDF0DC'
            name=''
            testify="We're getting a very large bamg for our buck. The resources i have been on my team are self-starters and are able to take direction and execute."
            profile={attune}
            country=''
          />

          <Slider2
            bg='#B0D6CE'
            name=''
            testify='The team has been very transparent when sourcing our needs and if we need to change direction they are able to quickly turn around'
            profile={gopuff}
            country=''
          />

          <Slider1
            bg='#FCE1E1'
            name='Kaji'
            testify='One of my biggest concern was timezone and hours overlap. As the collaboration progressed, it was hardly noticeable. Andela resources'
            profile={user}
            country='Great Britain'
          />

          <Slider1
            bg='#EBE0FF'
            name='Tony'
            testify='The Andela team was quick to meet with me as a new team manager to introduce themselves and discuss their roles and responsibilities. We'
            profile={user}
            country='United States'
          />

          <Slider1
            bg='#FDF0DC'
            name='Makan'
            testify='Working with Andela is one of the most important and best decision we have made so far as an early stage company. I have worked with'
            profile={user}
            country='United States'
          />

          <Slider1
            bg='#E0F1EB'
            name='Matt'
            testify='A fantastic service providing top quality Technical Support Engineers!'
            profile={user}
            country='Great Britain'
          />

          <Slider1
            bg='#B0D6CE'
            name='Florence'
            testify='Working with Andela team has been great. They know their work and are professional.'
            profile={user}
            country='Kenya'
          />

          <Slider1
            bg='#FCE1E1'
            name='Alexander '
            testify='Good engineers, who have worked with us for years!'
            profile={user}
            country='United States'
          />

          <Slider1
            bg='#EBE0FF'
            name='ML'
            testify="We started with Andela in a 'staff aug' capacity as a pilot to evaluate the strength of folks they could bring to the table. Our experience to date"
            profile={user}
            country='United States'
          />

          <Slider2
            bg='#FDF0DC'
            name=''
            testify='Andela is a relatively new partner for us; however, they have quickly become one of our top suppliers and are able to turn-around talent quickly'
            profile={IBM}
            country=''
          />

          <Slider2
            bg='#FCE1E1'
            name=''
            testify='The caliber of their talent, the enthusiasm and commitment of their talent, and the velocity of hiring are truly exceptional.'
            profile={nebula}
            country=''
          />

          <Slider1
            bg='#FDF0DC'
            name='Adetola'
            testify="I'm seeing more diverse opportunities at Andela, like Salesforce, DevOps, Different opportunites I'm starting to take advantage of."
            profile={adetola}
            country='Nigeria'
          />

          <Slider2
            bg='#B0D6CE'
            name=''
            testify="We love working with Andela. Overall we've had a great experience with the engineering talents who have joined Branch. "
            profile={branch}
            country=''
          />

          <Slider1
            bg='#FDF0DC'
            name='Adeyinka'
            testify='Andela has helped me to believe, dream big, break barriers, do the impossible.'
            profile={adeyinka}
            country='Nigeria'
          />

          <Slider2
            bg='#FDF0DC'
            name=''
            testify='Andela provides excellent service and support, speedy recruitment, and top-notch talent. They identified the perfect match skillset-wise.'
            profile={logitech}
            country=''
            />

        </Slider>
    </Wrapper>
   </Container>
  )
}

export default Sliders

const Wrapper =styled.div`
 width: 100%;
 height: 80%;
 overflow: hidden;
`

const Container =styled.div`
width: 100%;
height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  /* padding-bottom: 50px; */
`
