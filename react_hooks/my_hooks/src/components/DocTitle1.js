import React, { useState } from "react";
import useCustomHook from "./hooks/useCustomHook";

function DocTitle1() {
  const [count, setCount] = useState(0);

  useCustomHook(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default DocTitle1;
