import React, {useReducer} from 'react'

const InitialState = 0;
const reducer = (state , action) => {
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return InitialState
        default:
            return state
    }
}
const reducer2 = (state , action) => {
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        case "Reset":
            return InitialState
        default:
            return state
    }
}
function CounterThreeR() {
   const [count, dispatch] = useReducer(reducer , InitialState);
   const [countTwo, dispatchTwo] = useReducer(reducer2 , InitialState)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <button onClick={()=>dispatch("Reset")}>Reset</button>
        <h1>{countTwo}</h1>
        <button onClick={()=>dispatchTwo("Increment")}>Increment</button>
        <button onClick={()=>dispatchTwo("Decrement")}>Decrement</button>
        <button onClick={()=>dispatchTwo("Reset")}>Reset</button>
    </div>
  )
}

export default CounterThreeR