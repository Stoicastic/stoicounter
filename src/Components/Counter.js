import { useReducer, useState } from "react";

// Using the useReducer hook
let initialState = 0;
const reducer = (state, action) => {
  let useCount = action.counter;
  console.log(action);
  
  switch (action.type) {
    case "increment":
      return state + useCount;
    case "decrement":
      return state - useCount;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [useCount, setUseCount] = useState(1);

  function getCounter(e) {
    setUseCount(parseInt(e.target.value));
  }
  return (
    <>
      <div
            className="btn-toolbar mb-3"
            role="toolbar"
            aria-label="Toolbar with button groups">
            <div className="input-group">
            <div className="input-group-text" id="btnGroupAddon">
                Set Value:{useCount}
            </div>
                <input
                        onChange={(e) => {
                        getCounter(e);
                        }}
                        type="text"
                        className="form-control"
                        placeholder="set your value"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon">
                    </input>
            </div>
        </div>
        <div className="btn-group" role="group" aria-label="large button group">
            <button
                onClick={() => {
                    dispatch({ type: "decrement", counter: useCount });
                }}
                type="button"
                className="btn btn-danger"
                >
                DECREMENT
            </button>
            <button type="button" class="btn btn-dark">
                {count}
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "increment", counter: useCount });
                }}
                type="button"
                className="btn btn-success"
                >
                INCREMENT
            </button>
        </div>
      <div className="d-grid gap-2 d-md-block">
            <button
                onClick={() => {
                    dispatch({ type: "reset", counter: useCount });
                    setUseCount(1);
                }}
                className="btn btn-primary"
                type="button">
                RESET
            </button>
      </div>
    </>
  );
};

export default Counter;
