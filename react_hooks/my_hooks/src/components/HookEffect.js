import React, { useEffect, useState } from "react";

function HookEffect() {
  const [click, setClick] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect Updating doc title");
    document.title = `You clicked ${click} times`;
  }, [click]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setClick(click + 1)}>Click {click} times</button>
    </div>
  );
}

export default HookEffect;
