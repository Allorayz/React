import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={20} interval={100} />
      <Counter start={100} interval={20} />
      <Counter start={10} interval={30} />
    </>
  );
};

export default App;
