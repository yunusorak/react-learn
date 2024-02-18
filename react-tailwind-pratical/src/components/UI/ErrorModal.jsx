import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { title, message } = error;

  return (
    <Card className="error-modal select-none">
      <div
        onClick={onConfirm}
        className="backdrop-blur-sm bg-white/30 fixed top-0 w-screen h-screen"
      ></div>
      <div className="w-[36rem] z-50 mx-auto bg-white">
        <h1 className="bg-red-950 text-xl text-center text-white p-5">
          {/* {props.error?.title} */}
          {title}
        </h1>
        <p className="p-5">{message}</p>
        <div className="flex justify-end">
          <Button onClick={onConfirm} className="m-5 w-32 cursor-pointer">
            Tamam
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ErrorModal;
