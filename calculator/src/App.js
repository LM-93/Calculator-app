import React from "react";
import "./index.css"


function App() {
  const [display, setDisplay] = React.useState("0")
  const [prevInput, setPrevInput] = React.useState("")
  const [curInput, setCurInput] = React.useState("0")
  const [answer, setAnswer] = React.useState(false)
  const [operator, setOperator] = React.useState("")

  const handleNumber = (event) => {
    if (curInput.includes === (".") && event.target.innerHTML === ".") return
    
    if (answer) {
      setPrevInput("")
    }

    curInput ?
      setCurInput(prevState => prevState + event.target.innerHTML) :
      setCurInput((event.target.innerHTML));

  }


  React.useEffect(() => {
    setDisplay(curInput);
  }, [curInput]);


  React.useEffect(() => {
    setDisplay("0");
  }, []);

  const clearAll = () => {
    setDisplay("0")
    setCurInput("")
    setPrevInput("")
  }
  
  const operators = (event) => {
    setAnswer(false)
    setOperator(event.target.innerText);
    if (curInput === "") return;
  
    if (prevInput !== "") {
      equals();
    } else {
      setPrevInput(curInput);
      setCurInput("");
    }
  }
  
  const equals = (event) => {
      if (event?.target.innerText === "=") {
        setAnswer(true);
      }
      let count;
      switch (operator) {
        case "+":
          count = String(parseFloat(prevInput) + parseFloat(curInput));
          break;
        
        case "-":
          count = String(parseFloat(prevInput) - parseFloat(curInput));
          break;
        
        case "&divide;":
          count = String(parseFloat(prevInput) / parseFloat(curInput));
          break;
        
        case "&larr;":
          count = String(parseFloat(prevInput) * parseFloat(curInput));
          break;
        default:
          return;
      }
      setDisplay(count);
      setPrevInput("");
      setCurInput("");
  };    


    return (

    <div>
      <div className="calc-container">
        <div className="screen">{display}</div>

        <button class="two-columns" onClick={clearAll}>AC</button>
        <button onClick={operators}>&larr;</button>
        <button onClick={operators}>&divide;</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>7</button>
        <button onClick={operators}>&times;</button>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={operators}>-</button>
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={operators}>+</button>
        <button onClick={operators}>.</button>
        <button onClick={handleNumber}>0</button>
        <button class="two-columns">=</button>
      </div>  
      </div> 
    )
}
export default App;