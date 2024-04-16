import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/styles/global.style";
import MainPage from "src/pages/MainPage/MainPage";
import MyPage from "src/components/MyPage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
