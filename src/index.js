import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './OgmailClient/app/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './OgmailClient/app/store';

const root = ReactDOM.createRoot(document.getElementById('root') ?? document.body);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);