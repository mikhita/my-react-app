import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
            this.state={
                count:0,
            }
    }
    incrementCount(){
        this.setState(prevState =>({
            count:prevState.count+1,
        }))
    }
    incrementCountByFive(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    
       
    render(){
        return(
            <div>
                <div>counter - {this.state.count}</div>
                <button onClick={()=>this.incrementCountByFive()}>increment</button>
                <button>decrement</button>
            </div>
        )
    }
    
}

export default Counter