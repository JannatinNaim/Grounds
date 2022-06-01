import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteList } from "../lists/listsSlice";
import { deleteTask } from "../tasks/tasksSlice";
import { deleteBoard } from "./boardsSlice";

const BoardActions = ({ board, setShowBoardActions, boardEditMode, setBoardEditMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isDisabled = boardEditMode;

  const boardEditHandler = () => {
    setBoardEditMode((prev) => !prev);
    setShowBoardActions((prev) => !prev);
  };

  const boardDeleteHandler = () => {
    navigate("/boards/", { replace: true });

    dispatch(deleteBoard(board.boardId));
    board.boardLists.forEach((listId) => dispatch(deleteList(listId)));
    board.boardTasks.forEach((taskId) => dispatch(deleteTask(taskId)));

    setShowBoardActions(false);
  };

  return (
    <div className="board-actions">
      <button className="btn btn-sm btn-secondary" onClick={boardEditHandler} disabled={isDisabled}>
        Edit
      </button>
      <button className="btn btn-sm btn-danger" onClick={boardDeleteHandler} disabled={isDisabled}>
        Delete
      </button>
    </div>
  );
};

export default BoardActions;
