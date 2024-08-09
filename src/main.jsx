import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QuizProvider } from './context/quiz';
import { AuthProvider } from './user_authentication/src/contexts/auth';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './user_authentication/src/routes/index.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuizProvider>
          <RoutesApp />
        </QuizProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
