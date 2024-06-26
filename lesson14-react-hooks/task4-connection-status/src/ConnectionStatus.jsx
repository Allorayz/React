import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [connectionStatus, setConnectionStatus] = useState('online');

  useEffect(() => {
    const setStatusOnline = () => setConnectionStatus('online');
    const setStatusOffline = () => setConnectionStatus('offline');

    window.addEventListener('online', setStatusOnline);
    window.addEventListener('offline', setStatusOffline);

    return () => {
      window.removeEventListener('online', setStatusOnline);
      window.removeEventListener('offline', setStatusOffline);
    };
  }, [connectionStatus]);

  const classes = classNames('status', {
    status_offline: connectionStatus !== 'online',
  });
  return <div className={classes}>{connectionStatus}</div>;

  // if (status === 'online') {
  //   return <div className="status">online</div>;
  // }
  // return <div className="status status_offline">offline</div>;
};

export default ConnectionStatus;
