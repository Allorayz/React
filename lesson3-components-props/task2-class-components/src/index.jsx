import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss'
import Search from './Search';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name={'Bob'}/>, rootElement);
