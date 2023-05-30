import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: "INCREMENT"})
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 })
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
