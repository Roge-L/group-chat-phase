import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-l57tcpxg0e3qpt3k.us.auth0.com"
        clientId="6KAjdvRTDGGzGgLGRJjvURUqH3NBc5Ue"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
