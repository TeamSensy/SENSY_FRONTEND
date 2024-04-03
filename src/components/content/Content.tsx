import * as S from "../../style/Content.style";
import React, { useEffect, useState } from "react";
import { dummyData } from "./data";
import Topbar from "../Topbar/Topbar";
import MDEditor from "@uiw/react-md-editor";
import heartImg from "../content/img/heart.svg";
import nextImg from "../content/img/next.svg";
import beforeImgs from "../content/img/before.svg";

const Content: React.FC = () => {
  const markdown = `Just a link: www.nasa.gov.`;
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <S.All>
      <Topbar />
      <S.ContentStyle>
        <div key={dummyData[0].idx}>
          <p>{dummyData[0].title}</p>
          <p>
            {dummyData[0].user} | {dummyData[0].date}
          </p>
          <p>{dummyData[0].content}</p>
          <S.ImgStyle src={dummyData[0].previewImg} />
          <p>{dummyData[0].content2}</p>
          <S.ImgStyle src={dummyData[0].contentImg} />
          <img src={heartImg} alt="error" />
          <img src={beforeImgs} alt="error" />
          <img src={nextImg} alt="error" />
        </div>
      </S.ContentStyle>
    </S.All>
  );
};

export default Content;
