import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoService from './todoService';
import toast from 'react-hot-toast';

const initialState = { 
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')): [],
    updatedTodoList: {},
    deletedTodoList: {},
    newTodoList: {},
 }



 export const getAllTasks = createAsyncThunk('task/all-tasks', async (thunkAPI) => {

  try {
      console.log('hello');

      return await todoService.getTodoLists();
      
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
  }

})

export const deleteTodoList = createAsyncThunk('task/delete-task', async (id, thunkAPI) => {

  try {
      console.log('hello');

      return await todoService.deleteTodoList(id);
      
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
  }

})

export const updateTodoList = createAsyncThunk('task/update-task', async (id, thunkAPI) => {

  try {
      console.log('hello');

      return await todoService.updateTodoList(id);
      
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
  }

})

export const createTodoList = createAsyncThunk('task/create-task', async (data, thunkAPI) => {

  try {
      console.log('hello');

      return await todoService.createTodoList(data);
      
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
  }

})



 const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addNewTask: (state, action) => {
        state.tasks = [...state?.tasks, action?.payload]
      },
      onDelete: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      },
      onFinished: (state, action) => {
        let currentTask = state.tasks.find((task) => task.id === action.payload);
        let index = state.tasks.findIndex((task) => task.id === action.payload);
        currentTask = {...currentTask, isDone: true};
        state.tasks[index] = currentTask;
      }
      

    },
    extraReducers: (builder ) => {
       builder

      .addCase(getAllTasks.pending,(state) => {state.isLoading = true }  )
      .addCase(getAllTasks.fulfilled,(state, action) => {
          state.isLoading = false ;
          state.isError = false;
          state.isSuccess = true;
          
          state.tasks = action?.payload;
      })

      .addCase(getAllTasks.rejected,(state, action) => {
          state.isLoading = false ;
          state.isError = true;
          state.isSuccess = false;
          state.tasks = null;
      })

      .addCase(updateTodoList.pending,(state) => {state.isLoading = true }  )
      .addCase(updateTodoList.fulfilled,(state, action) => {
          state.isLoading = false ;
          state.isError = false;
          state.isSuccess = true;
          state.updatedTodoList = action?.payload;
      })

      .addCase(updateTodoList.rejected,(state, action) => {
          state.isLoading = false ;
          state.isError = true;
          state.isSuccess = false;
          state.updatedTodoList = null;
      })

      .addCase(deleteTodoList.pending,(state) => {state.isLoading = true }  )
      .addCase(deleteTodoList.fulfilled,(state, action) => {
          state.isLoading = false ;
          state.isError = false;
          state.isSuccess = true;
          if (state?.isSuccess) toast.success("Task Deleted Successfully")
          state.deletedTodoList = action?.payload;
      })

      .addCase(deleteTodoList.rejected,(state, action) => {
          state.isLoading = false ;
          state.isError = true;
          state.isSuccess = false;
          if (state?.isError) toast.success("something went wrong")
          state.deletedTodoList = null;
      })

      .addCase(createTodoList.pending,(state) => {state.isLoading = true }  )
      
      .addCase(createTodoList.fulfilled,(state, action) => {
          state.isLoading = false ;
          state.isError = false;
          state.isSuccess = true;
          if (state?.isSuccess) toast.success("New task created Successfully")
          state.newTodoList = action?.payload;
      })

      .addCase(createTodoList.rejected,(state, action) => {
          state.isLoading = false ;
          state.isError = true;
          state.isSuccess = false;
          if (state?.isError) toast.success("something went wrong")
          state.newTodoList = null;
      })
      },
  });
  
  
  export const { addNewTask, onDelete, onFinished } = todoSlice.actions;

  export default todoSlice.reducer;
  
  
  
// export const createTask = createAsyncThunk('todo/new-task', async (id, thunkAPI) => {
//     try {
//         console.log('hello')

//         return await authService.getAllUsers();
        
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error)
//     }

//  })
