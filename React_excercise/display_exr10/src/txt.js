import React, { useState } from 'react';

function TextInputDisplay() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Live Text Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
      />
      <p>Current value: {text}</p>
    </div>
  );
}export default TextInputDisplay;