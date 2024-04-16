import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/styles/global.style";
import MainPage from "src/pages/MainPage/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
