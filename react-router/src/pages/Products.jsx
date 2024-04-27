import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const PRODUCTS = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const Products = () => {
  return (
    <>
      {/* <MainNavigation /> */}
      <h1>My Products Page</h1>

      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
            {/* <Link to={`${product.id}`}>{product.title}</Link> -------> realtive path */}
          </li>
        ))}
        {/* <li>
          <Link to={"/products/1"}>Product 1</Link>
        </li>
        <li>
          <Link to={"/products/2"}>Product 2 </Link>
        </li>
        <li>
          <Link to={"/products/3"}>Product 3</Link>
        </li> */}
      </ul>

      <br />
      <Link to="/checkout">Go to Check Out</Link>
    </>
  );
};

export default Products;
