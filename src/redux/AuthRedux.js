import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: null
    },
    reducers: {
        login: (state, action) => {
            state.logged = action.payload
        },
        logout: (state) => {
            state.logged = null
        }
    }
})

export const authActions = authSlice.actions

export default authSlice