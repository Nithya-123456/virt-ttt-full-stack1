import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step3({ formData, setFormData }) {
  const [password, setPassword] = useState(formData.password);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/step2");
  };

  const handleSubmit = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError("");
    setFormData((prev) => ({ ...prev, password }));

    alert("Registration complete!\n" + JSON.stringify({ ...formData, password }, null, 2));
    navigate("/step1"); // Reset or redirect as needed
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Step 3: Create a Password</h2>
      <input
        type="password"
        placeholder="Password (6+ characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ fontSize: 18, padding: 8, width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleBack}
        style={{ marginTop: 12, padding: "8px 16px", marginRight: 10 }}
      >
        Back
      </button>
      <button onClick={handleSubmit} style={{ marginTop: 12, padding: "8px 16px" }}>
        Submit
      </button>
    </div>
  );
}
