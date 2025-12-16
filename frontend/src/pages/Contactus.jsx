
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import "./Contactus.css";
import Banner from "../assets/about.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://humancarefoundationtrust.org/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.status === "success") {
      setStatus("Message Sent Successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
<>


     <section className="contact-hero">
  <div className="container contact-hero-grid">

    {/* LEFT CONTENT */}
    <div className="contact-hero-content">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Let’s connect and create impact together.</p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="contact-hero-image">
      <img src={Banner} alt="Contact Us" />
    </div>

  </div>
</section>

    <section className="contact-section" id="contact">
     

      {/* <h1 className="contact-title">Contact Us</h1>
      <div className="contact-line"></div>

      <p className="contact-text">
        Have questions or want to get involved? We'd love to hear from you.
      </p> */}

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="info-card">
            {/* <div className="icon-box red">
              <Phone size={28} />
            </div>
            <h4>Phone</h4>
            <p>+91 9699999065</p> */}
            <h4>Empowering health. <br/> Enhancing knowledge.</h4>
          </div>

          <div className="info-card">
            <div className="icon-box blue">
              <Mail size={28} />
            </div>
            <h4>Email</h4>
            <p>assist@humancarefoundationtrust.org</p>
          </div>

          <div className="info-card">
            <div className="icon-box purple">
              <MapPin size={28} />
            </div>
            <h4>Address</h4>
            <p>541/544, Dheeraj Heritage, Milan Subway, Junction, SV Rd, Santacruz (West), Mumbai, Maharashtra 400054</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Number"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={5}
              ></textarea>
            </div>

            <button className="send-btn">
              <span>Send Message</span>
            </button>

            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
    <section className="contact-cta">
        <div className="container">
          <h2>Let’s Work Together For A Better Tomorrow</h2>
          <p>Your one message can start a powerful change.</p>
        </div>
      </section>
</>
  );
}
