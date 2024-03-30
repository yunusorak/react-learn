import ReactDOM, { createPortal } from "react-dom";

const MainOffCanvas = (props) => {
  return <div className={`${props.className} offcanvas`}>{props.children}</div>;
};
const Offcanvas = ({ children, className }) => {
  return createPortal(
    <MainOffCanvas children={children} className={className} />,
    document.getElementById("overlays")
  );
};

export default Offcanvas;
