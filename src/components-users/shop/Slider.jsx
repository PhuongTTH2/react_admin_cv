import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../data/data.js";
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #fcf1ed;
  overflow: hidden;
  box-sizing: border-box;
`;
const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacify: 0.5;
  color: gray;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};

  margin: auto;
  top: 0;
  bottom: 0;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  transition: all 1.5s ease;
  ${"" /* transform: translateX(50vw); */}
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 50px;
`;
const Img = styled.img`
  height: 80%;
  object-fit: cover;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Info = styled.span`
  font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #000;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (item) => {
    if (item === "left") {
      setSlideIndex(slideIndex === 0 ? sliderItems.length - 1 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === sliderItems.length - 1 ? 0 : slideIndex + 1);
    }
  };
  console.log(slideIndex);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: 50, color: "gray" }} />
      </Arrow>

      <Wrapper>
        {/* {sliderItems.map((item) => ( */}
        <>
          <ImgContainer>
            <Img src={sliderItems[slideIndex].img} alt="" />
          </ImgContainer>
          <TextContainer>
            <Title>{sliderItems[slideIndex].title}</Title>
            <Info>{sliderItems[slideIndex].desc}</Info>
            <Button>SHOW NOW</Button>
          </TextContainer>
        </>
        {/* ))} */}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: 50, color: "gray" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
