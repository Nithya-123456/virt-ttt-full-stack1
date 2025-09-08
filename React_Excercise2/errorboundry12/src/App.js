// src/App.js
import React from 'react';
import ErrorBoundary from './errorBountry';
import CrashingComponent from './crashingcomponent';

function App() {
  return (
    <div>
      <h1>Error Boundary Demo</h1>
      <ErrorBoundary>
        <CrashingComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
