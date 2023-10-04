import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';


const initialState = { 
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')): [],
    currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): {}, 
 }


 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.currentUser = action.payload;
            localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        },
        signUp(state, action) {
            state.users = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(state.users));

        },
        logout(state, action) {
            localStorage.clear();
        },
    },
 })


 export const { login, signUp, logout } = authSlice.actions;

 export default authSlice.reducer ;