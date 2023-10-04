
import axios from "axios";
import {API} from '../MainApi'



const getTodoLists = async () => {
    const res = await API.get(`/todo`);
    console.log(res);
    
    return res.data;
}

const updateTodoList = async (id) => {
    const res = await API.put(`/todo/${id}`);
    console.log(res);
    if (res.data) {
        localStorage.setItem('auth',  JSON.stringify(res.data))
    }

    return res.data;
}
const deleteTodoList = async (id) => {
    const res = await API.delete(`/todo/${id}`);
    console.log(res);
    if (res.data) {
        localStorage.removeItem('auth');
    }

    return res.data;
}
const createTodoList = async (data) => {
    const res = await API.post(`/todo`, data);
    console.log(res);

    if (res.data) {
        return res.data;
    }

    return res.data;
}




const todoService = {
    getTodoLists, updateTodoList, deleteTodoList, createTodoList
}


export default todoService;

