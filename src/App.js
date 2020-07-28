import React, {useState} from 'react';
import './App.css';
import LogicCalc from "./components/LogicCalc";

function App() {

  return (
    <div className="App">
      <h2 data-test="display">[RJS-A05-L01]Hooks Calculator</h2>
      <LogicCalc/>
    </div>

  );
}

export default App;
