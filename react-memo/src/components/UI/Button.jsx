import React from "react";

const Button = ({ children, onClick }) => {
  console.log("Button çalıştı");
  return <button onClick={onClick}>{children}</button>;
};

const Memoized = React.memo(Button);

export default Memoized;

// props.onClick === props.prev.onClick;
