import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const showcount = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const { increment } = counterActions;

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", amount: 5 });
    dispatch(counterActions.increase({ amount: 6 }));
  };
  const showCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main>
      {showcount}
      <hr />
      <h3>Redux Counter</h3>
      <b> {showcount && counter} </b> <br />
      <button onClick={incrementHandler}>Increase</button>
      <button onClick={increaseHandler}>Increase by 6</button>
      <button onClick={decrementHandler}>Decrease</button> <br /> <br />
      <button onClick={showCounter}>Show Counter</button>
      <p>
        Edit <code>src/Components/Counter.jsx</code> and save to test HMR
      </p>
    </main>
  );
};

export default Counter;
