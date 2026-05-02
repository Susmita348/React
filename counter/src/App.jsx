import {useState}from 'react'
import './App.css'

function App() {
 
const [counter,setcounter]= useState(10);
 const addValue =()=>{
  if (counter<20){  
  console.log("add value")
  //counter=counter+1;
  setcounter(counter+1);
 }}
 const removeValue =()=>{
  if (counter>0){
    console.log("remove value")
    setcounter(counter-1);
    //counter=counter-1;
  }
  else{
    alert("counter value is zero")
  }
 }
  return (
    <>
   <h1> chai aur react</h1>
   <h2>Counter value: {counter}</h2>
   <button onClick={addValue}>Add value:{counter}</button>
   <br/>
   <button onClick={removeValue}>Remove value:{counter}</button>  
    <p>footer:{counter}</p>
     </>
  )
}

export default App
