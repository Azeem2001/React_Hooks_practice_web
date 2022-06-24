import React, {useState, useEffect } from 'react'

const UseEffect1 = () => {
    const [count, setCoutn] = useState(0);
    useEffect(() => {
        if(count >= 1){
    document.title = `Chats(${count})`  
        }else{
            document.title = `Chats`  

        } 
},[count])
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn' onClick={()=> setCoutn(count + 1 )}>Click😎</button>
        </div>
    )
}

export default UseEffect1