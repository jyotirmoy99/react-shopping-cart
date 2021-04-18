import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function ViewCart(props) {
  const [viewProduct, setViewProduct] = useState([]);
  // const [counter, setCounter] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  //VIEW CART FROM LOCALSTORAGE
  const getProduct = () => {
    setViewProduct(JSON.parse(localStorage.getItem("cart")));
  };

  //REMOVE ALL PRODUCT FROM CART
  const removeAll = (id) => {
    localStorage.removeItem("cart");
    // eslint-disable-next-line no-self-compare
    setViewProduct(viewProduct.filter((product) => product.id !== product.id));
  };

  return (
    <div className="row">
      <div className="col-md-12 text-center p5s-5">
        <NavLink to="/products">Products</NavLink>
        <h3>Cart Items {viewProduct.length}</h3>
        <br />
        <br />
        <button
          className="btn btn-block btn-primary ml-auto mr-auto"
          style={{ width: 200 }}
        >
          Checkout
        </button>
        <button
          className="btn btn-block btn-danger ml-auto mr-auto"
          onClick={removeAll}
          style={{ width: 200 }}
        >
          Clear All
        </button>
        <br />
        <br />
      </div>

      {viewProduct.length > 0 ? (
        viewProduct.map((value) => {
          return (
            <>
              <div className="card p-5 ml-auto mr-auto" style={{ width: 1000 }}>
                {/* <div className="ml-auto">
                <button onClick={(e) => setCounter(counter - 1)}>-</button>
                {counter}
                <button onClick={(e) => setCounter(counter + 1)}>+</button>
              </div> */}
                <img
                  src={value.image}
                  style={{ width: 100 }}
                  className="card-img-top"
                  alt="productImage"
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <b>${value.price}</b>
                </div>
                <div className="card-footer ml-auto">
                  <button className="btn btn-danger">Remove</button>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h2 className="ml-auto mr-auto">Empty Cart</h2>
      )}
    </div>
  );
}

export default ViewCart;
