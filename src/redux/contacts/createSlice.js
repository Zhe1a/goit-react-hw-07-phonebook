import {createSlice} from '@reduxjs/toolkit'


const tasksSlice = createSlice({

    name: "tasks",

    initialState: '',

    reducers: {
      addTask(state, action) {},
      deleteTask(state, action) {},
      toggleCompleted(state, action) {},
    },
  });
  
  const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

  const tasksReducer = tasksSlice.reducer;