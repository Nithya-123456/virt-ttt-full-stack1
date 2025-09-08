import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal;

    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', { signal });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    // Cleanup function to abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!user) return null;

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', maxWidth: '400px' }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
}

export default UserProfile;
