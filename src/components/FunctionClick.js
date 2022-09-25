import React from 'react'

export default function FunctionClick() {
   function clickHandler(){
        console.log(11)
    }
  return (
    <div>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}
