import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "decrement7":
      return state - 7;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function MultipleReducers() {
  //the state is count dispatch is action
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h3>count {count}</h3>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("decrement7")}>Decrement7</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <h3>count {countTwo}</h3>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("decrement7")}>Decrement7</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default MultipleReducers;
