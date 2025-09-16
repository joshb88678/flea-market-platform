const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/flea-market', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Health check
app.get('/', (req, res) => {
  res.send('Flea Market Backend Running');
});

// Organizer, Customer, Booking, AI endpoints will go here

const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);
const aiRoutes = require('./routes/aiRoutes');
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
