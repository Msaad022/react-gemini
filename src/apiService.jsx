import axios from 'axios';

const API_KEY = 'AIzaSyBZnXEzYt4zAv8I623uZ9OESjmbrQ6i8pI';
const BASE_URL = 'https://gemini.googleapis.com/v1/chat/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  }
});

export const sendMessage = async (message) => {
  try {

    const response = await api.post('/', { query: message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
