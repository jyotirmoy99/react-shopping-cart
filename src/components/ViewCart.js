import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function ViewCart() {
  const [viewProduct, setViewProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, [viewProduct]);

  //VIEW CART FROM LOCALSTORAGE
  const getProduct = () => {
    setViewProduct(JSON.parse(localStorage.getItem("cart")));
  };

  //REMOVE SINGLE ITEM
  const removeItem = (id) => {
    let newViewProduct = JSON.parse(localStorage.getItem("cart"));
    newViewProduct.splice(id, 1);
    localStorage.setItem("cart", JSON.stringify(newViewProduct));
    console.log(newViewProduct);
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

        <br />
        <br />
      </div>

      {viewProduct.length > 0 ? (
        viewProduct.map((value, index) => {
          return (
            <>
              <div className="card p-5 ml-auto mr-auto" style={{ width: 1000 }}>
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

                <button
                  className="btn btn-danger ml-auto"
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  Remove
                </button>
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

{
  /* <div className="ml-auto">
  <button className="btn btn-dark" onClick={(e) => setCounter(counter - 1)}>
    -
  </button>
  <span style={{ fontSize: 18 }}>{counter}</span>
  <button className="btn btn-dark" onClick={(e) => setCounter(counter + 1)}>
    +
  </button>
</div>; */
}
