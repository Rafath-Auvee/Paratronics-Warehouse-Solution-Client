import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import useProducts from "../../Hooks/useProducts.js";
import { Button } from "react-bootstrap";

const MyItems = () => {
  const [products, setProducts] = useProducts([]);
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
              <td className="text-center"><Button variant="warning">Edit</Button> </td>
              <td className="text-center"><Button variant="danger">Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;