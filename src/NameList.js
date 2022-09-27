import React from 'react'
// import Person from './Person';

function PersonList() {
    const names = ["nika", "gio", "beqa"]
    // const people = [
    //     {
    //         id:1,
    //         name:"nika",
    //         age:30,
    //         skill:"Yvelaferchik"
    //     },
    //     {
    //         id:2,
    //         name:"Giorgi",
    //         age:19,
    //         skill:"react"
    //     },
    //     {
    //         id:3,
    //         name:"Beqa",
    //         age:22,
    //         skill:"AngulAr"
    //     },
    //     {
    //         id:4,
    //         name:"Badu",
    //         age:25,
    //         skill:"js"
    //     }
    // ]
    const nameList = names.map((name, index)=><h2 key={index}> {name}</h2>);
  return (
        <div>{nameList}</div>
    )
}

export default PersonList