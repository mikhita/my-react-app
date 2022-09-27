import React from 'react'
import "./StylesSheet.css"

function StylesSheet(props) {
    let className = props.primary   ? "primary":"";
  return (
    <h1 className={`${className} font-xl` }>StylesSheet</h1>
  )
}

export default StylesSheet