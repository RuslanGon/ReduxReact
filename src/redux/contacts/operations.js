import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.goit.global/",
})

// export const setToken = (token) => {
//     instance.defaults.headers.common.Authorization = `Bearer ${token}`
// }
// export const clearToken = () => {
//     instance.defaults.headers.common.Authorization = ''
// }

export const apiGetContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get('/contacts')
            console.log(data);
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)