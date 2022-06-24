import React, { useState } from 'react'
import "./UseStateArray.css"

const UseStateArray = () => {

    const bioData = [
        {
            id: 0,
            myName: "Azeem",
            age: 22
        }, {
            id: 1,
            myName: "Saboor",
            age: 19
        },
        {
            id: 2,
            myName: "Shareef",
            age: 26
        }

    ]
    const [myArray, setmyArray] = useState(bioData)

    const clearArray = () => {
       setmyArray([])
    }
      const removeElm = (id) =>{
        //  alert(id)

        const myNewArray = myArray.filter((curElem) =>{
           return curElem.id !== id;
        })
        setmyArray(myNewArray)
      }
      

    return (
        <>
            {/*  */}

            {
                myArray.map((curElm) => {
                    return( <h1 className='h1style' key={curElm.id}>Name:{curElm.myName} & Age:{curElm.age} 
                    <button className='btnInner' onClick={ () =>removeElm(curElm.id)}>remove</button>
                    </h1>
                    )
                })
            }
            <button className='btn' onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray