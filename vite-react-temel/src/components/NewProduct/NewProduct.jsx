import React, { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const NewProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSaveProduct = (newProductData) => {
    props.setProducts((prevState) => [newProductData, ...prevState]);
  };

  return (
    <>
      <div className="new-product-wrapper">
        {isOpen ? (
          <ProductForm
            onSaveProduct={onSaveProduct}
            productsLength={props.productsLength}
            setIsOpen={setIsOpen}
          />
        ) : (
          <AddProduct setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
};

export default NewProduct;
