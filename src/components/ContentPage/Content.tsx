import * as S from "../../style/Content.style";
import React, { useEffect, useState } from "react";
import { dummyData } from "./data";
import Topbar from "../Topbar/Topbar";
// import ReactMarkdown from "react-markdown";
import heartImg from "../ContentPage/img/heart.svg";
import nextImg from "../ContentPage/img/next.svg";
import beforeImg from "../ContentPage/img/before.svg";
import shareImg from "../ContentPage/img/share.svg";
import sendImg from "../ContentPage/img/send.svg";
import topImg from "../ContentPage/img/topImg.svg";

const Content: React.FC = () => {
  const markdown = `Just a link: www.nasa.gov.`;
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <>
      <Topbar />
      <S.All>
        <S.ContentStyle>
          <div key={dummyData[0].idx}>
            <S.TopImg src={topImg} alt="error" />
            <S.TitleNInfo>
              <S.Title>{dummyData[0].title}</S.Title>
              <S.HightInfo>
                <S.User>{dummyData[0].user}</S.User>
                <S.Date>{dummyData[0].date}</S.Date>
              </S.HightInfo>
            </S.TitleNInfo>
            <S.Line />
            <S.Contents>{dummyData[0].content}</S.Contents>
            <S.ImgStyle src={dummyData[0].contentImg1_1} />
            <S.Contents>{dummyData[0].content2}</S.Contents>
            <S.ImgStyle src={dummyData[0].contentImg1_2} />
            <S.Contents>{dummyData[0].content3}</S.Contents>
            <S.Line />
            <S.BottomBar>
              <S.BottomItems>
                <S.BottomImg src={heartImg} alt="error" />
                Like
              </S.BottomItems>
              <S.BottomItems>
                <S.BottomImg src={shareImg} alt="error" /> Share
              </S.BottomItems>
            </S.BottomBar>
            <S.MovePost>
              <S.GoToPost_l>
                <S.GoToPostImg src={beforeImg} alt="error" />
                <div>
                  <S.OtherTitle>{dummyData[0].title}</S.OtherTitle>
                  <S.OtherUser_l>{dummyData[0].user}</S.OtherUser_l>
                </div>
              </S.GoToPost_l>
              <S.GoToPost_r>
                <div>
                  <S.OtherTitle>{dummyData[1].title}</S.OtherTitle>
                  <S.OtherUser_r>{dummyData[1].user}</S.OtherUser_r>
                </div>
                <S.GoToPostImg src={nextImg} alt="error" />
              </S.GoToPost_r>
            </S.MovePost>
            <div>
              <input></input>
              <button>
                <img src={sendImg} alt="error" />
              </button>
            </div>
          </div>
        </S.ContentStyle>
      </S.All>
    </>
  );
};

export default Content;
