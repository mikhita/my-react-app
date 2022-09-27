import React, {  useState} from 'react'
import ChildComponent from './ChildComponent'

 const ParentComponent = () => {
    const[parentName,setParentName]= useState("Parent")
    setParentName("changedParent")
    const greetParent=(childName)=>{
        alert(  `Hello ${parentName} from ${childName}`)
    }
  
    return (
      <div>
        <ChildComponent greetHandler={greetParent} childName="child"/>
      </div>
    )
  }


export default ParentComponent
