import React, { useRef, useState } from 'react';

function App() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use FormData to get values from the uncontrolled form
    const formData = new FormData(formRef.current);

    const username = formData.get('username');
    const email = formData.get('email');
    const file = fileInputRef.current.files[0];

    alert(`Username: ${username}\nEmail: ${email}\nFile: ${file ? file.name : 'No file selected'}`);

    // Reset the form and file name state
    formRef.current.reset();
    setFileName('');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Registration Form</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <label>
            Username:<br />
            <input name="username" type="text" required style={{ width: '100%', padding: 8 }} />
          </label>
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>
            Email:<br />
            <input name="email" type="email" required style={{ width: '100%', padding: 8 }} />
          </label>
        </div>
        <div style={{ marginBottom: 15 }}>
          <label>
            Upload file:<br />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ width: '100%' }}
            />
          </label>
          {fileName && <p>Selected file: <strong>{fileName}</strong></p>}
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: 16 }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
