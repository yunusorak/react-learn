import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { fbServiceActions } from "../store";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const isActivated = useSelector((state) => state.fbservice.isActivated);
  const dispatch = useDispatch();
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

    isActivated ? navigate("/") : "";
  }, [isActivated]);

  const resetPass = (e) => {
    e.preventDefault();
    if (email.length > 5) {
      console.log("ddsadasdsae");
      dispatch(fbServiceActions.resetPassword(email));
      setEmail("");
    } else {
      alert("Mail adresiniz hatalı!!");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to={"/login"}
                relative="path"
                className="font-bold hover:text-pink-600"
              >
                Login
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Reset in to your account
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>

                <button
                  type="submit"
                  onClick={resetPass}
                  className="bg-black w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-primary-600"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
