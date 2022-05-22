import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  boardsSelector,
  updateBoardUpdatedAt,
  addBoardList,
  updateBoardName,
  updateBoardDescription,
} from "../features/boards/boardsSlice";
import { listsSelector, createList } from "../features/lists/listsSlice";
import BoardActions from "../features/boards/BoardActions";
import ItemCreationForm from "../components/ItemCreationForm";
import List from "../features/lists/List";

const Board = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const boards = useSelector(boardsSelector);
  const lists = useSelector(listsSelector);
  const board = boards.find((board) => board.boardId === boardId);
  const [listAddMode, setListAddMode] = useState(false);
  const [boardEditMode, setBoardEditMode] = useState(false);
  const [showBoardActions, setShowBoardActions] = useState(false);

  const listCreationAction = (itemName, itemDescription) => {
    const itemId = Date.now() + "";

    dispatch(createList(itemId, itemName, itemDescription, board.boardId));
    dispatch(addBoardList(board.boardId, itemId));

    dispatch(updateBoardUpdatedAt(board.boardId));
  };

  const boardEditAction = (boardName, boardDescription) => {
    dispatch(updateBoardName(board.boardId, boardName));
    dispatch(updateBoardDescription(board.boardId, boardDescription));

    dispatch(updateBoardUpdatedAt(board.boardId));
  };

  if (!board) {
    return (
      <div>
        <h1>Board Not Found</h1>

        <Link to={"/boards/"} className="return-nav-link">
          All Boards
        </Link>
      </div>
    );
  }

  return (
    <div className="board-page">
      {boardEditMode && (
        <ItemCreationForm
          setBufferMode={setBoardEditMode}
          action={boardEditAction}
          itemType="Board"
          initName={board.boardName}
          initDescription={board.boardDescription}
          updateMode={true}
        />
      )}

      <h1 className="board-page__title">{!boardEditMode && board.boardName}</h1>

      <div className="board-page-info">
        <p>{!boardEditMode && board.boardDescription}</p>

        <div className="board-page-stats">
          <span>Lists: {board.boardLists.length}</span>
          <span>Tasks: {board.boardTasks.length}</span>
        </div>
      </div>

      <div className="board-page-actions">
        <button
          className="board-list-add-button"
          onClick={() => setListAddMode((prev) => !prev)}
          disabled={listAddMode}
        >
          Create List
        </button>

        {showBoardActions && (
          <BoardActions
            board={board}
            setShowBoardActions={setShowBoardActions}
            boardEditMode={boardEditMode}
            setBoardEditMode={setBoardEditMode}
          />
        )}

        <button className="board-actions-button" onClick={() => setShowBoardActions((prev) => !prev)}>
          . . .
        </button>
      </div>

      <div className="all-board-lists">
        {board.boardLists.map((listId) => {
          const list = lists.find((list) => list.listId === listId);
          if (!list) return "";

          return <List key={list.listId} list={list} />;
        })}

        {listAddMode && <ItemCreationForm setBufferMode={setListAddMode} action={listCreationAction} itemType="List" />}
      </div>

      <Link to={"/boards/"} className="return-nav-link">
        All Boards
      </Link>
    </div>
  );
};

export default Board;
