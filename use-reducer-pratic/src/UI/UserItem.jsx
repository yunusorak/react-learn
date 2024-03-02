import React from "react";

const UserItem = () => {
  return (
    <>
      <div className="flex items-center p-4">
        <img
          src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=826"
          alt=""
          className="h-10 w-10 flex-none rounded-full"
        />
        <div className="ml-4 flex-auto">
          <div className="font-medium">Leonard Krasner</div>
          <div className="mt-1 text-slate-700">@leonardkrasner</div>
        </div>
        <div className="cursor-pointer pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">
          Delete
        </div>
      </div>
    </>
  );
};

export default UserItem;
