import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'New york'} timeZone={-5} interval={1000} />
      <Clock location={'Kyiv'} timeZone={2} interval={1000} />
      <Clock location={'london'} timeZone={0} interval={1000} />
    </>
  );
};

export default App;
