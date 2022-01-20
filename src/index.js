import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import MovieContextProvider from './context/MovieContext'
import LoadContextProvider from './context/LoadContext'
import AuthContextProvider from './context/AuthContext'
import ThemeContextProvider from './context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <LoadContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <MovieContextProvider>
              <App />
            </MovieContextProvider>
          </BrowserRouter>
        </ThemeContextProvider>
      </LoadContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

