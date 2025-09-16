const express = require('express');
const router = express.Router();

const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || 'sk-PLACEHOLDER' });

// Chatbot endpoint
router.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });
    res.json({ reply: completion.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: 'AI service error', details: err.message });
  }
});

// Recommendation endpoint (stub)
router.post('/recommend', async (req, res) => {
  // Use user/event data to generate recommendations
  res.json({ recommendations: ['Event A', 'Event B'] });
});

module.exports = router;
