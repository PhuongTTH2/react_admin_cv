import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
`;
const Wraper = styled.div``;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div``;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 5px 20px;
  border: 1px solid #000;
  border-radius: 10px;
`;

const MenuItem = styled.span`
  font-size: 14;
  opacity: 0.9;
  cursor: pointer;
  margin-right: 25px;
`;
const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;
const SearchItem = styled.div`
  position: absolute;
  right: 6px;
  top: 4px;
`;
const Logo = styled.h1``;
const Navbar = () => {
  return (
    <Container>
      <Left>
        <MenuItem>EN</MenuItem>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchItem>
            <Search style={{ fontSize: 18, color: "gray" }} />
          </SearchItem>
        </SearchContainer>
      </Left>
      <Center>
        <Logo>Phuong.</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <Wraper>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Wraper>
      </Right>
    </Container>
  );
};

export default Navbar;
