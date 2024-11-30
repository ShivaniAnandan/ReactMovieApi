import React, { useState, useEffect } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Check if the user is already subscribed from localStorage
    const isSubscribed = JSON.parse(localStorage.getItem("subscribed"));
    if (isSubscribed) {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    
    if (subscribed) {
      // If the user is already subscribed, unsubscribe them
      alert("You have successfully unsubscribed!");
      setSubscribed(false); // Change button text and style back to 'Subscribe'
      localStorage.setItem("subscribed", JSON.stringify(false)); // Update the subscription status in localStorage
    } else {
      // If the user is not subscribed, subscribe them
      alert("You have successfully subscribed!");
      setSubscribed(true); // Change button text and style to 'Subscribed'
      localStorage.setItem("subscribed", JSON.stringify(true)); // Store the subscription status in localStorage
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Stay Connected</h2>
        <p className="contact-description">
          Subscribe to our newsletter to stay updated on the latest movies,
          shows, and offers. We’d love to hear from you!
        </p>
        <form className="contact-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            required
          />
          <button type="submit" className={`subscribe-button ${subscribed ? "subscribed" : ""}`}>
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
