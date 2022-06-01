import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBoards from "../pages/AllBoards";
import Board from "../pages/Board";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards/" element={<AllBoards />} />
        <Route path="/boards/:boardId" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
