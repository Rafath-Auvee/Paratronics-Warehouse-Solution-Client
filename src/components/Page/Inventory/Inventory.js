import React from "react";
import useProducts from "../../Hooks/useProducts.js";
import Detail from "../Detail/Detail.js";
import "./Inventory.css"
const Inventory = () => {
  const [products, setProducts] = useProducts([]);
  // console.log(products)
  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <Detail key={product._id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
