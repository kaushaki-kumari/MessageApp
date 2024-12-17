import React from 'react';
import { Link } from 'react-router-dom';
import messages from './Messages.json'; 

const MessageUs = () => {
  return (
    <div className='message_container'>
      <h1 className='message_heading'>Messages</h1>
      <ul className='message_list'>
        {messages.map((message, index) => (
          <li className='message_item' key={index}>
            <Link to={`/message/${index}`}>
              {index} Message
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageUs;
