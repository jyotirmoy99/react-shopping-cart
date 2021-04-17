import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <NavLink to="/home" class="navbar-brand">
          Shopping Cart
        </NavLink>
        <NavLink to="/products">Product</NavLink>
        <NavLink to="/">Logout</NavLink>
      </nav>
    </div>
  );
};

export default Header;
