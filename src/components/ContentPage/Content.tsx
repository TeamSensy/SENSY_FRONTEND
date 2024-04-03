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
            <S.ImgStyle src={dummyData[0].previewImg} />
            <S.Title>{dummyData[0].title}</S.Title>
            <S.HightInfo>
              <S.User>{dummyData[0].user}</S.User>
              <span style={{ fontSize: 13 }}> | </span>
              <S.Userid>{dummyData[0].date}</S.Userid>
            </S.HightInfo>
            <S.Line />
            <S.Contents>{dummyData[0].content}</S.Contents>
            <S.ImgStyle src={dummyData[0].contentImg} />
            <S.Contents>{dummyData[0].content2}</S.Contents>
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