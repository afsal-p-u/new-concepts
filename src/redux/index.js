import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './CartRedux'
import authSlice from './AuthRedux'
import notificationSlice from './NotificationRedux'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer
    }
})

export default store