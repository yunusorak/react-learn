import React, { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  //   const [productName, setProductName] = useState("");
  //   const [productPrice, setProductPrice] = useState("");
  //   const [imageURL, setImageURL] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageURL: "",
  });

  const productChangeHandler = (e) => {
    // setProductData({
    //   ...productData,
    //   [e.target.getAttribute("productkey")]: e.target.value.trim(),
    // });

    setProductData((prevState) => {
      return {
        ...prevState,
        [e.target.getAttribute("productkey")]: e.target.value.trim(),
      };
    });
  };

  const submitHandler = (e) => {
    const newProductData = {
      id: props.productsLength + 1,
      image: productData.imageURL,
      title: productData.productName,
      price: Number(productData.productPrice),
    };
    // props.setProducts((prevState) => [newProductData, ...prevState]);
    props.onSaveProduct(newProductData);

    setProductData(() => {
      return { productName: "", productPrice: "", imageURL: "" };
    });

    e.preventDefault();
  };

  //   const titleChangeHandler = (e) => {
  //     // setProductName(e.target.value.trim());
  //     setProductData({
  //       ...productData,
  //       productName: e.target.value.trim(),
  //     });
  //   };

  //   const priceChangeHandler = (e) => {
  //     // setProductPrice(e.target.value.trim());
  //     setProductData({
  //       ...productData,
  //       productPrice: e.target.value.trim(),
  //     });
  //   };

  //   const imageChangeHandler = (e) => {
  //     // setImageURL(e.target.value);
  //     setProductData({
  //       ...productData,
  //       imageURL: e.target.value.trim(),
  //     });
  //   };

  //   console.log(productData);
  return (
    <>
      <form className="product-form" onSubmit={submitHandler}>
        <div className="product-form-input">
          <label>Ürün Adı </label>
          <input
            type="text"
            productkey="productName"
            placeholder="Ürün Adı Giriniz"
            onChange={productChangeHandler}
            value={productData.productName}
          />
        </div>

        <div className="product-form-input">
          <label>Ürün Fiyatı </label>
          <input
            min="0"
            productkey="productPrice"
            type="number"
            placeholder="Ürün Fiyatı Giriniz"
            onChange={productChangeHandler}
            value={productData.productPrice}
          />
        </div>

        <div className="product-form-input">
          <label>Ürün Görseli </label>
          <input
            type="text"
            productkey="imageURL"
            placeholder="Ürün Görseli Giriniz"
            value={productData.imageURL}
            onChange={productChangeHandler}
          />
        </div>

        <div className="form-buttons">
          <button className="product-form-button">Ürün Ekle</button>
          <button
            className="product-form-button cancel"
            onClick={() => props.setIsOpen(false)}
          >
            Vazgeç
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
