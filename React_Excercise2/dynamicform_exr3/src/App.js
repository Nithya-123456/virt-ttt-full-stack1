import React, { useState } from 'react';

const surveySchema = [
  { id: 'q1', question: 'What is your name?', type: 'text', required: true },
  { id: 'q2', question: 'What is your gender?', type: 'radio', options: ['Male', 'Female', 'Other'], required: true },
  { id: 'q3', question: 'Select your hobbies:', type: 'checkbox', options: ['Reading', 'Sports', 'Music', 'Travel'], required: false }
];

const validateAnswers = (schema, answers) => {
  const errors = {};
  schema.forEach((q) => {
    const value = answers[q.id];
    if (q.required) {
      if (q.type === 'checkbox' && (!value || value.length === 0)) {
        errors[q.id] = 'Please select at least one option';
      } else if (!value || value === '') {
        errors[q.id] = 'This field is required';
      }
    }
  });
  return errors;
};

function App() {
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, option) => {
    setAnswers((prev) => {
      const existing = prev[id] || [];
      const updated = existing.includes(option)
        ? existing.filter((item) => item !== option)
        : [...existing, option];
      return { ...prev, [id]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateAnswers(surveySchema, answers);
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  };

  return (
    <div style={{ maxWidth: 600, margin: '30px auto', fontFamily: 'Arial' }}>
      <h2>Dynamic Survey Form</h2>
      <form onSubmit={handleSubmit}>
        {surveySchema.map((q) => (
          <div key={q.id} style={{ marginBottom: 20 }}>
            <label><strong>{q.question}{q.required && ' *'}</strong></label>
            <div style={{ marginTop: 5 }}>
              {q.type === 'text' && (
                <input
                  type="text"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  style={{ padding: 8, width: '100%' }}
                />
              )}
              {q.type === 'radio' &&
                q.options.map((opt) => (
                  <label key={opt} style={{ display: 'block' }}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                    />{' '}
                    {opt}
                  </label>
                ))}
              {q.type === 'checkbox' &&
                q.options.map((opt) => (
                  <label key={opt} style={{ display: 'block' }}>
                    <input
                      type="checkbox"
                      value={opt}
                      checked={answers[q.id]?.includes(opt)}
                      onChange={() => handleCheckboxChange(q.id, opt)}
                    />{' '}
                    {opt}
                  </label>
                ))}
            </div>
            {errors[q.id] && <div style={{ color: 'red' }}>{errors[q.id]}</div>}
          </div>
        ))}

        <button type="submit" style={{ padding: '10px 20px', fontSize: 16 }}>
          Submit
        </button>
      </form>

      {submitted && (
        <div style={{ marginTop: 20, color: 'green' }}>
          ✅ Form submitted successfully!
        </div>
      )}
    </div>
  );
}

export default App;
