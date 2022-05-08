import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/solid";
import SuccessModal from "../../Utilities/SuccessModal/SuccessModal.js";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";

const AddProduct = () => {
  const [tos, setTos] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const email_ref = useRef("");
  
  const [user] = useAuthState(auth);
  // 
  

  const handleAddProduct = async(e) => {
    e.preventDefault();
    const name = e.target.ProductName.value;
    const description = e.target.description.value;
    const price = parseInt(e.target.price.value);
    const quantity = parseInt(e.target.productquantity.value);
    const url = e.target.PhotoURL.value;
    const supplierName = e.target.SupplierName.value;
    const email = await (user?.email)
    const product = { name, description, price, quantity, url, supplierName, email };

    console.log(product);
    if (product) {
      console.log("All inputs are working");
    } else {
      console.log("All inputs are empty");
    }
    const api = `https://intense-plains-05397.herokuapp.com/inventory`;
    fetch(api, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Working and the Data", data);
        e.target.reset();
        setModalShow(true);
        
        console.log(user?.user?.email);
        console.log(user?.email);
      });
  };
  return (
    <div>
      <div className="bg-slate-100 ">
        <div className="min-h-full flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Add Product to Paratronics Warehouse
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleAddProduct}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px ">
                <div className="my-3">
                  <label htmlFor="product-name" className="sr-only">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="ProductName"
                    id="Product-Name"
                    placeholder="Product Name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="product-description" className="sr-only">
                    Product Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="Product-Description"
                    placeholder="Product Description"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="product-quantity" className="sr-only">
                    Product Quantity
                  </label>
                  <input
                    type="number"
                    name="productquantity"
                    id="Product-Quantity"
                    placeholder="Product Quantity"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="supplier-name" className="sr-only">
                    Supplier Name
                  </label>
                  <input
                    type="text"
                    name="SupplierName"
                    id="Supplier-Name"
                    placeholder="Supplier Name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="photo-url" className="sr-only">
                    Photo URL
                  </label>
                  <input
                    id="Photo-URL"
                    name="PhotoURL"
                    type="text"
                    autoComplete="Photo-URL"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    placeholder="Photo URL"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="sr-only">
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="price"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                    placeholder="Product Price"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  // onClick={() => setModalShow(true)}
                  className={`${
                    tos
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500"
                      : "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                  }
                    group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2   `}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <PlusCircleIcon
                      className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                      aria-hidden="true"
                    />
                  </span>
                  Add Product
                </button>

                <SuccessModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
