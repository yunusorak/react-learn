import ProductItem from "./ProductItem";
import products from "../../productData";

const Products = () => {
  //   const productList = products.map((item) => (
  //     <ProductItem>
  //       <li key={item.id}>{item.name}</li>
  //     </ProductItem>
  //   ));

  return (
    <main className="products-wrapper">
      <div className="products max-w-screen-xl grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 items-center justify-between mx-auto p-4">
        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
        {/* <ul>{productList}</ul> */}
      </div>
    </main>
  );
};

export default Products;
