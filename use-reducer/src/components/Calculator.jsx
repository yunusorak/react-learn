import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };
  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };
  return (
    <div className="calculator-container">
      <h1>useState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1">
            Number1
          </label>
          <input
            className="form-input"
            type="number"
            id="number1"
            value={number1}
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
            value={number2}
            id="number2"
            onChange={handleNumber2Change}
          />
        </div>
        <button
          className="form-button"
          onClick={() => {
            setResult(number1 + number2);
          }}
        >
          Add
        </button>
        <div className="form-group">
          <label className="form-label" htmlFor="result">
            Result
          </label>
          <input
            className="form-input"
            readOnly
            type="number"
            value={result}
            id="result"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
