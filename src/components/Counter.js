import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCounter(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    decrementCount(){
        this.setState(prevState=>({
            count:prevState.count-1
        }))
    }
    decrementByFive(){
        this.decrementCount()
        this.decrementCount()
        this.decrementCount()
        this.decrementCount()
        this.decrementCount()
    }
    incrementByFive(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }
    
  render() {
    return (
        <div>
            <div>Counter - {this.state.count}</div>
            <button onClick={()=>{this.incrementByFive()}}>Increment</button>
            <button onClick={()=>{this.decrementByFive()}}>Decrement</button>
      </div>
    )
  }
}

export default Counter