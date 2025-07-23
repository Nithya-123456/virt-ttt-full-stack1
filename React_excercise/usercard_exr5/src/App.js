import React from 'react';
import UserCard from './usercar';

function App() {
  return (
    <div>
      <UserCard name="Nithya" age={40} />
      <UserCard name="John" age={30} />
    </div>
  );
}

export default App;