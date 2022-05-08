import React, { useEffect, useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";
import ProductModal from "../ProductModal/ProductModal.js";
import { useNavigate, useParams } from "react-router-dom";
const Detail = (props) => {
  
  const [modalShow, setModalShow] = useState(false);
  const { _id, name, description, price, supplier_name, url, quantity } = props.product;

  const navigate = useNavigate();
  const { id } = useParams();

  const goProduct = async (id) => {
    const baseURL = `https://intense-plains-05397.herokuapp.com/inventory/${_id}`;
    console.log(baseURL);
    console.log(props.product);
    await navigate(`/inventory/${id}`, { state: props.product });
    console.log("Product clicked");
  };

  const MangeProduct = async (id) => {
    await navigate(`/inventory/${id}`, { state: props.product });
  };

  return (
    <div>
      <div className="product-contrainer">
        <div className="product-card">
          <img src={url} className="product-image" id="image-product" alt="" />
          <h4 className="product-title">{name}</h4>
          <p className="product-text price">Price: {price}$</p>
          <div className="buttons justify-content-evenly">
            <button
              className="custom-btn btn-16"
              
              onClick={() => setModalShow(true)}
              product={props.product}
            >
              Detail
            </button>
            <button
              className="buttons-section order custom-btn btn-14"
              // onClick={() => setModalShow(true)}
              onClick={() => goProduct(_id)}
              product={props.product}
            >
              {/* <Link to={`/inventory/${id}`}>Manage</Link>  */}
              Manage
            </button>
          </div>

          <ProductModal product={props.product} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
