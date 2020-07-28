import React, {useState} from 'react';
import ResultComponent from "./ResultComponent";
import KeyPadComponent from "./KeyPadComponent";
import "./style.css"
const LogicCalc = () => {
    const [result, setResult] = useState("")
    const onClick = button => {

        if(button === "="){
            calculate()
        }

        else if(button === "C"){
            reset()
        }
        else if(button === "CE"){
            backspace()
        }

        else {
            setResult(result + button)
        }
    };


    const calculate = () => {
        let checkResult = ''

        if(result.includes('--')){
            checkResult = result.replace('--','+')
        }

        else {
            checkResult = result
        }

        try {
            let res = eval(checkResult) || ""  + ""
            setResult(res)
        } catch (e) {
            setResult("error")
            console.log(e)
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        let del = result.slice(0, -1)
        setResult(del)
    };
    return (
        <div className="calculator-body">

            <ResultComponent result={result}/>

            <KeyPadComponent onClick={onClick}/>
        </div>
    );
};

export default LogicCalc;