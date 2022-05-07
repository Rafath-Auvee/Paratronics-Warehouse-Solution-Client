import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init.js";
import { Button, Modal } from "react-bootstrap";
import DeleteModal from "../../Utilities/DeleteModal/DeleteModal.js";
const MyItems = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;

  const [modalShow, setModalShow] = useState(false);

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
    }

    // setModalShow(true)
    // console.log("Clicked")
    // if(!modalShow) {
    //   console.log("Worked")
    // }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myitems?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  let i = 1;

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="text-center">Delivered</th>
            <th className="text-center">Add Quantity</th>
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
                <Button size="sm" variant="success">
                  Delivered
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button size="sm" variant="light">
                  Add Product
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button size="sm" variant="warning">
                  Edit
                </Button>{" "}
              </td>
              <td className="text-center">
                <Button
                  // onClick={() => handleDelete(product._id)}
                  onClick={() => confirmDelete(product._id)}
                  size="sm"
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
              {/* <DeleteModal
                key={product._id}
                product={product}
                show={modalShow}
                // onClick={() => confirmDelete(product._id)}
                onHide={() => setModalShow(false)}
              /> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
