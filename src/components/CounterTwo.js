import React, { useState } from 'react'

function CounterTwo() {
    const inisialCount = 0;
    const [ count  ,  setCount ] = useState(inisialCount);
    const handleClick = ()=>{
        for(let i=0; i<5; i++){
      setCount(prevCount=>prevCount+1)
    }}
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>(setCount(inisialCount))}>Reset</button>
        <button onClick={()=>(setCount(count+1))}>Increment</button>
        <button onClick={()=>(setCount(count-1))}>Decrement</button>
        <button onClick={handleClick}>increment by 5</button>
    </div>
  )
}

export default CounterTwo