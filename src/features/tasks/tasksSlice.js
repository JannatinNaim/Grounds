import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    createTask: {
      prepare(taskId, taskName, taskDescription, listId, boardId) {
        return {
          payload: {
            taskId,
            taskName,
            taskDescription,
            listId,
            boardId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        };
      },

      reducer(tasks, action) {
        tasks.push(action.payload);
      },
    },

    deleteTask: {
      prepare(taskId) {
        return {
          payload: {
            taskId,
          },
        };
      },

      reducer(tasks, action) {
        tasks.filter((task) => task.taskId !== action.payload.taskId);
      },
    },

    updatedTask: {
      prepare(taskId, updatedTaskData) {
        return {
          payload: {
            taskId,
            ...updatedTaskData,
          },
        };
      },

      reducer(tasks, action) {
        const taskIndex = tasks.findIndex((task) => task.taskId === action.payload.taskId);
        tasks[taskIndex] = { ...tasks[taskIndex], ...action.payload };
      },
    },

    updateTaskName: {
      prepare(taskId, taskName) {
        return {
          payload: {
            taskId,
            taskName,
          },
        };
      },

      reducer(tasks, action) {
        const taskIndex = tasks.findIndex((task) => task.taskId === action.payload.taskId);
        tasks[taskIndex].taskName = action.payload.taskName;
      },
    },

    updateTaskDescription: {
      prepare(taskId, taskDescription) {
        return {
          payload: {
            taskId,
            taskDescription,
          },
        };
      },

      reducer(tasks, action) {
        const taskIndex = tasks.findIndex((task) => task.taskId === action.payload.taskId);
        tasks[taskIndex].taskDescription = action.payload.taskDescription;
      },
    },

    updateTaskList: {
      prepare(taskId, listId) {
        return {
          payload: {
            taskId,
            listId,
          },
        };
      },

      reducer(tasks, action) {
        const taskIndex = tasks.findIndex((task) => task.taskId === action.payload.taskId);
        tasks[taskIndex].listId = action.payload.listId;
      },
    },

    updateTaskBoard: {
      prepare(taskId, boardId) {
        return {
          payload: {
            taskId,
            boardId,
          },
        };
      },

      reducer(tasks, action) {
        const taskIndex = tasks.findIndex((task) => task.taskId === action.payload.taskId);
        tasks[taskIndex].boardId = action.payload.boardId;
      },
    },
  },
});

export const tasksSelector = (state) => state.tasks;
export const {
  createTask,
  deleteTask,
  updatedTask,
  updateTaskName,
  updateTaskDescription,
  updateTaskList,
  updateTaskBoard,
} = tasksSlice.actions;

export default tasksSlice.reducer;
