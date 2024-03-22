import React, { useCallback, useMemo, useState } from "react";
import List from "./components/UI/List";
import Button from "./components/UI/Button";

const App = () => {
  const [title, setTitle] = useState("Title");
  console.log("app working");

  const changeTitleHandler = useCallback(() => {
    setTitle("Title Updated");
  }, []);

  const listItems = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <>
      <h1>{title}</h1>
      <Button onClick={changeTitleHandler}>Change The Title</Button> <br />
      <List items={listItems} />
    </>
  );
};

export default App;

// import { useCallback, useState } from "react";
// import "./App.css";
// import Button from "./components/UI/Button";
// import MyElement from "./components/MyElement";

// function App() {
//   const [toggleParagraph, setToggleParagraph] = useState(false);
//   const [toggleAllow, setToggleAllow] = useState(false);
//   console.log("App Çalıştı");

//   const toggleParagraphHandler = useCallback(() => {
//     if (toggleAllow) {
//       setToggleParagraph((prevState) => !prevState);
//     }
//   }, [toggleAllow]);

//   const toggleAllowHandler = useCallback(() => {
//     setToggleAllow(!toggleAllow);
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <h1>Hello?*</h1>
//         <MyElement show={toggleParagraph} />
//         {/* <b>{toggleParagraph ? "true" : "false"}</b> <br /> <br /> */}
//         <Button onClick={toggleAllowHandler}>Allow Toggling</Button>
//         <br />
//         {toggleAllow}
//         <br />

//         <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
//       </div>
//     </>
//   );
// }

// export default App;
