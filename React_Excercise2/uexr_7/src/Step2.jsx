import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step2({ formData, setFormData }) {
  const [email, setEmail] = useState(formData.email);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    setFormData((prev) => ({ ...prev, email }));
    navigate("/step3");
  };

  const handleBack = () => {
    navigate("/step1");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Step 2: Enter your Email</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ fontSize: 18, padding: 8, width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleBack}
        style={{ marginTop: 12, padding: "8px 16px", marginRight: 10 }}
      >
        Back
      </button>
      <button onClick={handleNext} style={{ marginTop: 12, padding: "8px 16px" }}>
        Next
      </button>
    </div>
  );
}
