import React, { useReducer } from "react";

const userValues = {
  userName: "",
  userImage: "",
  userXId: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_NAME":
      return { ...state, userName: action.payload };
      break;
    case "USER_IMAGE":
      return { ...state, userImage: action.payload };
      break;
    case "USER_X_ID":
      return { ...state, userXId: action.payload };
      break;
    case "RESET_USER":
      return { userName: "", userImage: "", userXId: "" };

    default:
      return state;
    //   throw new Error("Invalidation User");
  }
};

const UserForm = (props) => {
  const [state, dispatch] = useReducer(userReducer, userValues);

  const updateUser = (e) => {
    dispatch({
      type: e.target.getAttribute("user-type"),
      payload: e.target.value,
    });
  };

  const addUser = () => {
    state.id = Math.random() * 100;
    props.dispatchUser({
      type: props.actionTypes.FETCH_USERS_ADD,
      payload: state,
    });
    dispatch({ type: "RESET_USER" });
  };

  return (
    <>
      <div className="sm:col-span-6 p-2 border-none">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            onChange={updateUser}
            type="text"
            value={state.userName}
            user-type="USER_NAME"
            name="first-name"
            id="first-name"
            className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300
             placeholder:text-gray-400 focus:ring-cyan-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-6 p-2 border-none">
        <label
          htmlFor="image"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Image
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="image"
            user-type="USER_IMAGE"
            value={state.userImage}
            onChange={updateUser}
            id="image"
            className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300
             placeholder:text-gray-400 focus:ring-cyan-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-6 p-2 border-none">
        <label
          htmlFor="x-id"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          X Id
        </label>
        <div className="mt-2">
          <input
            type="text"
            onChange={updateUser}
            value={state.userXId}
            name="x-id"
            user-type="USER_X_ID"
            id="x-id"
            className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300
             placeholder:text-gray-400 focus:ring-cyan-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="grid place-items-center border-none m-5">
        <button
          onClick={addUser}
          className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        >
          Add User
        </button>
      </div>
    </>
  );
};

export default UserForm;
