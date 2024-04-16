import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/styles/global.style";
import Main from "src/components/Main/Main";
import MyPage from "src/components/MyPage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
