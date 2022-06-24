import React from 'react'
import "./UseStateArray.css"
const useStateObject = () => {
  const [myObject, setmyObject] = React.useState({
    myName: 'Azeem', myAge: 22, degree: "CS", rollNum: 18
  })
  const changeObject = () => {
    setmyObject({ ...myObject, myName: 'syed azeem' })
  }


  return (
    <div>
      <h1 className='h1style'>Name:{myObject.myName} & age:27 & Degree:CS</h1>
      <button className='btn' onClick={changeObject}>UpDate</button>
    </div>
  )
}

export default useStateObject
