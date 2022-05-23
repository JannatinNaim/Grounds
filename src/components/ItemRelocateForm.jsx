import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { boardsSelector } from "../features/boards/boardsSlice";
import { listsSelector } from "../features/lists/listsSlice";

const ItemRelocateForm = ({ itemType, itemRelocateType, action, bufferMode, setBufferMode, hasRelocateList }) => {
  const boards = useSelector(boardsSelector);
  const lists = useSelector(listsSelector);

  const [itemRelocateBoard, setItemRelocateBoard] = useState("");
  const [itemRelocateList, setItemRelocateList] = useState("");

  const itemRelocateFormSubmitHandler = (e) => {
    e.preventDefault();

    if (itemRelocateBoard === "none" || (hasRelocateList && itemRelocateList === "none")) return;
    action(itemRelocateBoard, itemRelocateList);
  };

  const itemBoardSelectInput = useRef(null);
  useEffect(() => {
    if (itemBoardSelectInput.current?.id === "item-board-select") itemBoardSelectInput.current.focus();
  }, [bufferMode]);

  return (
    <form className="item-relocate-form" onSubmit={(e) => itemRelocateFormSubmitHandler(e)}>
      <div className="item-relocate-form-inputs">
        <select
          className="form-select"
          ref={itemBoardSelectInput}
          id="item-board-select"
          value={itemRelocateBoard}
          onChange={(e) => setItemRelocateBoard(e.target.value)}
        >
          <option value="none">Select Board</option>

          {boards.map((board) => (
            <option key={board.boardId} value={board.boardId}>
              {board.boardName}
            </option>
          ))}
        </select>

        {hasRelocateList && (
          <select
            className="form-select"
            id="item-list-select"
            value={itemRelocateList}
            onChange={(e) => setItemRelocateList(e.target.value)}
          >
            <option value="none">Select List</option>

            {boards
              .find((board) => board.boardId === itemRelocateBoard)
              ?.boardLists.map((listId) => {
                const list = lists.find((list) => list.listId === listId);
                if (!list) return "";

                return (
                  <option key={listId} value={listId}>
                    {list.listName}
                  </option>
                );
              })}
          </select>
        )}
      </div>

      <div className="item-relocate-form-actions">
        <button className="btn btn-success" type="submit">
          {itemRelocateType} {itemType}
        </button>

        <button className="cancel-button btn btn-danger" type="button" onClick={() => setBufferMode((prev) => !prev)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemRelocateForm;
