import React from 'react';
import { Link } from 'react-router-dom';

const MessageUs = () => {
  const messages = [
    "I don’t always write CSS, but when I do, it breaks everything.",
    "Just finished the design... why does it look perfect in Chrome, but broken in Other?",
    "I swear this JavaScript works on my machine!",
    "When you finally fix the bug, but the next one is already waiting.",
    "CSS Grid: Looks easy. Feels like a foreign language."
  ];

  return (
    <div className='message_container'>
      <h1 className='message_heading'>Messages</h1>
      <ul className='message_list'>
        {messages.map((message, index) => (
          <li className='message_item' key={index}>
            <Link to={`/message/${index}`}>
              Message {index}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageUs;
