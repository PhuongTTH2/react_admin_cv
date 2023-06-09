import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data/data.js";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const ContainerIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 3;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;
const ContainerItem = styled.div`
  background-color: #f5fbfd;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 280px;
  height: 350px;
  &:hover ${ContainerIcon} {
    opacity: 1;
  }
`;
const Item = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 1;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ContainerItem item={item} key={item.id}>
          <Item />
          <Image src={item.img} />
          <ContainerIcon>
            <IconCircle>
              <ShoppingCartOutlined />
            </IconCircle>
            <IconCircle>
              <SearchOutlined />
            </IconCircle>
            <IconCircle>
              <FavoriteBorderOutlined />
            </IconCircle>
          </ContainerIcon>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default Products;
