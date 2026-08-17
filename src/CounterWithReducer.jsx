import { useReducer } from "react";
import { NewDiv } from "./NewDiv";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <NewDiv>
      <h1>Cuunter using Reducer</h1>
      <p>Count: {count}</p>

      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
      </div>

      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
      </div>

      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
    </NewDiv>
  );
};
