import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SirovineKontekstProvider } from './context/SirovineContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
      <SirovineKontekstProvider>
          <App />
      </SirovineKontekstProvider>
        </AuthContextProvider>
  </React.StrictMode>
);


