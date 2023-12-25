// chatbot.routes.js
const express = require('express');

const axios = require('axios');
require('dotenv').config();

const  ChatRoutes=express.Router()
ChatRoutes.post('/chatbot', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const apiKey = process.env.OPENAI_API_KEY;

    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
      {
        prompt: userMessage,
        max_tokens: 50, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    const chatbotResponse = response.data.choices[0].text;

    res.json({ message: chatbotResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = {
    ChatRoutes
}
