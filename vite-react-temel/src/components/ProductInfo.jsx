import React from "react";

function ProductInfo(props) {
  return (
    <div style={{ textAlign: "right" }}>
      <small>yunuso.me</small>
      <div>{props.children}</div>
    </div>
  );
}

export default ProductInfo;
