import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItem = state.itemList.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price 
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalQuantity++
            }
        },
        removeItemCart: (state, action) => {
            const existingItem = state.itemList.find((item) => item.id === action.payload)
            if (existingItem.quantity > 1) {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            } else {
                state.itemList = state.itemList.filter((item) => item.id !== action.payload)
                state.totalQuantity--
            }
        },
        openCart: (state) => {
            state.showCart = true
        },
        closeCart: (state) => {
            state.showCart = false
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice