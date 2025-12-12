import React, { useState } from 'react';

const MiniContactForm = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay for submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ email: '', message: '' }); // Clear form after success
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="mini-form-message success">
        Thanks! We'll be in touch.
      </div>
    );
  }

  return (
    <>
      <style>{`
        .mini-input {
          width: 60%;
          padding: 0 0.4rem
        }
      `}</style>
      <form onSubmit={handleSubmit} className="mini-contact-form">
        <div>
          <input
            type="email"
            id="mini-email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mini-input"
            disabled={isSubmitting}
          />
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <textarea
            id="mini-message"
            name="message"
            rows={3}
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            className="mini-input"
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`mini-button ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  );
};

export default MiniContactForm;