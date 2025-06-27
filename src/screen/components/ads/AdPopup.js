import React, { useState, useEffect } from "react";
import "./AdPopup.css";

const AdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the ad popup when the component mounts
    setIsVisible(true);
  }, []);

  const closeAd = () => {
    // Hide the ad popup when the close button is clicked
    setIsVisible(false);
    window.open(
      "https://www.highrevenuenetwork.com/pyg51qud18?key=15bab2385f025fbdd3793dde84f52695"
    );
  };

  if (!isVisible) {
    return null; // Don't render anything if the popup is not visible
  }

  return (
    <div className="ad-popup">
      <div className="ad-popup-content">
        <button className="ad-popup-close" onClick={closeAd}>
          &times;
        </button>
        <strong>HUNGRY?</strong>
        <p>FEED YOUR SHOO APPETITE!</p>
        <h1>10% OFF</h1>
        <a
          href="https://www.highrevenuenetwork.com/pyg51qud18?key=15bab2385f025fbdd3793dde84f52695"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ width: "100%" }}
            src="https://i.pinimg.com/736x/e9/57/37/e95737e4832582082850c1b2b697f946.jpg"
            alt="Special Deals and Discounts"
          />
        </a>
        <input
          type="email"
          placeholder="Enter your email to unlock this deal..."
        />
        <button className="ad-popup-feed-me">FEED ME</button>
      </div>
    </div>
  );
};

export default AdPopup;
