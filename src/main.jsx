import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx';

import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="441877564817-1spoqia6hqkaoeivqn3nqhjlbktke1q5.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
