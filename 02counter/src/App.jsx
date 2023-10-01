import { useState } from 'react';
import './App.css'

function App() {

  let [counter, Rishav] = useState (15)

  // let counter =  5;
  
  // Functions 
  const addValue =()=>{
    if(counter<20){
      counter = counter + 1;
      Rishav(counter)
    }
    else{
      counter = counter + 1;
      console.log("done");
    }
    // counter = counter+1;
    // console.log("addValue",counter);
    // counter = counter +1;
    
    // Rishav(counter);
  };

  const removeValue = ()=>{
    if(counter > 0){
      let updatecounter = counter -1;
      Rishav(updatecounter);
    }else{
     console.log("Stop");
  };
}

  return (
    <>
    <h1>Chai are code</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value {counter} </button>
    <br />
    <button
    onClick={removeValue}
    >remove Value {counter}</button>
    <p>paragraph:=  {counter}</p>
    </>
  )
}


export default App
