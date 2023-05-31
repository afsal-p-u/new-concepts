import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false
    },
    reducers: {
        login: (state) => {
            state.logged = true
        },
        logout: (state) => {
            state.logged = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice