import { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);

  const PrimeNum = (num) => {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        counter = counter + 1;
      }

    }
    if (counter == 2) {
      return true;
    } else {
      return false;
    }
  };
  
  return (
    <div className="App">
      <h1>Welcome To Counter 2.O</h1>
      <h2>
        Count : <strong> {counter} </strong>
      </h2>
      <div className="btnDiv">
        <button
          className="btn"
          disabled={counter == 0}
          onClick={() => setcounter(counter - 1)}
        > -1 
        </button>
        <button className="btn" onClick={() => setcounter(counter + 1)}>
          +1
        </button>
      </div>
      <button className="btn" onClick={() => setcounter(0)}>
        Reset Count
      </button>

      <h3>This number is : {counter % 2 == 0 ? "Even" : "Odd"}</h3>
      <h3>Prime number : {PrimeNum(counter) ? "true" : "false"}</h3>
    </div>
  );
}