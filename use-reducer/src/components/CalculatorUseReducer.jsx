import { useReducer } from "react";
import "./Calculator.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload };
    case "SET_NUMBER2":
      return { ...state, number2: action.payload };
    case "SUM_NUMBERS":
      return { ...state, result: action.payload };
    default:
      throw new Error("Invalid action type");
  }
};

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber1Change = (e) => {
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };
  const handleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };
  const sumNumbers = () => {
    dispatch({
      type: "SUM_NUMBERS",
      payload: Number(state.number1) + Number(state.number2),
    });
  };

  return (
    <div className="calculator-container">
      <h1>useReducer</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            value={state.number1}
            onChange={handleNumber1Change}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="number2">
            Number2
          </label>
          <input
            className="form-input"
            type="number"
            id="number2"
            value={state.number2}
            onChange={handleNumber2Change}
          />
        </div>
        <button onClick={sumNumbers} className="form-button">
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            readOnly
            value={state.result}
            type="number"
            id="result"
          />
        </div>
      </div>
    </div>
  );
};

export default CalculatorUseReducer;
