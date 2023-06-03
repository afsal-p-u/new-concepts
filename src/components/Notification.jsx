import React from 'react'

const Notification = ({ message, type }) => {
  return (
    <div className='absolute right-[40px] bottom-[40px] bg-[#eee] flex items-center px-[60px] py-[10px] rounded-md'>
        <h3
            className={`${type === 'error' ? 'text-red-500' : 'text-green-500'} font-semibold`}
        >
            {message}
        </h3>
    </div>
  )
}

export default Notification