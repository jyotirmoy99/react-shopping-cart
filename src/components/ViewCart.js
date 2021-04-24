import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function ViewCart(props) {
  const [viewProduct, setViewProduct] = useState([]);

  useEffect(() => {
    getProduct();
    getPriceItem();
  }, [viewProduct]);

  useEffect(() => {
    setViewProduct(JSON.parse(localStorage.getItem("cart")));
  });

  // TOTAL PRICE
  const getPriceItem = () => {};

  //ADD QTY
  const addQty = (item, index) => {
    let product = JSON.parse(localStorage.getItem("cart"));
    item["qty"] = item.qty + 1;
    product.splice(index, 1, item);
    localStorage.setItem("cart", JSON.stringify(product));
    console.log(product);
  };

  //REMOVE QTY
  const removeQty = (item, index) => {
    item["qty"] = item.qty - 1;
    viewProduct.splice(index, 1, item);
    localStorage.setItem("cart", JSON.stringify(viewProduct));
  };

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
      {/* TABLE START */}
      <div className="row ml-auto mr-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewProduct.length > 0 ? (
              viewProduct.map((value, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{value.title}</th>
                      <td>
                        <img
                          src={value.image}
                          style={{ height: 120, width: 100 }}
                          alt="product-image"
                        />
                      </td>
                      <td>{value.category}</td>
                      <td>${value.price * value.qty}</td>
                      <td>
                        <div className="ml-auto">
                          <button
                            disabled={value.qty === 1}
                            className="btn btn-dark"
                            onClick={() => removeQty(value, index)}
                          >
                            -
                          </button>
                          <span style={{ fontSize: 18 }}>{value.qty}</span>
                          <button
                            className="btn btn-dark"
                            onClick={() => addQty(value, index)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger ml-auto"
                          onClick={() => {
                            removeItem(index);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <h2 className="ml-auto mr-auto">Empty Cart</h2>
            )}
            <tr>
              <td>{/* <b>Total Price: {}</b> */}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TABLE END */}
    </div>
  );
}

export default ViewCart;
