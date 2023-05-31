import React from 'react'
import { useSelector } from 'react-redux'

import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  const logged = useSelector((state) => state.auth.logged)

  return (
    <>
      {!logged && <Login />}
      {logged && <Home />}
    </>
  )
}

export default App