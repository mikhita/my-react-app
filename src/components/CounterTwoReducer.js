import React, {useReducer} from 'react'

const InitialState = {
    firstCount:0,
    secondCounter:10
}
const reducer = (state , action) => {
    switch(action.type){
        case "Increment":
            return {...state , firstCount:state.firstCount+ action.value}
        case "Decrement":
            return {...state , firstCount:state.firstCount- action.value}
        case "Increment2":
            return {...state , secondCounter:state.secondCounter+ action.value}
        case "Decrement2":
            return {...state , secondCounter:state.secondCounter- action.value}
        case "Reset":
            return {...state , firstCount:InitialState.firstCount}
        default:
            return state
    }
}
function CounterTwoReducer() {
   const [count, dispatch] = useReducer(reducer , InitialState);
  return (
    <div>
        <h1>first Counter{count.firstCount}</h1>
        <h1>Second Counter{count.secondCounter}</h1>
        <button onClick={()=>dispatch({type:"Increment", value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement", value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Increment", value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:"Decrement", value:5})}>Decrement 5</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        <button onClick={()=>dispatch({type:"Increment2", value:1})}>IncrementSecond</button>
        <button onClick={()=>dispatch({type:"Decrement2", value:1})}>DecrementSecond</button>

    </div>
  )
}

export default CounterTwoReducer