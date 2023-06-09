import React from "react";
import styled from "styled-components";
import { categories } from "../data/data.js";
import { Search } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AppsIcon from "@material-ui/icons/Apps";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../../assets/images/users/fb-logo.webp";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Img src={logo} />
        {/* <ItemImg>
          <FacebookIcon
            style={{
              fontSize: 55,
              color: "blue",
              position: "absolute",
              left: "-9px",
              top: "-7px",
            }}
          />
        </ItemImg> */}
        <SearchContainer>
          <SearchItem>
            <Search style={{ fontSize: 21, color: "gray" }} />
          </SearchItem>
          <Input placeholder="Tìm kiếm trên Facebook " />
        </SearchContainer>
      </Left>
      <Center>
        <Icon>
          <HomeIcon style={{ fontSize: 35, color: "blue" }} />
        </Icon>
        <Icon>
          <PeopleOutlineIcon style={{ fontSize: 35, color: "gray" }} />
        </Icon>
        <Icon>
          <OndemandVideoIcon style={{ fontSize: 35, color: "gray" }} />
        </Icon>
        <Icon>
          <PeopleAltIcon style={{ fontSize: 35, color: "gray" }} />
        </Icon>
        <Icon>
          <SportsEsportsIcon style={{ fontSize: 35, color: "gray" }} />
        </Icon>
      </Center>
      <Right>
        <IconRight>
          <AppsIcon style={{ fontSize: 25, color: "black" }} />
        </IconRight>
        <IconRight>
          <SmsIcon style={{ fontSize: 25, color: "black" }} />
        </IconRight>
        <IconRight>
          <NotificationsIcon style={{ fontSize: 25, color: "black" }} />
          {/* <span></span> */}
        </IconRight>
        <AvatarRight>
          <Avatar src={categories[1].img} />
        </AvatarRight>
      </Right>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 52px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 3px #d5d1d1b3;
  padding: 0 22px;
  position: fixed;
  z-index: 999;
  top: 0;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const SearchItem = styled.div`
  position: absolute;
  left: 5px;
`;
const Left = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;
const ItemImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 7px;
  overflow: hidden;
  position: relative;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0px 7px;
`;
const Input = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 27px;
  background: #f0f2f5;
  border-radius: 50px;
  font-size: 15px;
  line-height: 18px;
  font-family: inherit;
  font-weight: 350;
`;
const Center = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Icon = styled.div`
  cursor: pointer;
`;
const Right = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const IconRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  padding: 4px 6px;
  background-color: #e4e6eb;
  border-radius: 50%;
  position: relative;
`;
const AvatarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: #e4e6eb;
  border-radius: 50%;
  position: relative;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;
