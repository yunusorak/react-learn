import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import Counter from "./Counter";

function App2() {
  return <h1>App2</h1>;
}

function App() {
  // JSX : {}
  let a = 15;
  const firstName = "Enes";
  const vize = 40;
  const final = 80;

  let isimler = ["Enes", "Ayşenur", "Kübra", "Adem"];

  const [counter, setCounter] = useState(53252);

  return (
    <>
      <Products />
      <br />

      <Counter counter={counter} setCounter={setCounter}>
        {counter}
      </Counter>
      {/* <div className="product-item">
        {isimler.map((isim, index) => (
          <p
            style={{
              padding: "5px",
              backgroundColor: "turquoise",
              fontSize: "1.5rem",
              fontWeight: "bold",
              borderRadius: "50px",
            }}
            key={index}
          >
            {isim}
          </p>
        ))}
      </div> */}

      {/* {(vize + final) / 2 >= 60 ? (
        <p>Dersi Geçtiniz</p>
      ) : (
        <p>Dersten Kaldınız</p>
      )} */}
      {/* <p>Geçerli Not: {(vize + final) / 2} </p> */}
      {/* <p>a değişkeninin değeri {a}</p>
      <p>Müşteri İsmi: {firstName}</p> */}
      {/* <App2 />
      <img src={viteLogo} className="logo vue" alt="" />
      <img src={reactLogo} className="logo react" alt="" /> */}
      {/* <h1>Vite + React</h1> */}
    </>
  );
}

export default App;
