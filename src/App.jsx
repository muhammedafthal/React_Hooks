import react from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [car, setCar] = useState({
    brand: "Ferrari",
    color: "Red",
    model: "roma",
    year: "2023"
  })

  const changeColor = () => {
    setCar((car) => {
      return {
        ...car, color: "Blue"
      }
    })
  }

  const [count, setCount] = useState(0);
  
  const increaseCount = () => {
    setCount((prev) => {
      return prev + 1
    })
  }

  return ( 
    <>
    <h1>My {car.brand} </h1>
    <h2>it is a {car.color} {car.model} from {car.year}</h2>
    <button onClick={changeColor}>Blue</button>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase</button>
    </>
   )
}

export default App
