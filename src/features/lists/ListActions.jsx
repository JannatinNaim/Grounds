import { useDispatch } from "react-redux";
import { deleteList } from "./listsSlice";
import { removeBoardList, removeBoardTask, updateBoardUpdatedAt } from "../boards/boardsSlice";

const ListActions = ({
  list,
  setShowListActions,
  listEditMode,
  setListEditMode,
  listMoveMode,
  setListMoveMode,
  listCopyMode,
  setListCopyMode,
  disableInput,
}) => {
  const dispatch = useDispatch();
  const isDisabled = disableInput || listEditMode || listCopyMode || listMoveMode;

  const listEditHandler = () => {
    setListCopyMode(false);
    setListMoveMode(false);

    setListEditMode(true);

    setShowListActions(false);
  };

  const listCopyHandler = () => {
    setListEditMode(false);
    setListMoveMode(false);

    setListCopyMode(true);

    setShowListActions(false);
  };

  const listMoveHandler = () => {
    setListEditMode(false);
    setListCopyMode(false);

    setListMoveMode(true);

    setShowListActions(false);
  };

  const listDeleteHandler = () => {
    dispatch(deleteList(list.listId));
    dispatch(removeBoardList(list.boardId, list.listId));

    list.listTasks.forEach((taskId) => {
      dispatch(removeBoardTask(list.boardId, taskId));
    });

    setShowListActions(false);

    dispatch(updateBoardUpdatedAt(list.boardId));
  };

  return (
    <div className="list-actions">
      <button onClick={listEditHandler} disabled={isDisabled}>
        Edit
      </button>
      <button onClick={listCopyHandler} disabled={isDisabled}>
        Copy
      </button>
      <button onClick={listMoveHandler} disabled={isDisabled}>
        Move
      </button>
      <button onClick={listDeleteHandler} disabled={isDisabled}>
        Delete
      </button>
    </div>
  );
};

export default ListActions;
