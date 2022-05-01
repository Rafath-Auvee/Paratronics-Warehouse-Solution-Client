import React, { useState, useEffect } from "react";
import axios from "axios";
// import useProducts from "../../Hooks/useProducts.js"

const baseURL = "http://localhost:5000/products";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  let i = 1
  useEffect(() => {
    axios.get(`${baseURL}`).then((res) => {
      setProducts(res.data);
      console.log(setProducts)
    });

    
  }, []);

  return (
    <div>
      {products.map((product) => (
        <h1>Product {i++} </h1>
      ))}
    </div>
  );
};

export default Inventory;
