import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inbox = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from the server for the logged-in user
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${userId}`);
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [userId]);

  return (
    <div>
      <h2>Your Inbox</h2>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            From: {message.sender.name} | To: {message.receiver.name}
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
