import React from "react";
import useCounterHook from "./hooks/useCounterHook";

function Counter1() {
  const [count, increment, decrement, reset] = useCounterHook();
  return (
    <div>
      <h2>Count = {count} </h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter1;
