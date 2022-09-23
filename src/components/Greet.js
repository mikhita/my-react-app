import React from "react"

const Greets = (props) => {
    const {name,heroName,children} = props
    return (  
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    );
}
 


export default Greets