import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";





const DeleteModal = (props) => {

  const [products, setProducts] = useState([]);
  const { _id, name, description, price, supplier_name, url, quantity } =
    props.product;


      // const confirmDelete = async (id) => {
      //   const url = `http://localhost:5000/inventory/${id}`;
      //   console.log(id);
      //   fetch(url, {
      //     method: "DELETE",
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       const remaining = products.filter((product) => product._id !== id);
      //       setProducts(remaining);
      //     });
      // };


    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onHide={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
