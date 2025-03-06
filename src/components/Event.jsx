import React, { useState } from "react";
import { Card, Col, Button, Alert } from "react-bootstrap";
import useFavoriteStore from "../ZustandStores/useFavoriteStore";

const Event = ({ event, onBook }) => {
  const [message, setMessage] = useState("");
  const { addToFavorites, removeFromFavorites, favorites } = useFavoriteStore(); // ✅ Zustand pour les favoris

  // Vérifier si l'événement est déjà en favoris
  const isFavorite = favorites.some((fav) => fav.id === event.id);

  // Fonction pour gérer la réservation
  const handleBook = () => {
    if (event.nbTickets > 0) {
      onBook(event.id);
      setMessage("You have booked an event!");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  // Fonction pour ajouter/supprimer des favoris
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(event.id);
    } else {
      addToFavorites(event);
    }
  };

  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src={
            event.nbTickets === 0
              ? "/src/assets/sold_out.png"
              : event.img || "/src/assets/placeholder.jpg"
          }
          style={{ width: "200px" }}
        />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price} DT</Card.Text>
          <Card.Text>Tickets left: {event.nbTickets}</Card.Text>
          <Button onClick={handleBook} disabled={event.nbTickets === 0}>
            {event.nbTickets === 0 ? "Sold Out" : "Book an event"}
          </Button>
          <Button onClick={toggleFavorite} variant="secondary" className="ms-2">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
          {message && <Alert variant="success" className="mt-2">{message}</Alert>}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
