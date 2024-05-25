import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './seacr.scss';
import SearchField from './Search';

const rootElement = document.querySelector('#root');

ReactDOM.render(<SearchField name={'Bob'} />, rootElement);
