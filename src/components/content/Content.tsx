import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import { dummy } from "./data"

const Content = () => {
  const markdown = `Just a link: www.nasa.gov.`;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [contentImg, setContentImg] = useState("");
    return (
      <div>
        <ReactMarkdown children={markdown} />
        
      </div>
    );
  };
  
  export default Content;