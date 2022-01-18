import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import MovieContextProvider from './context/MovieContext'
import LoadContextProvider from './context/LoadContext'
import AuthContextProvider from './context/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoadContextProvider>
        <BrowserRouter>
          <MovieContextProvider>
            <App />
          </MovieContextProvider>
        </BrowserRouter>
      </LoadContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

