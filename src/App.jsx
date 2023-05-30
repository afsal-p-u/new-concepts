import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div 
      style={{
        display: "flex", 
        flexDirection: "column",
        alignItems: 'center', 
        justifyContent: 'center',
        width: "100%",
        height: "100vh"
      }}
    >
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
    </div>
  )
}

export default App
