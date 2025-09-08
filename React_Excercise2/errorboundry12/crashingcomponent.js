// src/CrashingComponent.js
import React, { useState } from 'react';

function CrashingComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Component crashed!");
  }

  return (
    <div>
      <p>This is a test component.</p>
      <button onClick={() => setCrash(true)}>Crash Me</button>
    </div>
  );
}

export default CrashingComponent;
