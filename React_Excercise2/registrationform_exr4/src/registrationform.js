import React, { useRef, useState } from 'react';

function RegistrationForm() {
  // Create refs for each input
  const nameRef = useRef();
  const emailRef = useRef();
  const fileRef = useRef();

  // State to hold selected file name
  const [fileName, setFileName] = useState('');

  // Handle file input change to show file name
  const handleFileChange = () => {
    const file = fileRef.current.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const file = fileRef.current.files[0];

    // Simple validation (optional)
    if (!name || !email || !file) {
      alert('Please fill all fields and upload a file.');
      return;
    }

    alert(`Submitted:
    Name: ${name}
    Email: ${email}
    File: ${file.name}`);

    // Reset the form inputs
    e.target.reset();
    setFileName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameRef} placeholder="Enter your name" />
      </div>

      <div>
        <label>Email: </label>
        <input type="email" ref={emailRef} placeholder="Enter your email" />
      </div>

      <div>
        <label>Upload File: </label>
        <input
          type="file"
          ref={fileRef}
          onChange={handleFileChange}
        />
        {fileName && <p>Selected file: {fileName}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
