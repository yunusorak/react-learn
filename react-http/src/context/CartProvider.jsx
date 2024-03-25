import { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.item.id;
      });

      let updatedItems = [...state.items];

      if (existingCartItemIndex !== -1) {
        updatedItems[existingCartItemIndex] = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.amount * action.item.price,
      };

    case "DELETE":
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };

    case "CLEAR":
      return { items: [], totalAmount: 0 };

    default:
      return console.log("Bir hata oluşmuş olabilir!!");
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (product) => {
      dispatchCartAction({ type: "ADD", item: product });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "DELETE", id: id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR", item: {} });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
