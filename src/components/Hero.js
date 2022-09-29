import React from 'react'
import {ErrorBoundary} from "react-error-boundary"


function Hero({heroName}) {
    if(heroName==="Joker"){
        throw Error("not correct!")
    }
  return (
    <ErrorBoundary fallback={<h1>something gone wrong</h1>}>
        <div>
            <div>{heroName}</div>
        </div>
    </ErrorBoundary>
  )
}

export default  Hero;