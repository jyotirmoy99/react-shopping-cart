import React from "react";

const ProductDetails = (props) => {
  //add card
  const addCart = () => {};
  const { title, price, image, category } = props;
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: 300 }}>
        <img src={image} className="card-img-top" alt="productImage" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <small>{category}</small>
          <p>${price}</p>
          <div>
            <button className="btn btn-warning" onClick={addCart}>
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
