import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log(12)
    }

  render() {
    return (
        <button onClick={this.clickHandler}>click me</button>
    )
  }
}

export default ClassClick