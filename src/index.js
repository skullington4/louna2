import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages/App/App.jsx';
import { AuthProvider } from "react-auth-kit";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider
  authType={"cookie"}
  authName={"_auth"}
  cookieDomain={window.location.hostname}
  cookieSecure={false}
>
  <React.StrictMode>
      <Router><App /></Router>
  </React.StrictMode>
</AuthProvider>

); 
