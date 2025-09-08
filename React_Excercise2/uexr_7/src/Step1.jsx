import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Step1({ formData, setFormData }) {
  const [name, setName] = useState(formData.name);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    setError("");
    setFormData((prev) => ({ ...prev, name }));
    navigate("/step2");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Step 1: Enter your Name</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ fontSize: 18, padding: 8, width: "100%" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleNext} style={{ marginTop: 12, padding: "8px 16px" }}>
        Next
      </button>
    </div>
  );
}
