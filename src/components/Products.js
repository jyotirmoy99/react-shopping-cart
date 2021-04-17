import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./ProductDetails";
import Header from "./Header";

const Products = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);

  useEffect(() => {
    //calling API function
    getProducts();
  }, []);

  //search filter
  useEffect(() => {
    setFilteredSearch(
      products.filter((p) => {
        return p.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [products, search]);

  //HandleChange

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //API function
  const getProducts = async () => {
    let product = await fetch("https://fakestoreapi.com/products");
    product = await product.json();
    setProducts(product);
    console.log(product);
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">All products</h2>

      <div className="container pt-5">
        {/* SEARCH START */}
        <form class="form-inline ml-auto mr-auto p-5">
          <input
            class="form-control mr-auto ml-auto"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handleChange}
          />
        </form>
        {/* SEARCH END */}
        <div className="row">
          <div className="col-md-12">
            <div className="card-deck">
              {/* MAP START  */}
              {products.length > 0 ? (
                filteredSearch.map((value, index) => {
                  return (
                    // card map
                    <ProductDetails key={index} {...value} />
                  );
                })
              ) : (
                <h2>No product found</h2>
              )}
              {/* MAP END */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
