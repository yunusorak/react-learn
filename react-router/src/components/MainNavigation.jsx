import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              {/* end--> Bir altına yani /products/5 gibi bir yere gittiğinde class ı kaldırır */}
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
