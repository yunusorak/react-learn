const redux = require("redux");

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
      break;
    case "DECREMENT":
      return { counter: state.counter - 1 };
      break;

    default:
      break;
  }
};

const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
