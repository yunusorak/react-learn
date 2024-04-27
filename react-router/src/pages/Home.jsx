import React from "react";
import SubHome from "../components/SubHome";
import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <React.Fragment>
      {/* <MainNavigation /> */}
      <h1>My Home Page</h1>
      {/* <a href="/products">Go to Products Page</a> */}
      {/* <Link to="/products"> Go to Products Page</Link> */}
      <button onClick={navigateHandler}>Go to Products Page</button>
      <span onClick={navigateHandler}>Go to Products Page</span>

      <SubHome />
    </React.Fragment>
  );
};

export default Home;
