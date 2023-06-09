import React from "react";
import Navbar from "../components-users/Facebook/Navbar";
import News from "../components-users/Facebook/News";
import Info from "../components-users/Facebook/Info";
import Friend from "../components-users/Facebook/Friend";
import styled from "styled-components";

const Facebook = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Info />
        <News />
        <Friend />
      </Container>
    </div>
  );
};

export default Facebook;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background: #f5f6f7;
  position: relative;
  top: 38px;
  height: 100%;
`;
