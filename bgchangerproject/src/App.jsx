import React from 'react'

function App()  {
  const[color,setcolor]=React.useState("olive")
  return (
  <div className="w full h-screen duration-200" style={{backgroundColor:color}}  >
  <div className="fixed flex flex wrap justify-center bottom-12 inset-x-0 px-2">

  
           <div className=" flex flex wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-4 py-3 m-2">

        <button  onClick={() => setcolor("red")} className="outline-none  hover:scale-110  font-bold text-white rounded-3xl px-4 "style={{backgroundColor:"red"}}>red</button>
         <button  onClick={() => setcolor("blue")} className="outline-none hover:scale-110 font-bold text-white rounded-3xl px-4 py-3"style={{backgroundColor:"blue"}}>Blue</button>
        <button  onClick={() => setcolor("green")} className="outline-none hover:scale-110 font-bold text-white rounded-3xl px-4 py-3"style={{backgroundColor:"green"}}>green</button>
         <button  onClick={() => setcolor("orange")} className="outline-none hover:scale-110 font-bold text-white rounded-3xl px-4 py-3"style={{backgroundColor:"orange"}}>orange</button>
         <button  onClick={() => setcolor("purple")} className="outline-none hover:scale-110 font-bold text-white rounded-3xl px-4 py-3"style={{backgroundColor:"purple"}}>purple</button>
         <button  onClick={() => setcolor("lavender")} className="outline-none hover:scale-110 font-bold text-black rounded-3xl px-4 py-3"style={{backgroundColor:"lavender"}}>lavender</button>
         <button  onClick={() => setcolor("pink")} className="outline-none hover:scale-110 font-bold text-black rounded-3xl px-4 py-3"style={{backgroundColor:"pink"}}>pink</button>
         <button  onClick={() => setcolor("black")} className="outline-none hover:scale-110 font-bold text-white rounded-3xl px-4 py-3"style={{backgroundColor:"black"}}>black</button>
         <button  onClick={() => setcolor("gray")} className="outline-none hover:scale-110 font-bold text-black rounded-3xl px-4 py-3"style={{backgroundColor:"gray"}}>gray</button>
         <button  onClick={() => setcolor("olive")} className="outline-none hover:scale-110 font-bold text-black rounded-3xl px-4 py-3"style={{backgroundColor:"olive"}}>olive</button>
         <button  onClick={() => setcolor("white")} className="outline-none hover:scale-110 font-bold text-black rounded-3xl px-4 py-3"style={{backgroundColor:"white"}}>white</button>
  </div>
  </div>
  
</div>

   
    
  )
}

export default App
