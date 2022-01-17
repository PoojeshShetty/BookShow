import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import MovieContextProvider from './context/MovieContext'
import LoadContextProvider from './context/LoadContext'

ReactDOM.render(
  <React.StrictMode>
    <LoadContextProvider>
      <BrowserRouter>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </BrowserRouter>
    </LoadContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

