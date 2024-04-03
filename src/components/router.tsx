import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/style/global.style";
import Main from "src/components/Main/Main";
import Topbar from "src/components/Topbar/Topbar";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
