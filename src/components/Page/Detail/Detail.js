import React from "react";
// import sample from "../../Image/sample.jpg";
import "./Detail.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Detail = (props) => {
  const { _id, name, description, price, supplier_name, url, quantity } =
    props.product;

  const handleProductClick = () => {
    console.log("Product clicked");
    console.log(props.product);
  };

  const navigate = useNavigate();

  const goProduct = (id) => {
    navigate(`/inventory/${_id}`);
    console.log("Product clicked")
    console.log(props.product);
  };

  return (
    <div>
      <div className="product-contrainer">
        <div className="product-card">
          <img src={url} className="product-image" id="image-product" alt="" />
          <h4 className="product-title">Product Name: {name}</h4>
          <p className="product-text price">Price: {price}$</p>
          <div className="buttons justify-content-evenly">
            <button
              className="custom-btn btn-16"
              onClick={() => goProduct(_id)}
              product={props.product}
            >
              Detail
            </button>
            <button className="buttons-section order custom-btn btn-14">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
