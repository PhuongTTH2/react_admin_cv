import React from "react";
import styled from "styled-components";
import { categories } from "../data/data.js";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import WallpaperOutlinedIcon from "@material-ui/icons/WallpaperOutlined";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { green, yellow } from "@material-ui/core/colors";

import PostNews from "./PostNews";
//https://v4.mui.com/components/material-icons/#api
const News = () => {
  return (
    <div>
      <ContainerHeader>
        <NewsContainer>
          <NewsItem>
            <MenuBookOutlinedIcon style={{ fontSize: 30, color: "gray" }} />
            <Text>Tin</Text>
          </NewsItem>
          <NewsItem>
            <MovieCreationOutlinedIcon
              style={{ fontSize: 30, color: "gray" }}
            />
            <Text>Reels</Text>
          </NewsItem>
        </NewsContainer>
        <NewsContent>
          <NewsImg>
            <NewsImgItem src={categories[1].img} />
            <Text
              style={{
                padding: "20px 0 10px 0",
                textAlign: "center",
                position: "relative",
              }}
            >
              <NewsImgIcon>
                <AddCircleIcon
                  style={{
                    width: "100%",
                    height: "100%",
                    fontSize: 32,
                    color: "blue",
                  }}
                />
              </NewsImgIcon>
              Tạo tin
            </Text>
          </NewsImg>
          <NewsInfo>
            <NewsInfoItem>
              <FavoriteBorderOutlinedIcon
                color="gray"
                style={{ fontSize: 30 }}
              />
              <NewsText>
                Chia sẻ khoảnh khắc thường ngày với gia đình và bạn bè.
              </NewsText>
            </NewsInfoItem>
            <NewsInfoItem>
              <AccessAlarmOutlinedIcon color="gray" style={{ fontSize: 30 }} />
              <NewsText>Tin sẽ biến mất sau 24 giờ.</NewsText>
            </NewsInfoItem>
            <NewsInfoItem>
              <MessageOutlinedIcon color="gray" style={{ fontSize: 30 }} />
              <NewsText>Câu trả lời và cảm xúc hiển thị riêng tư.</NewsText>
            </NewsInfoItem>
          </NewsInfo>
        </NewsContent>
      </ContainerHeader>
      <Container>
        <SearchContainer>
          <Img src={categories[1].img} />
          <Input placeholder="Bạn đang nghĩ gì thế ?" />
        </SearchContainer>
        <ItemContainer />
        <VideoContainer>
          <VideoItem>
            <VideoCallOutlinedIcon color="secondary" style={{ fontSize: 45 }} />
            <Text>Video trực tiếp</Text>
          </VideoItem>
          <VideoItem>
            <WallpaperOutlinedIcon
              style={{ fontSize: 40, color: green[500] }}
            />
            <Text>Ảnh/video</Text>
          </VideoItem>
          <VideoItem>
            <InsertEmoticonOutlinedIcon
              style={{ fontSize: 40, color: yellow[500] }}
            />
            <Text>Cảm xúc/hoạt động</Text>
          </VideoItem>
        </VideoContainer>
      </Container>
      <Container>
        <PostNews />
      </Container>
      <Container>
        <PostNews />
      </Container>
    </div>
  );
};

export default News;
const ContainerHeader = styled.div`
  width: 100%;
  max-width: 590px;
  background: #fff;
  box-shadow: 0 1px 1px #00000030;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const Container = styled.div`
  width: 100%;
  max-width: 590px;
  background: #fff;
  box-shadow: 0 1px 1px #00000030;
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
`;
const NewsImg = styled.div`
  ${"" /* height: 200px; */}
  width: 100px;
  border-radius: 15px;
  box-shadow: 0 1px 1px #00000030;
  overflow: hidden;
`;
const NewsImgIcon = styled.div`
  position: absolute;
  top: -18px;
  left: 34px;
  background: #fff;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;
const NewsInfo = styled.div``;
const NewsInfoItem = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
`;
const ItemContainer = styled.div`
  border-top: 1px solid #00000030;
  margin: 10px 0;
`;
const NewsImgItem = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  ${"" /* border-radius: 50%; */}
`;

const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
  border-bottom: 1px solid #00000030;
`;
const NewsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
`;
const NewsText = styled.h5`
  font-size: 13px;
  line-height: 18px;
  font-family: inherit;
  font-weight: 400;
  color: #828282;
  padding-left: 6px;
`;
const NewsItem = styled.div`
  display: flex;
  align-items: center;
`;
const VideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const VideoItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 10px;
`;
const Text = styled.h5`
  font-size: 15px;
  line-height: 18px;
  font-family: inherit;
  font-weight: 450;
  color: #828282;
  padding-left: 5px;
`;
const Input = styled.input`
  background: #f0f2f5;
  width: 100%;
  border-radius: 50px;
  padding-left: 27px;
  font-size: 15px;
  font-family: inherit;
  margin-left: 10px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
