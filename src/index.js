import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './app/App';

console.log('Hello', process.env.REACT_APP_TEST);

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);

root.render(<App />);
