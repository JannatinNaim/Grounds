import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    createList: {
      prepare(listId, listName, listDescription, boardId) {
        return {
          payload: {
            listId,
            listName,
            listDescription,
            listTasks: [],
            boardId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        };
      },

      reducer(lists, action) {
        lists.push(action.payload);
      },
    },

    deleteList: {
      prepare(listId) {
        return {
          payload: {
            listId,
          },
        };
      },

      reducer(lists, action) {
        // return lists.filter((list) => list.listId !== action.payload.listId);

        const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        lists.splice(listIndex, 1);
      },
    },

    updateList: {
      prepare(listId, updatedListData) {
        return {
          payload: {
            listId,
            ...updatedListData,
          },
        };
      },

      reducer(lists, action) {
        const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        lists[listIndex] = { ...lists[listIndex], ...action.payload };
      },
    },

    updateListName: {
      prepare(listId, listName) {
        return {
          payload: {
            listId,
            listName,
          },
        };
      },

      reducer(lists, action) {
        // const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        // lists[listIndex].listName = action.payload.listName;

        const list = lists.find((list) => list.listId === action.payload.listId);
        list.listName = action.payload.listName;
      },
    },

    updateListDescription: {
      prepare(listId, listDescription) {
        return {
          payload: {
            listId,
            listDescription,
          },
        };
      },

      reducer(lists, action) {
        // const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        // lists[listIndex].listDescription = action.payload.listDescription;

        const list = lists.list((list) => list.listId === action.payload.listId);
        list.listDescription = action.payload.listDescription;
      },
    },

    updateListBoard: {
      prepare(listId, boardId) {
        return {
          payload: {
            listId,
            boardId,
          },
        };
      },

      reducer(lists, action) {
        // const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        // lists[listIndex].boardId = action.payload.boardId;

        const list = lists.find((list) => list.listId === action.payload.listId);
        list.boardId = action.payload.boardId;
      },
    },

    addListTask: {
      prepare(listId, taskId) {
        return {
          payload: {
            listId,
            taskId,
          },
        };
      },

      reducer(lists, action) {
        // const listIndex = lists.findIndex((list) => list.listId === action.payload.listId);
        // lists[listIndex].listTasks.push(action.payload.taskId);

        const list = lists.find((list) => list.listId === action.payload.listId);
        list.listTasks.push(action.payload.taskId);
      },
    },

    removeListTask: {
      prepare(listId, taskId) {
        return {
          payload: {
            listId,
            taskId,
          },
        };
      },

      reducer(lists, action) {
        const list = lists.find((list) => list.listId === action.payload.listId);
        list.listTasks = list.listTasks.filter((taskId) => taskId !== action.payload.taskId);
      },
    },
  },
});

export const listsSelector = (state) => state.lists;
export const {
  createList,
  deleteList,
  updateList,
  updateListName,
  updateListDescription,
  updateListBoard,
  addListTask,
  removeListTask,
} = listsSlice.actions;

export default listsSlice.reducer;
