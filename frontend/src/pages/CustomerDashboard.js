import AIRecommendations from '../components/AIRecommendations';
import React from 'react';
import { Container, Typography } from '@mui/material';
import EventList from '../components/EventList';

const CustomerDashboard = () => (
  <Container maxWidth="md" style={{ marginTop: '2rem' }}>
    <Typography variant="h4" gutterBottom>Customer Dashboard</Typography>
  {/* Event browsing, stall maps, booking UI will go here */}
  <EventList user={null} />
  <AIRecommendations userType="customer" />
  <EventList user={null} />
  </Container>
);

export default CustomerDashboard;
