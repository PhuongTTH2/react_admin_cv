import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { categories } from "../data/data.js";
import PublicIcon from "@material-ui/icons/Public";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyIcon from "@material-ui/icons/Reply";
const PostNews = () => {
  return (
    <ContainerHeader>
      <ContainerBox
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ContainerBox style={{}}>
          <ContainerBox
            style={{
              position: "relative",
            }}
          >
            <ContainerBox>
              <NewsImgItem
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={categories[0].img}
              />
            </ContainerBox>
            <ContainerBox
              style={{
                position: "absolute",
                right: "-5px",
                bottom: "-5px",
              }}
            >
              <NewsImgItem
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  objectFit:'cover'
                }}
                src={categories[1].img}
              />
            </ContainerBox>
          </ContainerBox>
          <ContainerBox
            style={{
              flexDirection: "column",
              marginLeft: "10px",
              justifyContent: "center",
            }}
          >
            <ContainerBox>
              <ContainerText>
                Freelance/Remote/Parttime IT Jobs Vietnam
              </ContainerText>
            </ContainerBox>
            <ContainerBox
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ContainerText>Name</ContainerText>
              <ContainerText
                style={{
                  color: "#828282",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {" "}
                21 phút
              </ContainerText>
              <PublicIcon
                style={{
                  fontSize: 15,
                }}
              />
            </ContainerBox>
          </ContainerBox>
        </ContainerBox>
        <ContainerBox>
          <MoreHorizIcon />
          <CloseIcon />
        </ContainerBox>
      </ContainerBox>
      <ContainerBoxPost>
        <ContainerText
          style={{
            padding: "10px",
          }}
        >
          Test1
        </ContainerText>
        <PostImgItem src="/assets/images/user/post_1.jpg" />
      </ContainerBoxPost>

      <div>
        <ContainerBox
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #00000030",
            paddingBottom: "10px",
          }}
        >
          <ContainerBox>
            <NewsImgItem src="/assets/images/user/heart.png" alt="" />
            <NewsImgItem src="/assets/images/user/haha.png" alt="" />
            <NewsImgItem src="/assets/images/user/like.png" alt="" />
          </ContainerBox>
          <ContainerBox>
            <ContainerText
              style={{
                marginRight: "10px",
              }}
            >
              269 bình luận
            </ContainerText>
            <ContainerText>14 lượt chia sẻ</ContainerText>
          </ContainerBox>
        </ContainerBox>
        <ContainerBox
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <ContainerBox
            style={{
              alignItems: "center",
            }}
          >
            <ThumbUpAltOutlinedIcon /> <ContainerText>Thích</ContainerText>
          </ContainerBox>
          <ContainerBox
            style={{
              alignItems: "center",
            }}
          >
            <ChatBubbleOutlineOutlinedIcon />
            <ContainerText>Bình luân</ContainerText>
          </ContainerBox>
          <ContainerBox
            style={{
              alignItems: "center",
            }}
          >
            <ReplyIcon />
            <ContainerText>Chia sẻ</ContainerText>
          </ContainerBox>
        </ContainerBox>
      </div>
    </ContainerHeader>
  );
};

export default PostNews;

const ContainerHeader = styled.div`
  padding: 10px 10px;
`;
const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerText = styled.span`
  font-size: 13px;
  line-height: 18px;
  font-family: inherit;
  font-weight: 400;
`;
const NewsImgItem = styled.img`
  width: 22px;
  margin-left: -3px;
  margin-bottom: 7px;
`;

const PostImgItem = styled.img`
  width: 100%;
  height: 400px;
  margin: 10px 0;
  object-fit: cover;
`;
const ContainerBoxPost = styled.div``;
