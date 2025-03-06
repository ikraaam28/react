import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents, deleteEvent } from '../Service/api';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      console.log('Events fetched:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteEvent(id);
    fetchEvents();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Liste des Événements</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.price}</td>
              <td>
                <Link to={`/edit-event/${event._id}`}>Modifier</Link>
                <button onClick={() => handleDelete(event._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
