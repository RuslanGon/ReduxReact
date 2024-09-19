import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
 isSignedIn: false,
 formData: null,
 token: null,
 isLoadinf: false,
 isError: false
};

const authSlice = createSlice({
  name: "auth",  
  initialState: INITIAL_STATE,  

});



export const authReducer = authSlice.reducer;



