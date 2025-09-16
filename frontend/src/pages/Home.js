import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => (
  <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '4rem' }}>
    <Typography variant="h3" gutterBottom>Flea Market Platform</Typography>
    <Button component={Link} to="/organizer" variant="contained" color="primary" style={{ margin: '1rem' }}>Organizer Portal</Button>
    <Button component={Link} to="/customer" variant="contained" color="secondary" style={{ margin: '1rem' }}>Customer Portal</Button>
  </Container>
);

export default Home;
