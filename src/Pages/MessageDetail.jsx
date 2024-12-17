import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import messages from './Messages.json';

const MessageDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
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
