import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)
  // let counter =5;
  const addVal = ()=>{
    // console.log("Value added",counter);
    // counter = counter+1;
    if(counter<20){
       setCounter(counter+1);
    }
   
  }
  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
