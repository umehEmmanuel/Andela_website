import React from 'react'
import Card1 from './card1'
import styled from 'styled-components'
import img1 from "../Assets/circle-accent-purple.svg"
import img2 from "../Assets/circle-accent-red.svg"
import img3 from "../Assets/circle-accent-yellow.svg"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card2 = () => {
    const settings={
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
  return (
    <Container>
        <Wrapper>
<Slider {...settings}>
<Card1 bg='#4A1476'img={img3} text='Talents wins games; Teamwork wins championship' />
            <Card1 bg='red'img={img2} text='How AI is solving the biggest design challenge' />
            <Card1 bg='purple'img={img1} text='Personal branding for technology professional' />
            <Card1 bg='red'img={img2} text='How AI is solving the biggest design challenge' />
            <Card1 bg='purple'img={img1} text='Personal branding for technology professional' />
            <Card1 bg='#C95227'img={img3} text='Talents wins games; Teamwork wins championship' />
            <Card1 bg='blue'img={img3} text='Talents wins games; Teamwork wins championship' />
</Slider>
        </Wrapper>
    </Container>
  )
}

export default Card2

const Wrapper = styled.div`
width: 100%;
height: 90%;
overflow: hidden;
`

const Container = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`
