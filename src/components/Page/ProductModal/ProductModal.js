import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
const ProductModal = (props) => {
  const { _id, name, description, price, supplier_name, url, quantity } =
    props.product;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={8}>
            <h4>Name: {name}</h4>
            <p>Description: {description}</p>
            <p>Supplier Name: {supplier_name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
          </Col>
          <Col xs={6} md={4}>
            <img src={url} alt="" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
