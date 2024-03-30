import React from "react";

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main>
      <hr />
      <h3>Redux Counter</h3>
      <b> 0 </b> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <p>
        Edit <code>src/Components/Counter.jsx</code> and save to test HMR
      </p>
    </main>
  );
};

export default Counter;
