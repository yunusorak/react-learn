import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fbServiceActions } from "../store";
import { Link, useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  sendEmailVerification,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [acc, setAcc] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();
  const isActivated = useSelector((state) => state.fbservice.isActivated);
  const mail = useSelector((state) => state.fbservice.email);
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(fbServiceActions.currentUserControl());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          fbServiceActions.currentUserControl({
            uid: user.uid,
            email: user.email,
            isActivated: true,
          })
        );
      } else {
        console.log("Herhangi bir kullanıcı girişi yok");
      }
    });

    console.log(isActivated);
    console.log(mail);

    isActivated ? navigate("/") : navigate("/login");
  }, [isActivated]);

  const register = (e) => {
    if (login) {
      // Kayıt olma --------
      login ? dispatch(fbServiceActions.login(acc)) : "";
    } else {
      if (!acc.email.length == 0 || !acc.password.length == 0) {
        dispatch(fbServiceActions.register(acc));
        setAcc({ email: "", password: "" });
      } else {
        alert("Something wrong error!");
      }
    }

    e.preventDefault();
  };

  const updateAcc = (e) => {
    setAcc((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to={".."}
                relative="path"
                className="font-bold hover:text-pink-600"
              >
                Home
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={acc.email}
                    onChange={updateAcc}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={updateAcc}
                    value={acc.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to={"/resetpassword"}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={register}
                  className={`bg-black w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-primary-600
                `}
                >
                  {login ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    onClick={() => setLogin(!login)}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {login ? "Sign In" : "Sign Up"}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
