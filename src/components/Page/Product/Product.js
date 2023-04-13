import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Product.css";
const Product = (props) => {
  const { id } = useParams();
  const location = useLocation();
  // const { name, description, price, supplier_name, url, quantity } =
  //   location.state;

  const plusQuantity = (product, id) => {
    const quantity = parseInt(product) + 1;
    const updateproduct = { quantity };

    fetch(`https://paratronics-serverless.vercel.app/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast.info("Quantity Added", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    console.log(product);
  };

  const moreQuantity = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.total_quantity.value);
    const quantity =
      parseInt(product.quantity) + parseInt(event.target.total_quantity.value);
    const updateproduct = { quantity };

    fetch(`https://paratronics-serverless.vercel.app/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast.info(`${number} Quantity Added 😍`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    console.log(product);
  };

  const deliveredItem = (product, id) => {
    let quantity = parseInt(product);
    console.log("in delivered function");
    if (quantity > 0) {
      quantity = quantity - 1;
      const updateproduct = { quantity };
      // console.log(product._id);
      fetch(`https://paratronics-serverless.vercel.app/inventory/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateproduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          toast.success("Product Delivered Successfully 😎", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    } else {
      toast.error("Sorry Stock Out", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    console.log(product);
  };

  const [product, setProduct] = useState([]);
  const [no, setNo] = useState(0);

  useEffect(() => {
    fetch(`https://paratronics-serverless.vercel.app/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data, id)
      });
  }, [product]);

  console.log(product);
  return (
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:rounded-lg lg:h-full">
              <img
                className="container img-height"
                fluid="true"
                src={product.url}
                alt=""
              />
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              Name: <span className="text-indigo-600">{product.name}</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Description: {product.description}
            </p>
            <p className="mt-4 text-gray-600">
              Suplier: {product.supplier_name}
            </p>
            <p className="mt-4 text-gray-600">Quantity: {product.quantity}</p>
            <p className="mt-4 text-gray-600">Price: {product.price}$</p>
            <div className="mt-8">
              <button
                onClick={() => deliveredItem(product.quantity, id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delivered
              </button>
              <button
                onClick={() => plusQuantity(product.quantity, id)}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Add One
              </button>
              <form onSubmit={moreQuantity} className="">
                <input
                  type="number"
                  min="1"
                  name="total_quantity"
                  placeholder="Place quantity"
                  className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pl-3 py-2.5 mb-2 mr-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 input_width"
                />
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Add More
                </button>

                {/* Form  */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// <div className="product-contrainer">
//   <img src={url} className="product-image" alt="" />
//   <h4 className="product-title">Product Name: {name}</h4>
//   <p className="product-text description">Description: {description} </p>
//   <p className="product-text suplier">Suplier: {supplier_name}</p>
//   <p className="product-text quantity">Quantity: {quantity}</p>
//   <p className="product-text price">Price: {price}$</p>
// </div>
