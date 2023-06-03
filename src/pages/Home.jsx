import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { cartActions } from '../redux/CartRedux'
import { authActions } from '../redux/AuthRedux'
import { data } from '../constants/data'
import Cart from './Cart'

const Home = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const addToCart = (item) => {
        dispatch(cartActions.addToCart({
            id: item.id,
            name: item.name,
            price:item.price,
        }))
    }

    const handleLogout = () => {
        dispatch(authActions.logout())
    }

    const handleOpen = () => {
        dispatch(cartActions.openCart())
    }

  return (
    <>
        <div className='w-full'>
            <div className="w-full h-[10vh] px-[100px] flex justify-between items-center bg-[#eee]">
                <h2 className='font-bold text-[18px] uppercase'>Demon Slayer Redux Shop</h2>
                <div className="flex items-center justify-center relative">
                    <small
                        className='bg-red-500 absolute -right-1 -top-1 px-[7px] text-[14px] text-white rounded-full'
                    >
                        {cart.totalQuantity}
                    </small>
                    <button 
                        className='px-[20px] py-[6px] rounded-full bg-blue-400 font-semibold text-white'
                        onClick={handleOpen}
                    >
                        Cart
                    </button>
                </div>
            </div>

            <div className="mt-[20px] px-[100px]">
                <button
                    className='px-[20px] py-[5px] rounded-md bg-red-500 font-semibold text-white'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div className="px-[100px] mt-[20px] min-h-[40vh] flex flex-wrap gap-[20px]">
                {data?.map((item) => (
                    <div 
                        className="w-[200px] h-[200px] bg-[#eee] flex flex-col p-[10px] shadow-md" 
                        key={item.id}
                    >
                        <div className="w-full bg-blue-500 h-[80%]">
                            <img src={item.image} alt=""  className='w-full h-full object-cover'/>
                        </div>
                        <div className="w-full flex items-center justify-center h-[20%] bg-blue-400">
                            <button
                                className='font-semibold text-white'
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Cart />
    </>
  )
}

export default Home