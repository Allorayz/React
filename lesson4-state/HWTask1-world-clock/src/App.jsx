import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'New york'} timeZone={-5} />
      <Clock location={'Kyiv'} timeZone={3} />
      <Clock location={'london'} timeZone={0} />
    </>
  );
};

export default App;
