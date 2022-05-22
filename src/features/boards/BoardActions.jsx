import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBoard } from "./boardsSlice";

const BoardActions = ({ board, setShowBoardActions, boardEditMode, setBoardEditMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardEditHandler = () => {
    setBoardEditMode(prev => !prev);
    setShowBoardActions(prev => !prev);
  };

  const boardDeleteHandler = () => {
    navigate("/boards/", { replace: true });
    dispatch(deleteBoard(board.boardId));
    setShowBoardActions(false);
  };

  return (
    <div className="board-actions">
      <button onClick={boardEditHandler} disabled={boardEditMode}>Edit</button>
      <button onClick={boardDeleteHandler}>Delete</button>
    </div>
  );
};

export default BoardActions;
