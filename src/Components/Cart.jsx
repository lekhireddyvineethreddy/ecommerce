import React, { useState } from 'react';
import { Container, Button, Modal, Card } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const removeFromCart = (index) => {
    // Implement logic to remove item from cart array
    console.log('Remove item from cart:', index);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartElements.map((item, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>
                <img src={item.imageUrl} alt={item.title} style={{ width: '100px', marginRight: '10px' }} />
                <span>{item.title}</span>
                <span className="float-end">Quantity: {item.quantity}</span>
                <Button variant="danger" className="float-end" onClick={() => removeFromCart(index)}>Remove</Button>
              </Card.Body>
            </Card>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
