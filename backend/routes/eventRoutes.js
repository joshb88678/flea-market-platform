const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// List all events
router.get('/', async (req, res) => {
  const events = await Event.find().populate('organizer');
  res.json(events);
});

// Create new event (organizer only)
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

// Book a stall (seller)
router.post('/:eventId/book-stall', async (req, res) => {
  const { stallNumber, userId } = req.body;
  const event = await Event.findById(req.params.eventId);
  const stall = event.stalls.find(s => s.number === stallNumber);
  if (stall && !stall.booked) {
    stall.booked = true;
    stall.bookedBy = userId;
    await event.save();
    res.json({ success: true, stall });
  } else {
    res.status(400).json({ success: false, message: 'Stall not available' });
  }
});

// Book a ticket (customer)
router.post('/:eventId/book-ticket', async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (event.ticketsAvailable > 0) {
    event.ticketsAvailable -= 1;
    await event.save();
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Tickets sold out' });
  }
});

module.exports = router;
