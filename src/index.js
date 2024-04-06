import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<Auth0Provider
    domain="dev-5miunrmxxsnymk33.us.auth0.com"
    clientId="l9uWEdH9SLf7TtZ8JhPnElCCkY0EkxfM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </React.StrictMode>

  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
