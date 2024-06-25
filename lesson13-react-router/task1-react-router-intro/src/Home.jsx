import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={'page-content'}>
      <h1>🏠</h1>
      <Link to="/products">To products</Link>
    </div>
  );
};

export default Home;
