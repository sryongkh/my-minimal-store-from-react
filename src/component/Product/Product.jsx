import React, { useState } from "react";
import { Card, Button, Modal } from 'react-bootstrap';
import "./Product.css";

function Product(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="Product">
        <Card>
          <Card.Img variant="top" src={props.product.image} />
          <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>{props.product.description}</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              View Details
            </Button>
            <div className="price">${props.product.price}</div>
            <Button
              className="add-to-cart"
              variant="success"
              onClick={() => props.addToCart(props.product)}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="modal-img" src={props.product.image} alt={props.product.name} />
            <p className="modal-description">{props.product.description}</p>
            <p className="modal-price">${props.product.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="success"
              onClick={() => {
                props.addToCart(props.product);
                handleClose();
              }}
            >
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default Product;