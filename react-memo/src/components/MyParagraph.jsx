const MyParagraph = (props) => {
  console.log("my-paragraph çalıştı");

  return <p>{props.children}</p>;
};

export default MyParagraph;
