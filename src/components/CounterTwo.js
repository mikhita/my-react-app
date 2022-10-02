import React, { useState, useEffect } from 'react'

function CounterTwo() {
    const [ count  ,  setCount ] = useState(0);

    useEffect(()=>{
      document.title=`Clicked ${count} `
    })
  return (
    <div>
        <button onClick={()=>(setCount(count+1))}>Increment:{count}</button>
    </div>
  )
}

export default CounterTwo