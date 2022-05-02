import React from "react";

const Product = (props) => {

  const {name, description, price, supplier_name, url, quantity} = props.props.product;
  
  return (
    <div>
      <div className="product-contrainer">
        <img src={url} className="product-image" alt="" />
        <h4 className="product-title">Product Name: {name}</h4>
        <p className="product-text description">Description: {description} </p>
        <p className="product-text suplier">Suplier: {supplier_name}</p>
        <p className="product-text quantity">Quantity: {quantity}</p>
        <p className="product-text price">Price: {price}$</p>
      </div>
    </div>
  );
};

export default Product;