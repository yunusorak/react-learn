import { useEffect, useRef, useState } from "react";

const Input = (props) => {
  const inputRef = useRef(); //--> for focus
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props?.type || "text");

  useEffect(() => {
    if (show) {
      setType("text");
      inputRef.current.focus();
    } else {
      setType("password");
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <>
      <label className="block relative">
        <input
          required={true}
          {...props}
          ref={inputRef}
          type={type}
          className="bg-zinc-50 pr-12 peer valid:pt-[10px] text-xs focus:border-gray-400 outline-none border w-full px-2 h-[38px] rounded-sm"
        />
        <small className="absolute peer-valid:text-[10px] peer-valid:top-2.5 transition-all top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-400 -translate-y-1/2">
          {props.label}
        </small>
        {props?.type === "password" && props?.value && (
          <button
            onClick={() => setShow(() => !show)}
            type="button"
            className="absolute top-1 font-semibold text-sm right-3 h-full flex items-center"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </label>
    </>
  );
};

export default Input;
