import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { boardsSelector, createBoard } from "../features/boards/boardsSlice";
import ItemCreationButton from "../components/ItemCreationButton";
import BoardPreview from "../features/boards/BoardPreview";
import { useState } from "react";

const AllBoards = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelector);

  const [boardCreateMode, setBoardCreateMode] = useState(false);

  const itemCreationAction = (itemName, itemDescription) => {
    dispatch(createBoard(itemName, itemDescription));
  };

  return (
    <div className="all-boards">
      <h1 className="all-boards__title">All Boards</h1>

      <div className="item-creation board-creation">
        <ItemCreationButton
          itemType="Board"
          action={itemCreationAction}
          bufferMode={boardCreateMode}
          setBufferMode={setBoardCreateMode}
        />
      </div>

      <div className="all-boards__preview">
        {boards.map((board) => (
          <Link key={board.boardId} to={"/boards/" + board.boardId} className="board-preview-container">
            <BoardPreview board={board} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBoards;
