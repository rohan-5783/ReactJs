import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);

  let addNumber = () => {
    setCounter(counter + 1);
  };

  let removeNumber = () => {
    setCounter(counter - 1);
  };


  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addNumber}> + </button>
      <button onClick={removeNumber}> - </button>
    </>
  );
}

export default App;
