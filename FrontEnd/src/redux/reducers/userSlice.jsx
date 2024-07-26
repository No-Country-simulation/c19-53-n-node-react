import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:[],
        users:[],
        userProfile:[],
        auth: false,
    },
    reducers:{
        userLogin: (state, action) => {
            state.user = action.payload;
            state.auth = true
        },
        getUsers: (state, action) => {
            state.users = action.payload
        },
        userLogout: (state) => {
            state.user = [];
            state.auth = false
        },
        clearUsers: (state) => {
            state.users = [];
        },
        updateFromCookie: (state, action) => {
            state.user = action.payload;
            state.auth = true;
        },
    }
})

export const {userLogin, getUsers, userLogout, clearUsers, updateFromCookie} = userSlice.actions;

export default userSlice.reducer;