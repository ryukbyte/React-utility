import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section className="card">
      <h2>Counter</h2>

      <p className="number">{count}</p>

      {count === 0 && (
        <p className="message">Minimum limit reached</p>
      )}

      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
}

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <section className="card">
      <h2>Random Number Generator</h2>

      {number === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <p className="number">{number}</p>
      )}

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </section>
  );
}

function App() {
  return (
    <main className="dashboard">
      <h1>React Utility Dashboard</h1>

      <div className="sections">
        <Counter />
        <RandomNumberGenerator />
      </div>
    </main>
  );
}

export default App;