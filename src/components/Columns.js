import React from 'react'

function Columns() {
    const items = [ {
                id:1,
                name:"nika",
                age:30,
                skill:"Yvelaferchik"
            },
            {
                id:2,
                name:"Giorgi",
                age:19,
                skill:"react"
            },
            {
                id:3,
                name:"Beqa",
                age:22,
                skill:"AngulAr"
            },
            {
                id:4,
                name:"Badu",
                age:25,
                skill:"js"
            }
        ]
  return (
    <React.Fragment>
    {
        items.map((item)=>(
            <React.Fragment key={item.id}>
                <h1>Title</h1>
                <p>{item.name}</p>
            </React.Fragment>

        ))
    }
        <td>name</td>
        <td>Nika</td>
    </React.Fragment>
  )
}

export default Columns