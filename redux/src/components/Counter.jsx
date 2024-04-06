import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showcount = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const showCounter = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main>
      {showcount}
      <hr />
      <h3>Redux Counter</h3>
      <b> {showcount && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrease</button> <br />
      <button onClick={showCounter}>Show Counter</button>
      <p>
        Edit <code>src/Components/Counter.jsx</code> and save to test HMR
      </p>
    </main>
  );
};

export default Counter;
