import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./ToDoListReducer/todoSlice";

import modalReducer from "./ModalReducer/modalSlice";

export const store = configureStore({
    reducer: {
        todo: todoListReducer,
        modal: modalReducer,
    }
})
