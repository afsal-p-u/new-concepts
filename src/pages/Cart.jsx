import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import { cartActions } from '../redux/CartRedux'
import { data } from '../constants/data'

const Cart = () => {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.cart.showCart) 
  const items = useSelector((state) => state.cart.itemList)

  const handleClose = () => {
    dispatch(cartActions.closeCart())
  }

  const handleRemove = (id) => {
    dispatch(cartActions.removeItemCart(id))
  }

  const handleIncrease = (item) => {
    dispatch(cartActions.addToCart({
      id: item.id,
      name: item.name,
      price:item.price,
    }))
  }

  const handleDecrese = (id) => {
    dispatch(cartActions.removeItemCart(id))
  }

  return (
    <>
      {showCart && (
        <div className='fixed top-0 right-0 w-[500px] h-[100vh] bg-[#eee] px-[30px] py-[20px]'>
          <div className="w-full h-20px flex justify-end">
            <div 
              className="p-[10px] bg-black rounded-full flex items-center justify-center cursor-pointer"
              onClick={handleClose}
            >
              <AiOutlineClose 
                color='white'
                className='font-semibold'
              />
            </div>
          </div>

          {items?.map((item, i) => (
            <div className="w-full min-h-[50px] flex justify-center mt-[10px]" key={i}>
              <div className="flex w-full h-[70px] px-[10px] bg-[white] items-center rounded-md">
                <div className="w-[50px] h-[50px]">
                  <img 
                    src={data[i].image} 
                    className='w-full h-full object-cover'
                  />
                </div>

                <p
                  className='ml-4 font-medium'
                >
                  {item.name}
                </p>

                <div className="flex items-center ml-4">
                  <button
                    className='px-[10px] rounded-md font-semibold text-white bg-red-500 mr-2'
                    onClick={() => handleDecrese(item.id)}
                  >
                    -
                  </button>
                  <p
                    className='font-bold'
                  >
                    {item.quantity}
                  </p>
                  <button
                    className='px-[10px] rounded-md font-semibold text-white bg-blue-500 ml-2'
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                  <p
                    className='ml-5 font-bold'
                  >
                    {item.totalPrice}
                  </p>

                  <div className="ml-[50px]">
                    <button
                      className='px-[20px] py-[5px] rounded-md bg-red-500 text-white font-medium
                      text-[12px]'
                      onClick={() => handleRemove(item.id)}
                    >
                      remove
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Cart