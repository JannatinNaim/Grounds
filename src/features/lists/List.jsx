import { useEffect, useState } from "react";
import ListActions from "./ListActions";
import ItemCreationButton from "../../components/ItemCreationButton";
import ItemCreationForm from "../../components/ItemCreationForm";
import ItemRelocateForm from "../../components/ItemRelocateForm";
import Task from "../tasks/Task";
import { addListTask, createList, updateListBoard, updateListDescription, updateListName } from "./listsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoardList,
  addBoardTask,
  removeBoardList,
  removeBoardTask,
  updateBoardUpdatedAt,
} from "../boards/boardsSlice";
import { createTask, tasksSelector } from "../tasks/tasksSlice";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelector);

  const [showListActions, setShowListActions] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const [listEditMode, setListEditMode] = useState(false);
  const [listCopyMode, setListCopyMode] = useState(false);
  const [listMoveMode, setListMoveMode] = useState(false);
  const [showTaskCreateButton, setShowTaskCreateButton] = useState(true);
  const [taskCreationMode, setTaskCreationMode] = useState(false);

  const disableListActions = () => {
    setShowListActions(false);
    setDisableInput(taskCreationMode);
  };
  useEffect(disableListActions, [taskCreationMode]);

  const hideListActions = () => {
    setShowListActions(false);
    setListEditMode(false);
    setListCopyMode(false);
    setListMoveMode(false);
    setShowTaskCreateButton(false);
    setTaskCreationMode(false);
  };

  const listEditAction = (listName, listDescription) => {
    dispatch(updateListName(list.listId, listName));
    dispatch(updateListDescription(list.listId, listDescription));

    dispatch(updateBoardUpdatedAt(list.boardId));

    setListEditMode(false);
  };

  const listCopyAction = (boardId) => {
    const listId = Date.now();

    dispatch(createList(listId, list.listName, list.listDescription, boardId));
    dispatch(addBoardList(boardId, listId));
    list.listTasks.forEach((taskId) => {
      const _taskId = Date.now();
      const task = tasks.find((task) => task.taskId === taskId);

      dispatch(createTask(_taskId, task.taskName, task.taskDescription, listId, boardId));
      dispatch(addBoardTask(boardId, _taskId));
      dispatch(addListTask(listId, _taskId));
    });

    dispatch(updateBoardUpdatedAt(boardId));

    setListCopyMode(false);
  };

  const listMoveAction = (boardId) => {
    dispatch(updateListBoard(list.listId, boardId));

    dispatch(addBoardList(boardId, list.listId));
    dispatch(removeBoardList(list.boardId, list.listId));

    list.listTasks.forEach((taskId) => {
      dispatch(addBoardTask(boardId, taskId));
      dispatch(removeBoardTask(list.boardId, taskId));
    });

    dispatch(updateBoardUpdatedAt(list.boardId));
    dispatch(updateBoardUpdatedAt(boardId));

    setListMoveMode(false);
  };

  const taskCreateAction = (taskName, taskDescription) => {
    const itemId = Date.now() + "";

    dispatch(createTask(itemId, taskName, taskDescription, list.listId, list.boardId));
    dispatch(addBoardTask(list.boardId, itemId));
    dispatch(addListTask(list.listId, itemId));

    dispatch(updateBoardUpdatedAt(list.boardId));

    setTaskCreationMode(false);
  };

  return (
    <div className="list">
      <div className="list-info">
        <h3 className="list-info__name">{list.listName}</h3>
        <p className="list-info__description">{list.listDescription}</p>
      </div>

      <div className="list-card-actions">
        {showListActions && (
          <ListActions
            list={list}
            setShowListActions={setShowListActions}
            listEditMode={listEditMode}
            setListEditMode={setListEditMode}
            listMoveMode={listMoveMode}
            setListMoveMode={setListMoveMode}
            listCopyMode={listCopyMode}
            setListCopyMode={setListCopyMode}
            disableInput={disableInput}
          />
        )}

        <button className="list-actions-button" onClick={() => setShowListActions((prev) => !prev)}>
          . . .
        </button>
      </div>

      <div className="list-tasks-container">
        <div className="list-tasks">
          {list.listTasks.map((taskId) => {
            const task = tasks.find((task) => task.taskId === taskId);
            if (!task) return "";

            return (
              <Task
                key={taskId}
                task={task}
                setDisableListActions={setDisableInput}
                hideListActions={hideListActions}
                setShowTaskCreateButton={setShowTaskCreateButton}
              />
            );
          })}
        </div>

        <div className="list-card-forms">
          {listEditMode && !disableInput && (
            <ItemCreationForm
              setBufferMode={setListEditMode}
              action={listEditAction}
              itemType="List"
              initName={list.listName}
              initDescription={list.listDescription}
              updateMode={true}
            />
          )}

          {listCopyMode && !disableInput && (
            <ItemRelocateForm
              itemType="List"
              itemRelocateType="Copy"
              action={listCopyAction}
              bufferMode={setListCopyMode}
              setBufferMode={setListCopyMode}
            />
          )}

          {listMoveMode && !disableInput && (
            <ItemRelocateForm
              itemType="List"
              itemRelocateType="Move"
              action={listMoveAction}
              bufferMode={setListMoveMode}
              setBufferMode={setListMoveMode}
            />
          )}

          {!(listEditMode || listCopyMode || listMoveMode) && showTaskCreateButton && (
            <ItemCreationButton
              action={taskCreateAction}
              itemType="Task"
              bufferMode={taskCreationMode}
              setBufferMode={setTaskCreationMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
