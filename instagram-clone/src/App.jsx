import { useEffect } from "react";
import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png";
import instaLogo from "./assets/insta-logo.png";
import { useRef } from "react";

function App() {
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imagesSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }

      images[current].classList.remove("opacity-0");

      if (current == total - 1) {
        current = 0;
      } else {
        current++;
      }
    };

    imagesSlider();
    let interval = setInterval(imagesSlider, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <>
      <div className="h-full w-full gap-x-8 flex items-center justify-center">
        <div className="bg-logo-pattern relative w-[380px] h-[581px] bg-[length:468.32px_634.15px;] bg-[left_-46px_top]">
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

        <div className="login w-[350px] border bg-white p-[50px] pt-8 pb-2">
          <a href="#" className="flex justify-center">
            <img
              className="w-[175px] h-[51px] mb-[12px]"
              src={instaLogo}
              alt=""
            />
          </a>

          <form className="grid gap-y-1.5">
            <label className="block relative">
              <input
                type="text"
                required={true}
                className="bg-zinc-50 peer valid:pt-[10px] text-xs focus:border-gray-400 outline-none border w-full px-2 h-[38px] rounded-sm"
              />
              <small className="absolute peer-valid:text-[10px] peer-valid:top-2.5 transition-all top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2">
                Phone number, username or email
              </small>
            </label>
            <label className="block relative">
              <input
                type="password"
                required={true}
                className="bg-zinc-50 peer valid:pt-[10px] text-xs focus:border-gray-400 outline-none border w-full px-2 h-[38px] rounded-sm"
              />
              <small className="absolute peer-valid:text-[10px] peer-valid:top-2.5 transition-all top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2">
                Password
              </small>
            </label>

            <button
              type="submit"
              className="h-[32px] my-2 hover:bg-blue-700 bg-blue-500 text-white text-sm rounded-md"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
