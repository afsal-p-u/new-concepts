import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        message: null,
        type: null
    },
    reducers: {
        notification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type
        }, 
        notificationRemove: (state) => {
            state.message = null
            state.type = null
        }
    }
})

export const notificationActions = notificationSlice.actions

export default notificationSlice