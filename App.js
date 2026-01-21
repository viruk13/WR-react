// App.js
import React from 'react';
import './App.css'; // make sure the path is correct

function CoreServices() {
  return (
    <section className="core-services">
      <h2>Core Services</h2>
      <p className="subtitle">
        We deliver comprehensive and reliable wind turbine solutions worldwide.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <img src="https://picsum.photos/400/180?random=1" alt="Complete Solutions"/>
          <h3>Complete Solutions for Wind Turbines</h3>
          <p>From inspection and maintenance to full repair services, we cover every aspect of wind turbine operations.</p>
        </div>
        <div className="service-card">
          <img src="https://picsum.photos/400/180?random=2" alt="Single Point Contact"/>
          <h3>Single Point Contact – Wind Turbines</h3>
          <p>A single reliable partner for all turbine services, simplifying coordination and ensuring consistent quality.</p>
        </div>
        <div className="service-card">
          <img src="https://picsum.photos/400/180?random=3" alt="Best Service"/>
          <h3>Committed to Best Service</h3>
          <p>Our experienced teams are dedicated to providing the highest standards of service, safety, and performance.</p>
        </div>
      </div>
    </section>
  );
}

export default CoreServices;
