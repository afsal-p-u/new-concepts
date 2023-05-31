import React from 'react'
import { useDispatch } from 'react-redux'

import { authActions } from '../redux/AuthRedux'

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(authActions.login())
    }


  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <button
            className='px-[20px] py-[5px] font-semibold text-[15px] text-white bg-blue-400 rounded-md'
            onClick={handleLogin}
        >
            Login
        </button>
    </div>
  )
}

export default Login