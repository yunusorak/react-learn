function Counter(props) {
  return (
    <>
      <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
      {/* <span>{counter}₺</span> */}
      {props.children}
      <button onClick={() => props.setCounter(props.counter + 1)}>+</button>
    </>
  );
}

export default Counter;
