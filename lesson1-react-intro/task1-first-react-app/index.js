/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector('#root');

const greeting = React.createElement(
    'div',
    { className: 'gretting' },
    'Hello react!'
    );

ReactDOM.render(greeting, rootElement)

