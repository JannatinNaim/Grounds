import { createSlice, nanoid } from "@reduxjs/toolkit";

const boardsSlice = createSlice({
  name: "boards",
  initialState: [],
  reducers: {
    createBoard: {
      prepare(boardName, boardDescription) {
        return {
          payload: {
            boardId: nanoid(),
            boardName,
            boardDescription,
            boardLists: [],
            boardTasks: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        };
      },

      reducer(boards, action) {
        boards.push(action.payload);
      },
    },

    deleteBoard: {
      prepare(boardId) {
        return {
          payload: {
            boardId,
          },
        };
      },

      reducer(boards, action) {
        // return boards.filter((board) => board.boardId !== action.payload.boardId);

        const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        boards.splice(boardIndex, 1);
      },
    },

    updateBoard: {
      prepare(boardId, updatedBoardData) {
        return {
          payload: {
            boardId,
            ...updatedBoardData,
          },
        };
      },

      reducer(boards, action) {
        const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        boards[boardIndex] = { ...boards[boardIndex], ...action.payload };

        // return boards.map((board) => {
        //   if (board.boardId === action.payload.boardId) {
        //     board = {
        //       ...board,
        //       ...action.payload,
        //     };
        //   }
        //   return board;
        // });
      },
    },

    updateBoardName: {
      prepare(boardId, boardName) {
        return {
          payload: {
            boardId,
            boardName,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardName = action.payload.boardName;

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardName = action.payload.boardName;
      },
    },

    updateBoardDescription: {
      prepare(boardId, boardDescription) {
        return {
          payload: {
            boardId,
            boardDescription,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardDescription = action.payload.boardDescription;

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardDescription = action.payload.boardDescription;
      },
    },

    addBoardList: {
      prepare(boardId, listId) {
        return {
          payload: {
            boardId,
            listId,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardLists.push(action.payload.listId);

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardLists.push(action.payload.listId);
      },
    },

    removeBoardList: {
      prepare(boardId, listId) {
        return {
          payload: {
            boardId,
            listId,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardLists = boards[boardIndex].boardLists.filter(
        //   (listId) => listId !== action.payload.listId
        // );

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardLists = board.boardLists.filter((listId) => listId !== action.payload.listId);
      },
    },

    addBoardTask: {
      prepare(boardId, taskId) {
        return {
          payload: {
            boardId,
            taskId,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardTasks.push(action.payload.taskId);

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardTasks.push(action.payload.taskId);
      },
    },

    removeBoardTask: {
      prepare(boardId, taskId) {
        return {
          payload: {
            boardId,
            taskId,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].boardTasks = boards[boardIndex].boardTasks.filter(
        //   (taskId) => taskId !== action.payload.taskId
        // );

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.boardTasks = board.boardTasks.filter((taskId) => taskId !== action.payload.taskId);
      },
    },

    updateBoardUpdatedAt: {
      prepare(boardId) {
        return {
          payload: {
            boardId,
          },
        };
      },

      reducer(boards, action) {
        // const boardIndex = boards.findIndex((board) => board.boardId === action.payload.boardId);
        // boards[boardIndex].updatedAt = new Date().toISOString();

        const board = boards.find((board) => board.boardId === action.payload.boardId);
        board.updatedAt = new Date().toISOString();
      },
    },
  },
});

export const boardsSelector = (state) => state.boards;
export const {
  createBoard,
  deleteBoard,
  updateBoard,
  updateBoardName,
  updateBoardDescription,
  addBoardList,
  removeBoardList,
  addBoardTask,
  removeBoardTask,
  updateBoardUpdatedAt,
} = boardsSlice.actions;

export default boardsSlice.reducer;
