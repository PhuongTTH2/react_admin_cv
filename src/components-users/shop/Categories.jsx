import React from "react";
import styled from "styled-components";
import { categories } from "../data/data.js";
const Container = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
`;
const Img = styled.img`
width:100%;
height:100%
object-fit: cover;
`;
const ContainerImg = styled.div`
  position: relative;
  flex: 1;
  margin: 3px;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const ContainerTitle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Title = styled.span`
  color: white;
  font-size: 30px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <ContainerImg>
          <Img src={item.img} />
          <ContainerTitle>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </ContainerTitle>
        </ContainerImg>
      ))}
    </Container>
  );
};

export default Categories;
