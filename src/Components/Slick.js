import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlickContainer = styled.div`
  width: 360px;
  background-color: red;
`;
const PicBox = styled.div`
  height: 400px;
  flex-direction: row;
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
  background-color: rebeccapurple;
`;

function Slick({ rtl }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
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
        <PicBox>
          <PicItem>2</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>3</PicItem>
        </PicBox>
      </Slider>
    </SlickContainer>
  );
}

export default Slick;
