import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Notification from '../components/Notification'
// import { authActions } from '../redux/AuthRedux'
import { login } from '../redux/apiCalls'
import { notificationActions } from '../redux/NotificationRedux'

const Login = () => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)

    const handleLogin = () => {
        login(dispatch, { email: "afsal@gmail.com", password: "1234"})
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(notificationActions.notificationRemove())
        }, 10000)
    }, [notification])

  return (
    <>
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <button
                className='px-[20px] py-[5px] font-semibold text-[15px] text-white bg-blue-400 rounded-md'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>

        {notification && (  
            <Notification type={notification.type} message={notification.message} />
        )}
    </>
  )
}

export default Login