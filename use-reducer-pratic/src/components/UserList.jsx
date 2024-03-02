import { useReducer, Fragment, useEffect } from "react";
import UserItem from "../UI/UserItem";
import UserForm from "./UserForm";

const actionTypes = {
  FETCH_USERS_ADD: "FETCH_USERS_ADD",
  FETCH_USERS_DELETE: "FETCH_USERS_DELETE",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
  SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_ADD:
      localStorage.setItem("users", JSON.stringify([...state, action]));
      return [...state, action];

    case actionTypes.FETCH_USERS_DELETE:
      const updateData = state.filter(
        (user) => user.payload.id !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(updateData));
      return updateData;

    case actionTypes.SET_USERS:
      localStorage.setItem("users", JSON.stringify([...action.payload]));
      return [...action.payload];
    default:
      console.log("Bir hata oluşmuş olabilir!");
      break;
    // throw new Error(actionTypes.FETCH_USERS_FAILURE);
  }
};
const UserList = () => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (localStorage.getItem("users") !== null) {
      const savedData = JSON.parse(localStorage.getItem("users"));
      dispatch({
        type: "SET_USERS",
        payload: savedData,
      });
    }
  }, []);

  return (
    <>
      <div className="p-3 mt-[5rem] m-auto w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <UserForm
          reducer={reducer}
          actionTypes={actionTypes}
          usersData={state}
          dispatchUser={dispatch}
        />
        <div className="p-4">
          {state.map((user) => (
            <UserItem
              dispatchUser={dispatch}
              user={user.payload}
              key={user.payload.id}
            />
          ))}

          <div className="select-nonecursor-pointer pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
            View all
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
