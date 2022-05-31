import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllBoards from "../pages/AllBoards";
import Board from "../pages/Board";

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
