import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Concert Rock",
      description: "Un concert de rock inoubliable",
      img: "https://via.placeholder.com/150",
      price: 50,
      nbTickets: 5,
      nbParticipants: 0,
      like: false,
    },
    {
      id: 2,
      name: "Atelier Peinture",
      description: "Découvrez votre talent artistique",
      img: "https://via.placeholder.com/150",
      price: 30,
      nbTickets: 0,
      nbParticipants: 10,
      like: false,
    },
  ]);

  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id && event.nbTickets > 0
          ? {
              ...event,
              nbTickets: event.nbTickets - 1,
              nbParticipants: event.nbParticipants + 1,
            }
          : event
      )
    );
  };

  const handleLike = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, like: !event.like } : event
      )
    );
  };

  return (
    <Container>
      {showWelcome && <Alert variant="success">Bienvenue aux événements !</Alert>}
      <Row>
        {events.map((event) => (
          <Col key={event.id}>
            <Event event={event} onBook={handleBook} onLike={handleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
