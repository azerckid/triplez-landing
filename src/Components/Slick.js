import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlickContainer = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;
const PicBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: hotpink;
`;
const PicItem = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  font-size: 48px;
  color: whitesmoke;
  background-color: yellowgreen;
`;

function Slick({ rtl }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    rtl: rtl,
  };

  return (
    <SlickContainer>
      <Slider {...settings}>
        <PicBox>
          <PicItem>1</PicItem>
        </PicBox>
      </Slider>
    </SlickContainer>
  );
}

export default Slick;
