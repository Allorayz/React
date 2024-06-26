import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <div className={'clock'}>
      <div className={'clock__location'}>
        <Clock location="New York" offset={-5} interval={1000} />
        <Clock location="Kyiv" offset={3} interval={1000} />
        <Clock location="London" offset={0} interval={1000} />
      </div>
    </div>
  );
};
export default App;
