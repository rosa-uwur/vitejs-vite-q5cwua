import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWorldApp'
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp />
  </React.StrictMode>
);
