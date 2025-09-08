import React, { useState } from 'react';

// Reusable Panel Component
const Panel = ({ title, description, borderColor }) => (
  <div style={{ border: `2px solid ${borderColor}`, padding: 15, borderRadius: 8, marginTop: 10 }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Role-based Panels data
const panels = {
  admin: {
    title: 'Admin Panel',
    description: 'Manage Users, Settings, and Site Configuration.',
    borderColor: 'crimson',
  },
  editor: {
    title: 'Editor Panel',
    description: 'Create and Edit Content for the Website.',
    borderColor: 'seagreen',
  },
  viewer: {
    title: 'Viewer Panel',
    description: 'View content with limited permissions.',
    borderColor: 'royalblue',
  },
};

function App() {
  const [role, setRole] = useState('viewer');

  const handleRoleChange = (e) => setRole(e.target.value);

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Role-Based Dashboard</h1>
      <label>
        Select Role:{' '}
        <select value={role} onChange={handleRoleChange} style={{ padding: 5, fontSize: 16 }}>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="viewer">Viewer</option>
        </select>
      </label>

      <hr />

      {/* Conditional Rendering using if-else style with ternary */}
      <section>
        <h2>If-Else / Ternary Rendering</h2>
        {role === 'admin' ? (
          <Panel {...panels.admin} />
        ) : role === 'editor' ? (
          <Panel {...panels.editor} />
        ) : (
          <Panel {...panels.viewer} />
        )}
      </section>

      <hr />

      {/* Conditional Rendering using && operator */}
      <section>
        <h2>Logical AND (&&) Rendering</h2>
        {role === 'admin' && <Panel {...panels.admin} />}
        {role === 'editor' && <Panel {...panels.editor} />}
        {role === 'viewer' && <Panel {...panels.viewer} />}
      </section>
    </div>
  );
}

export default App;
