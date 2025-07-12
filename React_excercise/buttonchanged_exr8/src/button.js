import React from 'react';

function InputLogger() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Welcome ..." />
    </div>
  );
}

export default InputLogger;