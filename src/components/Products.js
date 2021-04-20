import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faShoppingCart} />;

const Products = (props) => {
  const [search, setSearch] = useState(""); //search inputs
  const [products, setProducts] = useState([]); //products fetching from API to display on the screen
  const [cartProducts, setCartProducts] = useState([]); //to store on the localStorge
  const [filteredItems, setFilteredItems] = useState([]); //filtering the products when we search something on the screen

  //calling API function inside useEffect
  useEffect(() => {
    getProducts();
  }, [products]); //if we dont give here products as dependency then we have to refresh every time we add product to cart to display on the screen

  //ADD TO CART
  const addCart = (item) => {
    item["qty"] = 1;
    cartProducts.push(item);
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  };

  // //VIEW CART
  const viewCart = (value) => {
    props.history.push("/viewCart");
  };

  //API function
  const getProducts = async () => {
    let product = await fetch("https://fakestoreapi.com/products");
    product = await product.json();
    setProducts(product);
    setCartProducts(JSON.parse(localStorage.getItem("cart")) || []);
  };

  //filter API
  useEffect(() => {
    setFilteredItems(
      products.filter((p) => {
        return p.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [products, search]);

  return (
    <div>
      <h2 className="text-center pt-5">
        All products{" "}
        <span style={{ color: "green" }} onClick={viewCart}>
          {element}
        </span>
        <span
          style={{
            fontSize: 30,
          }}
        >
          {cartProducts.length}
        </span>
      </h2>

      <div className="container pt-3">
        {/* SEARCH START */}
        <form class="form-inline ml-auto mr-auto p-3">
          <input
            class="form-control mr-auto ml-auto"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* SEARCH END */}

        <div className="row">
          <div className="col-md-12">
            <div className="card-deck">
              {/* MAP START  */}
              {products.length > 0 ? (
                filteredItems.map((value) => {
                  return (
                    // card map
                    <div className="col-md-4">
                      <div className="card" style={{ width: 300 }}>
                        <img
                          src={value.image}
                          className="card-img-top"
                          alt="productImage"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{value.title}</h5>
                          <small>{value.category}</small>
                          <p>${value.price}</p>
                          <div>
                            <button
                              className="btn btn-warning"
                              onClick={() => addCart(value)}
                            >
                              Add to Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
