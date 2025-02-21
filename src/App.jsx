import react from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] =  useState("Red");

  const changeColor = () => {
      setColor("Blue")    
  }

  return ( 
    <>
    <h1>My Favourite Color Is {color}</h1>
    <button onClick={changeColor}>red</button>
    </>
   )
}

export default App
