import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MessageDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const messages = [
    "I don’t always write CSS, but when I do, it breaks everything.",
    "Just finished the design... why does it look perfect in Chrome, but broken in Other?",
    "I swear this JavaScript works on my machine!",
    "When you finally fix the bug, but the next one is already waiting.",
    "CSS Grid: Looks easy. Feels like a foreign language."
  ];

  const message = messages[id]; 

  if (!message) {
    return <p>Message not found.</p>; 
  }

  return (
    <div className='message_detail'>
      <h2 className='heading'>😲😲 </h2>
      <p>{message}</p>
      <button className='message_btn' onClick={() => navigate(-1)}>Go Back</button> 
    </div>
  );
};

export default MessageDetail;
