// Message.js
import React, { useState, useEffect } from 'react';
import './Message.css';

const Message = ({ content, imageUrl }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Use a timeout to delay the appearance of the message
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className={`message ${showMessage ? 'show' : ''}`}>
      {imageUrl && <img src={imageUrl} alt="Special Gift" />}
      <p>{content}</p>
    </div>
  );
};

export default Message;
