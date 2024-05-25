import React from 'react';

const Greeting = props => {
  const age = new Date().getFullYear() - props.birthDate.getFullYear();
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I am ${age} years old`}
    </div>
  );
};

export default Greeting;
