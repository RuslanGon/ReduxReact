import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.goit.global/",
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}
// export const clearToken = () => {
//     instance.defaults.headers.common.Authorization = ''
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVjNmY0NWM0OTVlZDZlMjVmMzVhM2QiLCJpYXQiOjE3MjY5MDg0Mjd9.h7A5CNXEqNI6rltQmO-WxkvY7Dor_fHx3WQT3KYXqSQ

export const apiGetContacts = createAsyncThunk(
    'contacts/getAll',
    async (_, thunkApi) => { 
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVjNmY0NWM0OTVlZDZlMjVmMzVhM2QiLCJpYXQiOjE3MjY5MTM5OTJ9.hCp5-5ifIUIAZPiKjUnjaLy2TJyg90yNXpi4ukCAy8o';
        setToken(token);
        try {
            const { data } = await instance.get('/contacts')
            console.log(data);
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)


export const apiNewContacts = createAsyncThunk(
    'contacts/addContacts',
    async (formData, thunkApi) => { 
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVjNmY0NWM0OTVlZDZlMjVmMzVhM2QiLCJpYXQiOjE3MjY5MTM5OTJ9.hCp5-5ifIUIAZPiKjUnjaLy2TJyg90yNXpi4ukCAy8o';
        setToken(token);
        try {
            const { data } = await instance.post('/contacts', formData)
            console.log(data);
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)


export const apiDeleteContacts = createAsyncThunk(
    'contacts/delete',
    async (contactId, thunkApi) => { 
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVjNmY0NWM0OTVlZDZlMjVmMzVhM2QiLCJpYXQiOjE3MjY5MTM5OTJ9.hCp5-5ifIUIAZPiKjUnjaLy2TJyg90yNXpi4ukCAy8o';
        setToken(token);
        try {
            const { data } = await instance.delete(`/contacts/${contactId}`)
            console.log(data);
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)