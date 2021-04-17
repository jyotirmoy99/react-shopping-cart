import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  //search input
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <h3 class="navbar-brand">Shopping Cart</h3>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleChange}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
