import { createStore } from "redux";

const initialState = { counter: 0, showCounter: false };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
      break;
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
      break;
    case "INCREASE":
      return { ...state, counter: state.counter + action.amount };
      break;
    case "TOGGLE":
      return { counter: state.counter, showCounter: !state.showCounter };
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(counterReducer);

export default store;

// console.log(store.getState());

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber); // Subscribe ile Durum güncellemesi dinleme

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
