import React, {useState, useEffect} from  'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logoutCordinates = e => {
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener("mousemove", logoutCordinates) 
}, [])
    
  return (
    <div>
        <h2>Hooks X-{x} and Y-{y}</h2>
    </div>
  )
}

export default HookMouse