import React, { useState, useEffect } from 'react';
import { Row, Alert, Container } from 'react-bootstrap';
import Product from '../atelier2/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);  // État pour afficher l'alerte de bienvenue

  useEffect(() => {
    // Charger les produits depuis le fichier JSON
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.products));

    // Afficher l'alerte pendant 3 secondes puis la cacher
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);  // Nettoyage du timer au démontage
  }, []);

  const handleBuy = (productName) => {
    setProducts(products.map(product =>
      product.name === productName && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  const handleLike = (productName) => {
    setProducts(products.map(product =>
      product.name === productName && product.like === 0
        ? { ...product, like: 1 }  // Si pas liké, le liker
        : product
    ));
  };

  const handleDislike = (productName) => {
    setProducts(products.map(product =>
      product.name === productName
        ? { ...product, like: 0 } // Le dislike remet le like à 0
        : product
    ));
  };

  return (
    <Container>
     
      {showWelcome && (
        <Alert variant="success" onClose={() => setShowWelcome(false)} dismissible>
           Bienvenue sur la page des produits !
        </Alert>
      )}

      <Row>
        {products.map(product => (
          <Product
            key={product.name}
            product={product}
            onBuy={handleBuy}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
