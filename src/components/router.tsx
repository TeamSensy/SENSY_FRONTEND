import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/components/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
