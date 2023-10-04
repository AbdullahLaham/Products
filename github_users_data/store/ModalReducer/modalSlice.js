import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = { 
    isOpen: false,
 }


 const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      onOpen: (state) => {
        state.isOpen = true
      },
      onClose: (state) => {
        state.isOpen = false
      },
      
    },
    // extraReducers: (builder ) => {
    //    builder
    //   },
  });
  
  export const { onOpen, onClose } = modalSlice.actions;
  
  export default modalSlice.reducer;
  
  