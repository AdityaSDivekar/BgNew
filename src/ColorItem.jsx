import React, { useState } from 'react'

const ColorItem = () => {
  const[color,setColor]=useState("yellow");
  return (
    <div className='conatiner' style={{width:"100vw",height:"100vh",backgroundColor:color}}>
        <div className="changer" style={{height:"70px", width:"500px",position:"absolute",bottom:"20px",left:"500px",backgroundColor:"beige",borderRadius:"50px"}}>
          <button onClick={()=>setColor("blue")}>Blue</button>
          <button onClick={()=>setColor("red")}>Red</button>
          <button onClick={()=>setColor("yellow")}>Yellow</button>
          <button onClick={()=>setColor("orange")}>Orange</button>
          <button onClick={()=>setColor("black")}>Black</button>
          <button onClick={()=>setColor("white")}>White</button>
        </div>

    </div>
  )
}

export default ColorItem