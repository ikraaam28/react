import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Product = ({ product, onBuy, onLike, onDislike }) => {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={product.quantity === 0 ? '/src/assets/sold_out.png' : product.img || '/src/assets/placeholder.jpg'}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Prix: {product.price} DT</Card.Text>
          <Card.Text>Stock: {product.quantity}</Card.Text>

       
          <Button onClick={() => onBuy(product.name)} disabled={product.quantity === 0}>
            {product.quantity === 0 ? 'Out of Stock' : 'Acheter'}
          </Button>

        
          <Button
            onClick={() => onLike(product.name)}
            variant="success"
            className="ms-2"
          >
            {product.like === 1 ? 'Liked' : 'Like'}
          </Button>
          <Button onClick={() => onDislike(product.name)} variant="danger" className="ms-2">
            Dislike
          </Button>

       
          <p className="mt-2">Likes: {product.like}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
