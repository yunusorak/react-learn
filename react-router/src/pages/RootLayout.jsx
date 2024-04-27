import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      {/* <h1>RootLayout</h1> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
