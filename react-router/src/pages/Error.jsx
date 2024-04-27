import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <h6>Error</h6>
      <Link to="/">Go to Home Page</Link>
    </>
  );
};

export default Error;
