const AddProduct = (props) => {
  return (
    <button
      style={{
        marginTop: "25px",
        border: "1px solid #545454",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "25px",
        backgroundColor: "#545454",
        color: "white",
      }}
      onClick={() => props.setIsOpen(true)}
    >
      Yeni Ürün Ekle
    </button>
  );
};

export default AddProduct;
