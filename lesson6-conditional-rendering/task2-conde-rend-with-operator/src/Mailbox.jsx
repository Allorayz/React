import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <span className="mailbox">
      <span className="mailbox__text">
        Messages
        {unreadMessages.length > 0 && (
          <span className="mailbox__count">{unreadMessages.length}</span>
        )}
      </span>
    </span>
  );
};

export default Mailbox;
