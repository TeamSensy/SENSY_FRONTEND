import * as S from "../../style/Content.style";
import React, { useEffect, useState } from "react";
import { dummyData } from "./data";
import Topbar from "../Topbar/Topbar";
import ReactMarkdown from "react-markdown";
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
            <S.Line />
            <S.CoverContent>
              <img src={heartImg} alt="error" />
              <img src={shareImg} alt="error" />
            </S.CoverContent>
            <S.CoverContent>
              <S.GoToPost>
                <img src={beforeImg} alt="error" />
              </S.GoToPost>
              <S.GoToPost>
                <img src={nextImg} alt="error" />
              </S.GoToPost>
            </S.CoverContent>
            <textarea>
              <img src={sendImg} alt="error" />
            </textarea>
          </div>
        </S.ContentStyle>
      </S.All>
    </>
  );
};

export default Content;
