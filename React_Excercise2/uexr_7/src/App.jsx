import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Step1" replace />} />
        <Route
          path="/step1"
          element={<Step1 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/step2"
          element={<Step2 formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/step3"
          element={<Step3 formData={formData} setFormData={setFormData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
