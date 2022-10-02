import React, { useState, useEffect } from 'react'

function CounterTwo() {
    const [ count  ,  setCount ] = useState(0);
    const [name, setName] = useState("")

    useEffect(()=>{
      console.log("eseeffect")
    }, [count])
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>(setCount(count+1))}>Increment:{count}</button>
    </div>
  )
}

export default CounterTwo