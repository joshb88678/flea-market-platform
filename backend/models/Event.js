const mongoose = require('mongoose');

const StallSchema = new mongoose.Schema({
  number: String,
  price: Number,
  booked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  stalls: [StallSchema],
  ticketsAvailable: Number,
  ticketPrice: Number,
});

module.exports = mongoose.model('Event', EventSchema);
