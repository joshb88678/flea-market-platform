import AIRecommendations from '../components/AIRecommendations';

import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import { fetchEvents } from '../api';

const OrganizerDashboard = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', date: '', location: '', ticketPrice: 0, ticketsAvailable: 0 });

  const loadEvents = async () => {
    const data = await fetchEvents();
    setEvents(data);
  };

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    // TODO: Call backend to create event
    setShowForm(false);
    loadEvents();
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Organizer Dashboard</Typography>
      <Button variant="contained" color="primary" onClick={() => setShowForm(true)}>Add New Event</Button>
      {showForm && (
        <Box mt={2}>
          <TextField name="name" label="Event Name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
          <TextField name="date" label="Date" type="date" value={form.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
          <TextField name="location" label="Location" value={form.location} onChange={handleChange} fullWidth margin="normal" />
          <TextField name="ticketPrice" label="Ticket Price" type="number" value={form.ticketPrice} onChange={handleChange} fullWidth margin="normal" />
          <TextField name="ticketsAvailable" label="Tickets Available" type="number" value={form.ticketsAvailable} onChange={handleChange} fullWidth margin="normal" />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Create Event</Button>
        </Box>
      )}
  {/* List events here */}
  <AIRecommendations userType="organizer" />
    </Container>
  );
};

export default OrganizerDashboard;
