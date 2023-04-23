import React from "react";
import Map from "../map/Map";
import "./ContactSection.css";
const ContactSection = () => {
  return (
    <section className="gaming__contact-section">
      <main className="gaming__contact-main-content">
        <div className="gaming__contact-details-container">
          <ul className="gaming__contact-details-ul">
            <li>
              <span>Phone Number:</span> 07xx-xxx-xxx
            </li>
            <li>
              <span>Email:</span> someRandomMail@gmail.com
            </li>
            <li>
              <span>Location:</span> Some location
            </li>
          </ul>
        </div>
        <Map />
      </main>
    </section>
  );
};

export default ContactSection;
