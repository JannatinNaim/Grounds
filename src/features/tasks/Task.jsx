import { useState } from "react";
import { useDispatch } from "react-redux";
import ItemCreationForm from "../../components/ItemCreationForm";
import ItemRelocateForm from "../../components/ItemRelocateForm";
import { addBoardTask, removeBoardTask, updateBoardUpdatedAt } from "../boards/boardsSlice";
import { addListTask, removeListTask } from "../lists/listsSlice";
import TaskActions from "./TaskActions";
import { createTask, updateTaskBoard, updateTaskDescription, updateTaskList, updateTaskName } from "./tasksSlice";

const Task = ({ task, setDisableListActions, hideListActions, setShowTaskCreateButton }) => {
  const dispatch = useDispatch();
  const [showTaskActions, setShowTaskActions] = useState(false);
  const [disableTaskInput, setDisableTaskInput] = useState(false);
  const [taskEditMode, setTaskEditMode] = useState(false);
  const [taskCopyMode, setTaskCopyMode] = useState(false);
  const [taskMoveMode, setTaskMoveMode] = useState(false);

  const showAllActions = () => {
    setDisableListActions(false);
    setTaskEditMode(false);
    setTaskCopyMode(false);
    setTaskMoveMode(false);
    setShowTaskCreateButton(true);
    setShowTaskActions(false);
  };

  const taskEditHandler = (taskName, taskDescription) => {
    dispatch(updateTaskName(task.taskId, taskName));
    dispatch(updateTaskDescription(task.taskId, taskDescription));

    dispatch(updateBoardUpdatedAt(task.boardId));

    setTaskEditMode(false);
    showAllActions();
  };

  const taskCopyHandler = (boardId, listId) => {
    const taskId = Date.now() + "";

    dispatch(createTask(taskId, task.taskName, task.taskDescription, listId, boardId));
    dispatch(addBoardTask(boardId, taskId));
    dispatch(addListTask(listId, taskId));

    dispatch(updateBoardUpdatedAt(boardId));

    setTaskCopyMode(false);
    showAllActions();
  };

  const taskMoveHandler = (boardId, listId) => {
    dispatch(removeBoardTask(task.boardId, task.taskId));
    dispatch(removeListTask(task.listId, task.taskId));

    dispatch(updateTaskBoard(task.taskId, boardId));
    dispatch(updateTaskList(task.taskId, listId));

    dispatch(addBoardTask(boardId, task.taskId));
    dispatch(addListTask(listId, task.taskId));

    dispatch(updateBoardUpdatedAt(boardId));
    dispatch(updateBoardUpdatedAt(task.boardId));

    setTaskMoveMode(false);
    showAllActions();
  };

  return (
    <div className="task">
      <div className="task-info">
        <span className="task-name">{task.taskName}</span>
        <p className="task-description">{task.taskDescription}</p>
      </div>

      <div className="task-actions-container">
        {showTaskActions && (
          <TaskActions
            task={task}
            showTaskActions={showTaskActions}
            setShowTaskActions={setShowTaskActions}
            taskEditMode={taskEditMode}
            setTaskEditMode={setTaskEditMode}
            taskCopyMode={taskCopyMode}
            setTaskCopyMode={setTaskCopyMode}
            taskMoveMode={taskMoveMode}
            setTaskMoveMode={setTaskMoveMode}
            disableTaskInput={disableTaskInput}
            setDisableTaskInput={setDisableTaskInput}
            setDisableListActions={setDisableListActions}
            hideListActions={hideListActions}
          />
        )}

        <button
          className="task-actions-button btn btn-sm btn-outline-secondary"
          onClick={() => setShowTaskActions((prev) => !prev)}
        >
          . . .
        </button>
      </div>

      {!disableTaskInput && (taskEditMode || taskCopyMode || taskMoveMode) && (
        <div className="task-card-forms">
          {taskEditMode && (
            <ItemCreationForm
              setBufferMode={showAllActions}
              itemType="Task"
              initName={task.taskName}
              initDescription={task.taskDescription}
              updateMode={true}
              action={taskEditHandler}
            />
          )}

          {taskCopyMode && (
            <ItemRelocateForm
              itemType="Task"
              itemRelocateType="Copy"
              bufferMode={taskCopyMode}
              setBufferMode={showAllActions}
              hasRelocateList={true}
              action={taskCopyHandler}
            />
          )}

          {taskMoveMode && (
            <ItemRelocateForm
              itemType="Task"
              itemRelocateType="Move"
              bufferMode={taskMoveMode}
              setBufferMode={setTaskMoveMode}
              hasRelocateList={true}
              action={taskMoveHandler}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
