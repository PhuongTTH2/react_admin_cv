import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div`
  padding: 20px 10px;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;
const Logo = styled.h1`
  text-transform: uppercase;
`;
const Desc = styled.span`
  font-size: 15px;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <div>
      <Container>
        <Left>
          <Logo>Phuong.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>

          <ContactItem>
            <Room />
            <Desc>622 HCM 70000</Desc>
          </ContactItem>
          <ContactItem>
            <Room />
            <Phone>+1 234 56 78</Phone>
          </ContactItem>
          <ContactItem>
            <MailOutline />
            <Desc>dev@gmail.com</Desc>
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    </div>
  );
};

export default Footer;
