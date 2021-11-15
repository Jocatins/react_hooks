import React, { useState, useEffect } from "react";

//mimicking componentDidMount using UseEffect Hook
function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Unmounting component");
      //UseEffect mimicking componentWillUnmount
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X {x} - Y{y}
    </div>
  );
}

export default HookMouse;
