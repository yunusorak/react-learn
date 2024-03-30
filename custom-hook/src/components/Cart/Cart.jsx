import Card from "../UI/Card";
import CartItem from "./CartItem";
import products from "../../productData";
import Offcanvas from "../UI/Offcanvas";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Backdrop = ({ setOffCanvas }) => {
  return (
    <div className="backdrop-content" onClick={() => setOffCanvas(false)}></div>
  );
};

const Cart = ({ offcanvas, setOffCanvas }) => {
  const { items, totalAmount, clearItem } = useContext(CartContext);

  const cartItems = items.map((product) => (
    // <CartItem key={product.id} product={product} />
    <CartItem key={product.id} product={product} />
  ));

  return (
    <>
      <Offcanvas className={`${offcanvas ? "block" : "hidden"}`}>
        {/* <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button> */}
        <Backdrop setOffCanvas={setOffCanvas} />

        <aside
          id="default-sidebar"
          className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-hidden px-3 py-4 bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium cart-items">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3 font-bold">Sepetim</span>
                </a>
                <button
                  onClick={() => {
                    setOffCanvas(false);
                  }}
                  type="button"
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
                  className="text-gray-400 bg-transparent hover:bg-slate-300 hover:text-gray-900 rounded-lg text-sm p-2.5 absolute top-[18px] end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              </li>

              {cartItems}

              {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li> */}
              {products.length > 0 && (
                <li className="relative border-t-2 pt-3">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap text-left">
                      Toplam Değer
                    </span>
                    <span className="flex-1 ms-3 whitespace-nowrap text-right">
                      {totalAmount}₺
                    </span>
                    {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span> */}
                  </a>
                </li>
              )}

              {products.length > 0 && (
                <li className="relative border-t-2 pt-3 actions">
                  <a
                    href="#"
                    className="flex items-center text-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <button
                      type="button"
                      className="text-white w-full flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="mr-3"
                        width="20px"
                        height="20px"
                        viewBox="0 -3 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <title>basket</title>
                        <desc>Created with Sketch Beta.</desc>
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Icon-Set"
                            sketch:type="MSLayerGroup"
                            transform="translate(-412.000000, -726.000000)"
                            fill="#dbeafe"
                          >
                            <path
                              d="M439.429,738 L434,738 L434,734 L440,734 L439.429,738 L439.429,738 Z M438.571,744 L434,744 L434,740 L439.143,740 L438.571,744 L438.571,744 Z M438,748 C438,749.104 437.104,750 436,750 L434,750 L434,746 L438.286,746 L438,748 L438,748 Z M424,734 L432,734 L432,738 L424,738 L424,734 Z M424,740 L432,740 L432,744 L424,744 L424,740 Z M424,746 L432,746 L432,750 L424,750 L424,746 Z M422,738 L416.286,738 L416,734 L422,734 L422,738 L422,738 Z M422,744 L416.714,744 L416.429,740 L422,740 L422,744 L422,744 Z M422,750 L419,750 C417.896,750 417,749.104 417,748 L416.857,746 L422,746 L422,750 L422,750 Z M443,732 L436.474,732 L438.5,728 L441,728 C441.553,728 442,727.553 442,727 C442,726.447 441.553,726 441,726 L437,726 L433.916,732 L422.168,732 L419,726 L415,726 C414.447,726 414,726.447 414,727 C414,727.553 414.447,728 415,728 L417.5,728 L419.646,732 L413,732 C412.447,732 412,732.448 412,733 C412,733.553 412.447,734 413,734 L414,734 L415,748 C415,750.209 416.791,752 419,752 L436,752 C438.209,752 440,750.209 440,748 L442,734 L443,734 C443.553,734 444,733.553 444,733 C444,732.448 443.553,732 443,732 L443,732 Z"
                              id="basket"
                              sketch:type="MSShapeGroup"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span className="text-center">Sipariş ver</span>
                    </button>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <button
                      onClick={clearItem}
                      type="button"
                      className="text-white w-full flex bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 mr-3"
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
                      <span className="text-center">Sepeti Temizle</span>
                    </button>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </aside>
      </Offcanvas>
    </>
  );
};

export default Cart;
