import React from "react";
import { useLocation } from 'react-router-dom';

const Product = (props) => {
  const location = useLocation();
  const {name, description, price, supplier_name, url, quantity} = location.state
  
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
