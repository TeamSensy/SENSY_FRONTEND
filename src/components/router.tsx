import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/styles/global.style";
import Main from "src/components/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
