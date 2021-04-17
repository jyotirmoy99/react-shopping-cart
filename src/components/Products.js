import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

const Products = (props) => {
  useEffect(() => {
    //calling API function
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

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
        <div className="row">
          <div className="col-md-12">
            <div className="card-deck">
              {products.length > 0 ? (
                products.map((value, index) => {
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
                            <button className="btn btn-primary">
                              View Product
                            </button>
                            <button className="btn btn-warning">
                              Add to Card
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2>No produt found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
