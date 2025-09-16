
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const mockEvents = [
  {
    _id: '1',
    name: 'Downtown Flea Market',
    date: '2025-09-20',
    location: 'Central Park',
    ticketsAvailable: 50,
    ticketPrice: 10,
    stalls: [
      { number: 'A1', price: 30, booked: false },
      { number: 'A2', price: 30, booked: true },
      { number: 'B1', price: 25, booked: false },
    ],
  },
  {
    _id: '2',
    name: 'Weekend Bazaar',
    date: '2025-09-27',
    location: 'Riverside',
    ticketsAvailable: 80,
    ticketPrice: 8,
    stalls: [
      { number: 'C1', price: 20, booked: false },
      { number: 'C2', price: 20, booked: false },
      { number: 'D1', price: 15, booked: true },
    ],
  },
];


const EventList = ({ user }) => {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [applyType, setApplyType] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleOpenDetails = event => {
    setSelectedEvent(event);
    setOpenDetails(true);
  };
  const handleCloseDetails = () => {
    setOpenDetails(false);
    setSelectedEvent(null);
  };

  const handleOpenApply = (type, event) => {
    setApplyType(type);
    setSelectedEvent(event);
    setOpenApply(true);
  };
  const handleCloseApply = () => {
    setOpenApply(false);
    setForm({ name: '', email: '', phone: '', message: '' });
    setSelectedEvent(null);
  };

  const handleFormChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmitApply = () => {
    // Mock sending details to organizer
    alert(`Application submitted to organizer for ${applyType} at ${selectedEvent.name}!\nDetails: ${JSON.stringify(form, null, 2)}`);
    handleCloseApply();
  };

  return (
    <>
      <Grid container spacing={2}>
        {events.map(event => (
          <Grid item xs={12} md={6} key={event._id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{event.name}</Typography>
                <Typography>Date: {new Date(event.date).toLocaleDateString()}</Typography>
                <Typography>Location: {event.location}</Typography>
                <Typography>Tickets Available: {event.ticketsAvailable}</Typography>
                <Typography>Ticket Price: ${event.ticketPrice}</Typography>
                <Button variant="outlined" color="primary" onClick={() => handleOpenDetails(event)} style={{ margin: '0.5rem' }}>View Details</Button>
                <Button variant="contained" color="secondary" onClick={() => handleOpenApply('ticket', event)} style={{ margin: '0.5rem' }}>Apply for Ticket</Button>
                <Typography variant="subtitle1">Stalls:</Typography>
                {event.stalls.map(stall => (
                  <Button
                    key={stall.number}
                    variant="outlined"
                    color={stall.booked ? 'default' : 'primary'}
                    disabled={stall.booked}
                    onClick={() => handleOpenApply('stall', event)}
                    style={{ margin: '0.25rem' }}
                  >
                    Stall {stall.number} (${stall.price}) {stall.booked ? 'Booked' : 'Available'}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Event Details Modal */}
      <Dialog open={openDetails} onClose={handleCloseDetails} maxWidth="sm" fullWidth>
        <DialogTitle>Event Details</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <>
              <Typography variant="h6">{selectedEvent.name}</Typography>
              <Typography>Date: {new Date(selectedEvent.date).toLocaleDateString()}</Typography>
              <Typography>Location: {selectedEvent.location}</Typography>
              <Typography>Tickets Available: {selectedEvent.ticketsAvailable}</Typography>
              <Typography>Ticket Price: ${selectedEvent.ticketPrice}</Typography>
              <Typography variant="subtitle1">Stalls:</Typography>
              {selectedEvent.stalls.map(stall => (
                <Typography key={stall.number}>
                  Stall {stall.number} - ${stall.price} {stall.booked ? '(Booked)' : '(Available)'}
                </Typography>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Application Modal */}
      <Dialog open={openApply} onClose={handleCloseApply} maxWidth="sm" fullWidth>
        <DialogTitle>Apply for {applyType === 'stall' ? 'Stall' : 'Ticket'}</DialogTitle>
        <DialogContent>
          <TextField name="name" label="Name" value={form.name} onChange={handleFormChange} fullWidth margin="normal" />
          <TextField name="email" label="Email" value={form.email} onChange={handleFormChange} fullWidth margin="normal" />
          <TextField name="phone" label="Phone" value={form.phone} onChange={handleFormChange} fullWidth margin="normal" />
          <TextField name="message" label="Message to Organizer" value={form.message} onChange={handleFormChange} fullWidth margin="normal" multiline rows={2} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApply}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmitApply}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EventList;
