import { useState } from "react";
import "./App.css";
import Card from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  let obj = [
    "username Rishav",
    "work-Developer",
    "age-21" 
  ]

  return (
    <>
      <h1 className="heading bg-green-400 text-black p-4 rounded-xl mb-4">Hello</h1>

      <Card channel= "updateKnowledge" btnText = "Click Me"/>
      <Card channel="kaju" btnText = "Show Me"/>
     
     <Card ok={obj}/>
    </>
  );
}

export default App;
