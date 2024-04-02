import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { dummyData } from "./data";
import * as S from "../../style/Content.style";

const Content: React.FC = () => {
  const markdown = `Just a link: www.nasa.gov.`;
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    setData(dummyData);
  }, []);

    return (
      <S.All>
        <S.ContentStyle>
          {/* <ReactMarkdown children={markdown} /> */}
          <div key={dummyData[0].idx}>
            <p>{dummyData[0].title}</p>
            <p>{dummyData[0].user} | {dummyData[0].date}</p>
            <p>{dummyData[0].content}</p>
            <S.ImgStyle src={dummyData[0].previewImg} />
            <p>{dummyData[0].content2}</p>
            <S.ImgStyle src={dummyData[0].contentImg} />
          </div>
        </S.ContentStyle>
      </S.All>
    );
  };
  
  export default Content;