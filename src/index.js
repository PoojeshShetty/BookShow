import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import MovieContextProvider from './context/MovieContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieContextProvider>
        <App />
      </MovieContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

