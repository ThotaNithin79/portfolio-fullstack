import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdEmail, MdPhone } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // New state to manage loading status of the form submission
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const notification = toast.loading('Sending your message...'); // Show loading toast

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Message sent successfully!', { id: notification }); // Show success toast
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        toast.error('Failed to send message. Please try again.', { id: notification }); // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please check your connection.', { id: notification }); // Show network error toast
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  return (
    <section id="contact" className="contact-container">
      <h2>Get In Touch</h2>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out to me via email or phone. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of an amazing team.
          </p>
          <div className="info-item">
            <MdEmail className="info-icon" />
            <a href="mailto:nithinthota79@gmail.com">nithinthota79@gmail.com</a>
          </div>
          <div className="info-item">
            <MdPhone className="info-icon" />
            <span>+91 6300056382</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;