import React from "react";

const Hello = (props)=>{
    return React.createElement("div",
    {id:"hello", className:"hello"},
     React.createElement("h1",null, `Hello ${props.name} a.k.a ${props.heroName}`))
}

export default Hello