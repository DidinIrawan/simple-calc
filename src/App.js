import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleCalc from "./components/SimpleCalc";

function App() {
  const initialNumberState={
    numberOne:0,
    numberTwo:0
  }
  const [number,setNumber]=useState(initialNumberState)
  const [result,setResult]=useState(0)

  const addSubmit =()=>{
    setResult(Number(number.numberOne)+Number(number.numberTwo))
  }
  const subSubmit=()=>{
    setResult(Number(number.numberOne)-Number(number.numberTwo))
  }
  const handleChange =(e)=>{
    const {name, value}= e.target;
    setNumber({...number,[name]:value})
  }

  return (
    <div className="App">
      <SimpleCalc
        numberOne={number.numberOne}
        numberTwo={number.numberTwo}
        handleChange={handleChange}
        addSubmit={addSubmit}
        subSubmit={subSubmit}
        result={result}
      />
    </div>
  );
}

export default App;
