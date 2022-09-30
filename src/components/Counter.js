import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const handleClick = ()=>(
        setCount(count+1)
    )
    const handleDecrement = ()=>(
        setCount(count-1)
    )
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Incrementor</button>
        <button onClick={handleDecrement}>Decrementor</button>
    </div>
  )
}

export default Counter

