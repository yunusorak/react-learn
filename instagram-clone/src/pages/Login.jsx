import { useEffect, useState } from "react";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import screenshot4 from "../assets/screenshot4.png";
import instaLogo from "../assets/insta-logo.png";
import { useRef } from "react";
import Input from "../components/Input";
import { FaFacebookSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUserA } from "store/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../firebase.js";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const enable = user.email && user.password;
  const ref = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const updateUser = (e) => {
    setUser(() => ({ ...user, [e.target.name]: e.target.value }));
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(user.email, user.password);

    /*  dispatch(setUserA({ user: user.email }));
    navigate(location.state?.return_url || "/", {
      replace: true,
    });
     */
  };

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imagesSlider = () => {
      current > 0
        ? images[current - 1].classList.add("opacity-0")
        : images[total - 1].classList.add("opacity-0");

      images[current].classList.remove("opacity-0");

      current == total - 1 ? (current = 0) : current++;
    };

    imagesSlider();
    let interval = setInterval(imagesSlider, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);
  return (
    <>
      <div className="h-full w-full gap-x-8 flex flex-wrap overflow-auto items-center justify-center">
        <div className="hidden md:block bg-logo-pattern relative w-[380px] h-[581px] bg-[length:468.32px_634.15px;] bg-[left_-46px_top]">
          <div
            ref={ref}
            className="w-[250px] h-[538px] absolute top-[27px] left-[112px]"
          >
            <img
              className="w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity"
              src={screenshot1}
              alt=""
            />
            <img
              className="w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity"
              src={screenshot2}
              alt=""
            />
            <img
              className="w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity"
              src={screenshot3}
              alt=""
            />
            <img
              className="w-full h-full duration-1000 ease-linear absolute top-0 left-0 opacity-0 transition-opacity"
              src={screenshot4}
              alt=""
            />
          </div>
        </div>

        <div className="w-[350px] grid gap-y-3">
          <div className="login border bg-white p-[50px] pt-8 pb-2">
            <a href="#" className="flex justify-center">
              <img
                className="w-[175px] h-[51px] mb-[12px]"
                src={instaLogo}
                alt=""
              />
            </a>

            <form onSubmit={handleSubmit} className="grid gap-y-1.5">
              <Input
                type="text"
                name="email"
                onChange={updateUser}
                value={user.email}
                label="Phone number, username or email"
              />
              <Input
                type="password"
                name="password"
                onChange={updateUser}
                value={user.password}
                label="Password"
              />

              <button
                type="submit"
                disabled={!enable}
                className="disabled:opacity-50 font-medium h-[32px] my-2 hover:bg-blue-700 bg-brand text-white text-sm rounded-md"
              >
                Log In
              </button>
              <div className="flex items-center my-2.5 mb-3.5">
                <div className="h-px bg-gray-300 flex-1" />
                <span className="px-4 text-[13px] text-gray-500 font-semibold">
                  OR
                </span>
                <div className="h-px bg-gray-300 flex-1" />
              </div>
              <a
                href="#"
                className="flex mb-2 justify-center items-center gap-x-2 text-sm font-semibold text-facebook"
              >
                <FaFacebookSquare size={20} />
                Log In with Facebook
              </a>
              <a
                href="#"
                className="text-xs mb-2.5 flex items-center justify-center text-link"
              >
                Forget Password?
              </a>
            </form>
          </div>

          <div className="border bg-white text-sm text-center p-4">
            Don't have an account?{" "}
            <a href="#" className="text-brand font-semibold">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
