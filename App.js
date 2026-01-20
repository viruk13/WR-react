import React from "react";
import "./App.css";

// Font Awesome icons
import { FaIndustry, FaHardHat } from "react-icons/fa";

// Feather icons
import {
  FiCpu,
  FiTool,
  FiUsers,
  FiSmartphone,
  FiSettings,
} from "react-icons/fi";

/* ================= SERVICES ================= */
const services = [
  {
    title: "Inspecta",
    desc: "Advanced wind turbine inspection platform with cutting-edge tech.",
    icon: <FiCpu />,
    bg: "#e0f7f4",
  },
  {
    title: "i-Drones Inspection",
    desc: "Drone-based inspections for towers and blades with HD imaging.",
    icon: <FiSmartphone />,
    bg: "#f0f9f8",
  },
  {
    title: "Netra Crawler",
    desc: "Robotic crawler for detailed internal blade inspections.",
    icon: <FiSettings />,
    bg: "#e0f7f4",
  },
  {
    title: "Service & Repair",
    desc: "Rapid and reliable turbine service and repair solutions.",
    icon: <FiTool />,
    bg: "#f0f9f8",
  },
  {
    title: "Man Power Supply",
    desc: "Skilled technicians for turbine maintenance and support.",
    icon: <FiUsers />,
    bg: "#e0f7f4",
  },
];

/* ================= TECHNOLOGY ================= */
const technologies = [
  {
    title: "Drone Inspections",
    desc: "High-resolution aerial inspection for early fault detection.",
    icon: <FiSmartphone />,
    bg: "#f0f9f8",
  },
  {
    title: "AI Image Analysis",
    desc: "Automated image processing to detect blade damage and structural issues.",
    icon: <FiCpu />,
    bg: "#e0f7f4",
  },
  {
    title: "Robotic Crawlers",
    desc: "Safe, precise internal inspections with minimal downtime.",
    icon: <FiSettings />,
    bg: "#f0f9f8",
  },
];

/* ================= WHY CHOOSE ================= */
const whyChoose = [
  {
    title: "Industry-Leading Expertise",
    desc: "WindReview combines decades of experience in wind turbine inspections, maintenance, and repair. Our team ensures the highest safety and quality standards.",
    icon: <FaIndustry />,
    bg: "#e0f7f4",
  },
  {
    title: "Safety-First Operations",
    desc: "We prioritize safety above all else. Remote inspections and rope access minimize risk for personnel and assets.",
    icon: <FaHardHat />, // ✅ FIXED ICON
    bg: "#f0f9f8",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "AI-driven image analysis, drones, and robotic crawlers deliver precise insights.",
    icon: <FiCpu />,
    bg: "#e0f7f4",
  },
  {
    title: "Reduced Downtime & Costs",
    desc: "Early detection helps reduce downtime and avoid costly repairs.",
    icon: <FiTool />,
    bg: "#f0f9f8",
  },
  {
    title: "Scalable Solutions",
    desc: "From single turbines to full wind farms, our services scale to your needs.",
    icon: <FiUsers />,
    bg: "#e0f7f4",
  },
];

/* ================= APP ================= */
function App() {
  return (
    <div className="windreview-app">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Precision Inspections, Reliable Repairs</h1>
        <p className="hero-subtitle">
          Complete inspection, maintenance, and repair solutions for wind
          turbines.
        </p>
        <button className="hero-cta">Contact Us</button>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="section-heading">Our Core Services</h2>
        <div className="service-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="card-icon" style={{ background: s.bg }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section>
        <h2 className="section-heading">Our Technology</h2>
        <div className="service-grid">
          {technologies.map((t, i) => (
            <div className="service-card" key={i}>
              <div className="card-icon" style={{ background: t.bg }}>
                {t.icon}
              </div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <h2 className="section-heading">Why Choose WindReview?</h2>
        <div className="why-grid">
          {whyChoose.map((w, i) => (
            <div className="why-card" key={i}>
              <div className="card-icon" style={{ background: w.bg }}>
                {w.icon}
              </div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Request an Inspection Today</h2>
        <button className="hero-cta">Contact Us</button>
      </section>
    </div>
  );
}

export default App;
