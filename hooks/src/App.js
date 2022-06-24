// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import UseStateArray from './Components/UseStateArray';
// import UseStateObject from './Components/useStateObject';
// import ShortCirEval from './Components/shortCirEval';
// import Form from './Components/form/form';
import UseEffect2 from './Components/form/useEffect/UseEffect2';
function App() {

  // const [myName, setMyName] = useState('thapa techncial Subs');

  // const changeName = () => {
  //   let val = myName;
  //   if (myName === 'thapa techncial Subs') {
  //     setMyName('vinod thapa')
  //   } else {
  //     setMyName('thapa techncial Subs')

  //   }
  // }

  // console.log(myName)
  return (
    <div className="App">
       {/* <UseStateArray /> */}
       {/* <UseStateObject/> */}
       <UseEffect2/>
      {/* <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>click me</button> */}
    </div>
  );
}

export default App;
