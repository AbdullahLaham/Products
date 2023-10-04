import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authSlice";
import dataReducer from "./userDataReducer/dataSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
    }
})
