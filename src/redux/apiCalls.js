import axios from 'axios'

import { authActions } from './AuthRedux'
import { notificationActions } from './NotificationRedux'

export const login = async (dispatch, user) => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, user).then((res) => {
        dispatch(authActions.login(res.data))
    }).catch((err) => {
        dispatch(notificationActions.notification({ type: "error", message: "Invalid username or password" }))
    })
}