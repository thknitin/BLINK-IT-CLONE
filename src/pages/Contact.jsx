import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="contact-item">
            <strong>Phone:</strong>
            <p>+91 7814279210</p>
          </div>

          <div className="contact-item">
            <strong>Email:</strong>
            <p>19nitinkumar910@gmail.com</p>
          </div>

          <div className="contact-item">
            <strong>Address:</strong>
            <p>Zirakpur, Panjab, India - 400001</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Send us a Message</h2>

          {submitted && (
            <div className="contact-success">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </label>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
