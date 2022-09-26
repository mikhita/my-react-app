import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello"
      }
    this.clickHandler=this.clickHandler.bind(this)
    this.click1Handler=this.click1Handler.bind(this)

    }
    clickHandler(){
       this.setState({
            message:"goodbuy"
        })
    }
    click1Handler(){
        this.setState({
            message:"hello"
        })
    }
    
  render() {
    return (
        <div>
        <div>{this.state.message}</div>
      
      <button onClick={this.clickHandler}>click</button>
      <button onClick={this.click1Handler}>clickBack</button>


      </div>
    )
  }
}

export default EventBind