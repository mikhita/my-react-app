import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome Visitors",
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank you for Subscribes",
    })
    }
    render(){
        return(
            <div>
                <h1 >{this.state.message}</h1>
                {this.props.children}
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message