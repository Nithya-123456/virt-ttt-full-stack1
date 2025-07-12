import React from 'react';

function ClickButton() {
  const handleClick = () => {
    console.log("Happy morning");
  };

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

export default ClickButton;