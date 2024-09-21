import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: "https://connections-api.goit.global/",
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const clearToken = () => {
    instance.defaults.headers.common.Authorization = ''
}

export const apiRegistor = createAsyncThunk(
    'auth/register',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post('/users/signup',formData)
            console.log(data);
            setToken(data.token)
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)


export const apiLogin = createAsyncThunk(
    'auth/login',
    async (formData, thunkApi) => {
        try {
            const { data } = await instance.post('/users/login',formData)
            console.log(data);
            setToken(data.token)
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)


export const apiRefresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        try {
            const state = thunkApi.getState()
            const token = state.auth.token
            setToken(token)
            const { data } = await instance.get('/users/current')
            console.log(data);
            
            return data
        } catch (error) {
           return thunkApi.rejectWithValue(error)
        }
    }
)

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearToken();
      return
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);



