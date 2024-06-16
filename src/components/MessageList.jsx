import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className={msg.sender}>
          {msg.text ? msg.text : <img src={msg.imageUrl} alt="User upload" />}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
