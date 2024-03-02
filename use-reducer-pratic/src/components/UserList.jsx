import { useReducer, Fragment } from "react";
import UserItem from "../UI/UserItem";
import UserForm from "./UserForm";

const users = [
  {
    userName: "sdsd",
    userImage: "sds",
    userXId: "sadsa",
  },
];

const actionTypes = {
  FETCH_USERS_ADD: "FETCH_USERS_ADD",
  FETCH_USERS_DELETE: "FETCH_USERS_DELETE",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",
};

const reducer = (type, action) => {
  switch (type) {
    case actionTypes.FETCH_USERS_ADD:
      return [...state, { action }];
      break;

    case actionTypes.FETCH_USERS_DELETE:
      //return [...state, { action }];
      // return users.map((user) => {
      //   if (user.id == action.user.id) return action.updatedUser;
      //   return user;
      // });
      break;

    default:
      throw new Error(actionTypes.FETCH_USERS_FAILURE);
  }
};
const UserList = () => {
  const [state, dispatch] = useReducer(reducer, users);

  return (
    <>
      <div className="mt-[5rem] m-auto w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
        <UserForm />
        <div className="p-4">
          <UserItem />

          <div className="cursor-pointer pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
            View all
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
