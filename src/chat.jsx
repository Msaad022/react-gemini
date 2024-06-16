import React, { useState } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import ImageUpload from './components/ImageUpload';
import { sendMessage } from './apiService';
import { uploadImage } from './components/firebaseService';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    const userMessage = { text: message, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await sendMessage(message);
      const aiMessage = { text: response.reply, sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await uploadImage(file);
      const userMessage = { imageUrl, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Assuming your AI can handle image URLs and give a response.
      const response = await sendMessage(imageUrl);
      const aiMessage = { text: response.reply, sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
      <ImageUpload onUpload={handleImageUpload} />
    </div>
  );
};

export default Chat;
