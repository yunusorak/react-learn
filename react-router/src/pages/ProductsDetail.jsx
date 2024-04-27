import { Link, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const params = useParams();

  console.log(params);
  return (
    <>
      <h1>ProductsDetail</h1>
      <p>Product Id : {params.productId}</p>

      <hr />

      <Link to={".."} relative="path">
        {" "}
        {/* BACK NESTED, NAVIGATE... */}
        Back
      </Link>
    </>
  );
};

export default ProductsDetail;
