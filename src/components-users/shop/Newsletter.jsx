import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fcf5f5;
  height: 60vh;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Info = styled.span`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  -webkit-flex: 8;
  background-color: white;
  height: 50px;
  padding-left: 10px;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  -webkit-flex: 1;
`;
const ContainerButton = styled.div`
  display: flex;
  width: 50%;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Info>Get timely updates from your favorite products.</Info>
      <ContainerButton>
        <Input placeholder="Your mail" />
        <Button>
          <Send />
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default Newsletter;
