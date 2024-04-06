import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Form = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkTheUser = (e) => {
    e.preventDefault();

    username === "a" && password === "a"
      ? dispatch(authActions.login())
      : alert("Error user id or password");
  };

  return (
    <>
      {!isAuth && (
        <form className="max-w-sm mx-auto mt-5">
          <div className="mb-5">
            <input
              type="username"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value.trim())}
              placeholder="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            onClick={checkTheUser}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
