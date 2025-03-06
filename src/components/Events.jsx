import React, { useEffect, useState } from "react";
import { Row, Alert, Container, Col } from "react-bootstrap";
import Event from "./Event";
import useEventStore from "../ZustandStores/useEventStores";

const Events = () => {
  const { events, fetchEvents, updateEventObject } = useEventStore(); // ✅ Zustand gère les événements
  const [showWelcome, setShowWelcome] = useState(true);
  const [message, setMessage] = useState("");

  // Charger les événements depuis Zustand au montage du composant
  useEffect(() => {
    fetchEvents();
    
    // Masquer le message de bienvenue après 2 secondes
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour réserver un événement
  const handleBook = async (eventId) => {
    const event = events.find((e) => e.id === eventId);

    if (event && event.nbTickets > 0) {
      try {
        // Créer un nouvel événement mis à jour avec nbTickets - 1
        const updatedEvent = {
          ...event,
          nbTickets: event.nbTickets - 1,
          nbParticipants: event.nbParticipants + 1,
        };

        console.log("Mise à jour de l'événement :", updatedEvent);

        // Mettre à jour l'état global dans Zustand
        updateEventObject(updatedEvent);

        setMessage("You have booked an event!");
        setTimeout(() => setMessage(""), 2000);
      } catch (error) {
        console.error("Erreur lors de la réservation :", error);
      }
    }
  };

  return (
    <>
      {showWelcome && <Alert variant="success">Bienvenue aux événements !</Alert>}
      {message && <Alert variant="info">{message}</Alert>}
      <Container>
        <Row>
          {events.map((event) => (
            <Col key={event.id} md={4}>
              <Event event={event} onBook={() => handleBook(event.id)} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Events;
