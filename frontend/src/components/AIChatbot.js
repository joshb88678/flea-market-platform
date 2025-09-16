import React, { useState } from 'react';
import { Box, IconButton, TextField, Paper } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // Mock AI response for frontend-only
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: 'ai', text: 'AI: How can I help you with flea market events, stalls, or bookings today?' }]);
    }, 700);
  };

  return (
    <Box position="fixed" bottom={16} right={16} zIndex={9999}>
      {open ? (
        <Paper elevation={4} style={{ width: 320, padding: 16 }}>
          <Box height={200} overflow="auto" mb={2}>
            {messages.map((msg, idx) => (
              <Box key={idx} textAlign={msg.sender === 'user' ? 'right' : 'left'} mb={1}>
                <b>{msg.sender === 'user' ? 'You' : 'AI'}:</b> {msg.text}
              </Box>
            ))}
          </Box>
          <TextField
            fullWidth
            size="small"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? handleSend() : null}
            placeholder="Type your question..."
          />
          <Box mt={1} textAlign="right">
            <IconButton color="primary" onClick={handleSend}><ChatIcon /></IconButton>
            <IconButton color="secondary" onClick={() => setOpen(false)}>X</IconButton>
          </Box>
        </Paper>
      ) : (
        <IconButton color="primary" onClick={() => setOpen(true)}>
          <ChatIcon fontSize="large" />
        </IconButton>
      )}
    </Box>
  );
};

export default AIChatbot;
