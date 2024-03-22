import MyParagraph from "./MyParagraph";
import React from "react";

const MyElement = (props) => {
  console.log("my-element çalıştı");
  return <MyParagraph>{props.show ? "My Element" : ""}</MyParagraph>;
};

const MemoizedMyElement = React.memo(MyElement);

export default MemoizedMyElement;

// props.show === props.prevValue.show ? "tekrar render etme" : "render"
