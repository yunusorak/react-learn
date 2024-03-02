import React from "react";

const UserForm = () => {
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
            type="text"
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
            name="x-id"
            id="x-id"
            className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300
             placeholder:text-gray-400 focus:ring-cyan-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="grid place-items-center border-none m-5">
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
          Add User
        </button>
      </div>
    </>
  );
};

export default UserForm;
