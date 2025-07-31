import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const sayWelcome = (message) => {
    alert(`Welcome Message: ${message}`);
  };

  const handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic Event: ", e);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>

      <hr />

      <button onClick={handleClick}>Click Me (Synthetic Event)</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
