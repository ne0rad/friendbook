import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import App from './App';
import { SocketContext, socket } from "./config/context";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
