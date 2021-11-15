import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 2);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);

    //replicating componentWillUnmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
