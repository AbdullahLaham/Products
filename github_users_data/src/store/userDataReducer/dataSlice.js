import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import dataService from './dataService';

const initialState = { 
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): {},
 }



 export const getUserData = createAsyncThunk('github/user-data', async (username, thunkAPI ) => {

  try {
      console.log('username', username);
      return await dataService.getUserData(username);
  } catch (error) {
      return thunkAPI.rejectWithValue(error)
  }

})

 const todoSlice = createSlice({
    name: 'githubData',
    initialState,
    
    extraReducers: (builder ) => {
       builder

      .addCase(getUserData.pending,(state) => {state.isLoading = true }  )
      .addCase(getUserData.fulfilled,(state, action) => {
          state.isLoading = false ;
          state.isError = false;
          state.isSuccess = true;
          
          state.tasks = action?.payload;
      })

      .addCase(getUserData.rejected,(state, action) => {
          state.isLoading = false ;
          state.isError = true;
          state.isSuccess = false;
          state.tasks = null;
      })


      },
  });
  
  
  export const { addNewTask, onDelete, onFinished } = todoSlice.actions;

  export default todoSlice.reducer;
  
