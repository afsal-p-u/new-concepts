import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './CartRedux'
import authSlice from './AuthRedux'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store