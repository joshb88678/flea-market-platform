
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, CircularProgress } from '@mui/material';

const AIRecommendations = ({ userType }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState('');

  const handleRecommend = () => {
    setLoading(true);
    setTimeout(() => {
      let reply = '';
      if (userType === 'organizer') {
        reply = `AI Suggestion: Set premium stall pricing for high-traffic areas. Consider a mix of $30 and $20 stalls. Use a grid layout for easy navigation. Promote early bird discounts.`;
      } else {
        reply = `AI Recommendation: Visit Downtown Flea Market for unique antiques. Book Stall A1 for best visibility. Try Weekend Bazaar for food stalls and crafts.`;
      }
      setRecommendations(reply);
      setLoading(false);
    }, 1200);
  };

  return (
    <Box mt={4}>
      <Typography variant="h6">AI Recommendations</Typography>
      <TextField
        label={userType === 'organizer' ? 'Describe your event' : 'Describe your interests'}
        value={input}
        onChange={e => setInput(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleRecommend} disabled={loading}>
        Get Recommendations
      </Button>
      {loading && <CircularProgress size={24} style={{ marginLeft: 16 }} />}
      {recommendations && (
        <Box mt={2}>
          <Typography variant="body1">{recommendations}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default AIRecommendations;
