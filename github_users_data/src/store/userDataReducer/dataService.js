import { API } from "../MainApi"
import dataSlice from "./dataSlice"

export const getUserData = async (username) => {
    try {
        const res = await API.get(`users/${username}`)
        localStorage.setItem('userData', JSON.stringify(res.data))
        console.log(res, 'ttttttt');
        return res.data;
    } catch (error) {

    }
}

const dataService = {getUserData};
export default dataService;