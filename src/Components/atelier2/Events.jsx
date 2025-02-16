import React, { useState, useEffect } from 'react';
import { Row, Alert, Container } from 'react-bootstrap';
import Event from '../atelier2/Event';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data));
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (eventName) => {
    setEvents(events.map(event => 
      event.name === eventName
        ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
        : event
    ));
  };

  return (
    <Container>
      {showWelcome && <Alert variant="info">Bienvenue sur la page des événements !</Alert>}
      <Row>
        
        {events.map(event => <Event key={event.name} event={event} onBook={handleBook} />)}
       
      </Row>
      </Container>
  );
};

export default Events;