function App() {
  return (
    <section className="core-services">
      <h2>Core Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <img
            src="https://picsum.photos/400/180?random=1"
            alt="Complete Solutions"
          />
          <h3>Complete Solutions for Wind Turbines</h3>
          <p>
            End-to-end wind turbine solutions covering inspection,
            maintenance, and repairs.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://picsum.photos/400/180?random=2"
            alt="Single Point Contact"
          />
          <h3>Single Point Contact – Wind Turbines</h3>
          <p>
            One reliable partner managing all turbine services with
            efficiency and accountability.
          </p>
        </div>

        <div className="service-card">
          <img
            src="https://picsum.photos/400/180?random=3"
            alt="Best Service"
          />
          <h3>Committed to Best Service</h3>
          <p>
            Skilled technicians delivering safe, high-quality service
            in all conditions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default App;
