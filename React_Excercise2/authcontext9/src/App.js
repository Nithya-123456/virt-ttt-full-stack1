// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
