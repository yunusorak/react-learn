import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Form />
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}

        <Counter />
      </div>
    </>
  );
}

export default App;
