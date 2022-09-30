import { useState } from "react"
import React  from 'react'

function CounterThree() {
    const [name, setName] = useState({firstName:"", lastName:""})
  return (
    <div>
        <form action="">
            <input type="text" value={name.firstName} onChange={e=> setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e=> setName({...name,lastName:e.target.value})}/>
            <h1>{name.firstName}</h1>
            <h2>{name.lastName}</h2>
        </form>
    </div>
  )
}

export default CounterThree