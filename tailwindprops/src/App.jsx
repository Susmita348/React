import { useState } from 'react'
import './App.css'
import Card1 from './component/card'

function App() {
  const [count, setCount] = useState(0)
  // let myobj = {
  //   name: "aayusha poudel",
  //   age: 22,
  //   channel: "Tech"
  // }


  return (
    <>
    <h1 className="bg-green-500 text-white p-4">
      Hey aayusha poudel,what are you doing? 
    </h1>
              <Card1  username="aayusha paudel" btntext=" visit profile " />
              <Card1  username="susmita adhikari"  />
    </>
  )
}

export default App
