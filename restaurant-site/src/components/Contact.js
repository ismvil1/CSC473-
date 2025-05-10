import React from 'react';

export default function Contact() {
  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
      <form className="mt-4">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Your Message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}
