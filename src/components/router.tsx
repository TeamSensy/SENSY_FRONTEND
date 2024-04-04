import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/style/global.style";
import Main from "src/components/Main/Main";

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
