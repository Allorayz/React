import React from 'react';

const Info = ({ text }) => {
  return !text ? null : <div className={'info'}>{text}</div>;
};

export default Info;
