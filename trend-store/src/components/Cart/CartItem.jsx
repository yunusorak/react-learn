const CartItem = ({ product }) => {
  const { id, name, description, img, price, amount } = product;
  return (
    <>
      <li className="cart-item relative border-t-2 pt-3">
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          id="cart-item-remove"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2.5 absolute top-[22px] end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <img src={img} alt={description} width="35px" />
          <div>
            <span className="flex-1 text-lg ms-3 whitespace-nowrap">
              {name}
            </span>{" "}
            <br />
            <small className="ms-3 text-xs">
              {price}₺ <span>x</span> <span>{amount}</span>
            </small>
          </div>
        </a>
      </li>
    </>
  );
};

export default CartItem;
