import React from 'react'
const heading = {
    fontSize:"72px",
    color:"blue"
}
function inline() {
  return (
  <div>
    <h1 className='error'>error</h1>
    <h1 className="success">sucess</h1>
    <h1 style={heading}>inline</h1>
    </div>
  )
}

export default inline