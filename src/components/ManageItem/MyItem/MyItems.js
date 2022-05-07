import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import useProducts from "../../Hooks/useProducts.js";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
const MyItems = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [no, setNo] = useState(0);
  const [qty, setQty] = useState(0);
  const [inputQuantity, setInputquantity] = useState("");
  const [user] = useAuthState(auth);
  const email = user?.email
  useEffect(
    (id) => {
      fetch(`http://localhost:5000/myitems?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          // setNo(data.length)
          // setItem(data)
          // setNo(data.quantity)
          // console.log("data",data)
        });
    },
    [products]
  );

  let i = 1;

  const deliveredItem = (product) => {
    let quantity = parseInt(product.quantity);
    if (quantity > 0) {
      quantity = quantity - 1;
      const updateproduct = { quantity };
      console.log(product._id);
      fetch(`http://localhost:5000/inventory/${product._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateproduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);
          toast.success("Product Delivered Successfully", {
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

  const plusQuantity = (product) => {
    // const frmdetails = {
    //   total: inputQuantity,
    // };
    // console.log(frmdetails);
    // console.log(frmdetails.total);
    const quantity = parseInt(product.quantity) + 1;
    const updateproduct = { quantity };
    console.log(product._id);
    fetch(`http://localhost:5000/inventory/${product._id}`, {
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

  const confirmDelete = async (id) => {
    const agree = window.confirm("Confirm?");
    if (agree) {
      const url = `http://localhost:5000/inventory/${id}`;
      console.log(id);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });

      toast.error("Product Deleted 😭", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const handleplus = (event) => {
    console.log(event.target.total.value);
    setQty(event.target.total.value);
  };
  const navigateProduct = (id) => {
    navigate(`/inventory/${id}`);
  }

  const editProduct = async(product) => {
    await navigate(`/editproduct/${product.id}`, { state: product });
  }
  return (
    <div>
      <Button size="lg" className="mx-4 my-3" variant="dark">
        <Link className="addItem" to="/addproduct">Add New Item</Link>
      </Button>{" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="text-center">Delivered</th>
            <th className="text-center">Add One</th>
            <th className="text-center">Add More</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
            {/* <th>Last Name</th>
            <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="align-middle" key={product._id}>
              <td>{i++}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td className="text-center">
                <Button
                  onClick={() => deliveredItem(product)}
                  size="sm"
                  variant="success"
                >
                  Delivered
                </Button>{" "}
              </td>
              <td className="text-center mx-auto">
                {/* <input
                  className="text-black w-10 mr-3 mt-2 pb-1 rounded"
                  onChange={(e) => setInputquantity(e.target.value)}
                  type="number"
                  min="1"
                  name="total"
                  placeholder="1"
                  required
                /> */}
                <Button
                  size="sm"
                  onClick={() => plusQuantity(product)}
                  variant="light"
                >
                  Plus Quantity
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button size="sm" onClick={()=>navigateProduct(product._id)} variant="primary">
                  Manage   
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button size="sm" variant="warning" onClick={()=>editProduct(product)}>
                  Edit
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button
                  onClick={() => confirmDelete(product._id)}
                  size="sm"
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
