import React, { useState } from "react";
import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
import Counter from "../Counter";

function ProductItem({ productData, setProducts, products }) {
  const [title, setTitle] = useState(productData.title);

  const [counter, setCounter] = useState(productData.price);

  const addShop = (e) => {
    // e.target.previousSibling.previousSibling.previousSibling.previousSibling.textContent =
    //   "Güncellendi";
    setTitle("Güncellendi");

    console.log(productData.title, "-->Güncellendi!");
    // setTitle(() => {
    //   return "Güncellendi";
    // });
  };

  const deleteHandler = (e) => {
    setProducts(products.filter((product) => product.id !== productData.id));
  };

  return (
    <>
      <div className="product-item">
        <div className="product-image">
          <img
            src={productData.image}
            className="logo vite"
            alt={productData.image}
          />
        </div>

        <ProductInfo>
          <div className="product-info">
            <h3 className="product-title">{title}</h3>
            <Counter counter={counter} setCounter={setCounter}>
              <h5 className="product-price">{counter}₺</h5>
            </Counter>
            <br />
            <button id="addShop" onClick={addShop}>
              Sepete Ekle
            </button>
            <button className="btn-delete" onClick={deleteHandler}>
              Sil
            </button>
          </div>
        </ProductInfo>
      </div>
    </>
  );
}

export default ProductItem;
