import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const fetchEvents = async () => {
  const res = await axios.get(`${API_BASE}/events`);
  return res.data;
};

export const bookStall = async (eventId, stallNumber, userId) => {
  return axios.post(`${API_BASE}/events/${eventId}/book-stall`, { stallNumber, userId });
};

export const bookTicket = async (eventId) => {
  return axios.post(`${API_BASE}/events/${eventId}/book-ticket`);
};

export const aiChat = async (message) => {
  const res = await axios.post(`${API_BASE}/ai/chat`, { message });
  return res.data.reply;
};
