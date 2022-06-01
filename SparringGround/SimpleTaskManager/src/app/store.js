import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boardsSlice";
import listsReducer from "../features/lists/listsSlice";
import tasksReducer from "../features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    tasks: tasksReducer,
  },
});
