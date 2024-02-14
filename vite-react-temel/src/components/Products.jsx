import React, { useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
// import { productData } from "../ProductData";
import NewProduct from "./NewProduct/NewProduct";

function Products() {
  const date = new Date().toLocaleDateString("tr-TR");

  const [products, setProducts] = useState([]);
  console.log(products);

  return (
    <>
      <div className="product-wrapper">
        <NewProduct
          setProducts={setProducts}
          productsLength={products.length}
        />
        <h1 className="product-wrapper-main-title">Products</h1>
        <div className="products">
          {products.length >= 1 ? (
            products.map((product, index) => (
              <ProductItem
                setProducts={setProducts}
                key={product.id}
                productData={product}
                products={products}
              />
            ))
          ) : (
            <h2>Hiç Ürün Yok!</h2>
          )}
        </div>
      </div>
      <hr />
      {date}
      <hr />
    </>
  );
}

export default Products;
