import React, { useEffect, useState } from 'react'
// import "./UseStateArray.css"

const UseEffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width)
    const  actualWidth = ()=>{
        console.log("add event")
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
        console.log("remove event")
      window.addEventListener("resize", actualWidth)    
    });

    return (
        <div>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffect2