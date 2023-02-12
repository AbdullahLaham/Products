import axios from "axios";

const API = axios.create({ baseURL: 'https://applabb.account-collection.com/malltoallmanager/api/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
});



export const fetchChatUsers = async () => {
    const res = await API.get(`/store-view-chat`);
    return res;
}

export const fetchChatMessages = async (chatId) => {
    const res = await API.get(`/store-view-chat/${chatId}`);
    return res;
}

