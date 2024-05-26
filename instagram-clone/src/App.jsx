import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Loader />;
  }

  return (
    user && (
      <>
        <ToastContainer position="top-right" theme="dark" />
        {useRoutes(routes)}
      </>
    )
  );
}

export default App;
