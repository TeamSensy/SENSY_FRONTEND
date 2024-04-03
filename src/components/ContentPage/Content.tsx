import * as S from "../../style/Content.style";
import React, { useEffect, useState } from "react";
import { dummyData } from "./data";
import Topbar from "../Topbar/Topbar";
import MDEditor from "@uiw/react-md-editor";
import heartImg from "../ContentPage/img/heart.svg";
import nextImg from "../ContentPage/img/next.svg";
import beforeImgs from "../ContentPage/img/before.svg";

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
            <p>{dummyData[0].title}</p>
            <p>
              {dummyData[0].user} | {dummyData[0].date}
            </p>
            <p>{dummyData[0].content}</p>
            <p>{dummyData[0].content2}</p>
            <S.ImgStyle src={dummyData[0].contentImg} />
            <br />
            <img src={heartImg} alt="error" />
            <div>
              <img src={beforeImgs} alt="error" />
            </div>
            <div>
              <img src={nextImg} alt="error" />
            </div>
          </div>
        </S.ContentStyle>
      </S.All>
    </>
  );
};

export default Content;
