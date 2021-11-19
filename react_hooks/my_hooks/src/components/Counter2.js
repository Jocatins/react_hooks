import React from "react";
import useCounterHook from "./hooks/useCounterHook";

function Counter2() {
  const [count, increment, decrement, reset] = useCounterHook(10, 20);

  return (
    <div>
      <h2>Count = {count} </h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter2;
