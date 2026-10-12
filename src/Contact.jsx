import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-intro">
        We'd love to hear from you! Have a question about your
        order or our collection? Get in touch with us.
      </p>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>support@trendycloset.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Address</h3>
              <p>Chengalpattu, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Subject</label>
            <input type="text" placeholder="Enter subject" />

            <label>Message</label>
            <textarea placeholder="Write your message here..." />

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Contact;