import React from "react";

const UserItem = (props) => {
  const deleteUser = () => {
    props.dispatchUser({
      type: "FETCH_USERS_DELETE",
      payload: props.user.id,
    });
  };
  return (
    <>
      <div className="flex items-center p-4">
        <img
          src={props.user.userImage}
          alt={props.user.userName}
          className="h-10 w-10 flex-none rounded-full"
        />
        <div className="ml-4 flex-auto">
          <div className="font-medium">{props.user.userName}</div>
          <div className="mt-1 text-slate-700">@{props.user.userXId}</div>
        </div>
        <div
          onClick={deleteUser}
          className="cursor-pointer pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50"
        >
          Delete
        </div>
      </div>
    </>
  );
};

export default UserItem;
