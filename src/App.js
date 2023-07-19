import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dec, setDec] = useState(10);

  function countdown() {
    for (let i = 10, j = 0; i >= 0 && j < 11; i--, j++) {
      setTimeout(() => {
        // console.log(i);
        setDec(i);
      }, 1000 * j);
    }
  }

  function time() {
    for (let i = 1; i < 11; i++) {
      setTimeout(() => {
        // console.log(i);
        setCount(i);
      }, 1000 * i);
    }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Timer</h1>
      <h1>{count}</h1>
      <button onClick={time}>click</button>
      <h1>countdown</h1>
      <h1>{dec}</h1>
      <button onClick={countdown}>click</button>
    </div>
  );
}
