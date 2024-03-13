import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import dummyData from "./data";
import * as S from "../../style/Content.style";

const Content: React.FC = () => {
  const markdown = `Just a link: www.nasa.gov.`;
  const [data, setData] = useState(dummyData);

    return (
      <S.ContentStyle>
        {/* <ReactMarkdown children={markdown} /> */}
        {data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.previewImg}</p>
            <p>{item.contentImg}</p>
          </div>
        ))}
        
      </S.ContentStyle>
    );
  };
  
  export default Content;