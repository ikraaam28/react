import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onLike }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={event.img} alt={event.name} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Prix: {event.price} €</Card.Text>
        <Card.Text>Tickets Restants: {event.nbTickets}</Card.Text>
        <Card.Text>Participants: {event.nbParticipants}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onBook(event.id)}
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an Event"}
        </Button>
        <Button
          variant={event.like ? "danger" : "success"}
          onClick={() => onLike(event.id)}
          style={{ marginLeft: "10px" }}
        >
          {event.like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;
