import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrganizerDashboard from './pages/OrganizerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import AIChatbot from './components/AIChatbot';
import './App.css';

function App() {
  return (
    <Router>
      <AIChatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizer" element={<OrganizerDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
