import { useDispatch } from "react-redux";
import { removeBoardTask } from "../boards/boardsSlice";
import { removeListTask } from "../lists/listsSlice";
import { deleteTask } from "./tasksSlice";

const TaskActions = ({
  task,
  taskEditMode,
  setTaskEditMode,
  taskCopyMode,
  setTaskCopyMode,
  taskMoveMode,
  setTaskMoveMode,
  disableTaskInput,
  setShowTaskActions,
  setDisableTaskInput,
  setDisableListActions,
  hideListActions,
}) => {
  const dispatch = useDispatch();
  const isDisabled = disableTaskInput || taskEditMode || taskCopyMode ||  taskMoveMode;

  const taskEditHandler = () => {
    hideListActions();
    setDisableListActions(!taskEditMode);
    setDisableTaskInput();
    setTaskEditMode((prev) => !prev);
    setShowTaskActions(taskEditMode);
  };

  const taskCopyHandler = () => {
    hideListActions();
    setDisableListActions(!taskCopyMode);
    setDisableTaskInput();
    setTaskCopyMode((prev) => !prev);
    setShowTaskActions(false);
  };

  const taskMoveHandler = () => {
    hideListActions();
    setDisableListActions(!taskEditMode);
    setDisableTaskInput();
    setTaskMoveMode((prev) => !prev);
    setShowTaskActions(taskMoveMode);
  };

  const taskDeleteHandler = () => {
    dispatch(deleteTask(task.taskId));
    dispatch(removeBoardTask(task.boardId, task.taskId));
    dispatch(removeListTask(task.listId, task.taskId));
  };

  return (
    <div className="task-actions">
      <button className="btn btn-sm btn-outline-secondary" onClick={taskEditHandler} disabled={isDisabled}>
        Edit
      </button>
      <button className="btn btn-sm btn-outline-success" onClick={taskCopyHandler} disabled={isDisabled}>
        Copy
      </button>
      <button className="btn btn-sm btn-outline-warning" onClick={taskMoveHandler} disabled={isDisabled}>
        Move
      </button>
      <button className="btn btn-sm btn-outline-danger" onClick={taskDeleteHandler} disabled={isDisabled}>
        Delete
      </button>
    </div>
  );
};

export default TaskActions;
