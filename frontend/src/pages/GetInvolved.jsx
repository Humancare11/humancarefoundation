import { useEffect, useState } from "react";
import Banner from "../assets/about.jpg";
import "./GetInvolved.css";
const testimonials = [
  {
    text: "Volunteering here completely changed my perspective. I got to help children directly and saw real impact within weeks.",
    name: "Ankit Sharma",
    role: "Healthcare Volunteer",
  },
  {
    text: "Teaching underprivileged students through this foundation is the most fulfilling experience of my life.",
    name: "Riya Mehta",
    role: "Education Volunteer",
  },
  {
    text: "Skill training programs helped many youth get jobs. Being part of that transformation is priceless.",
    name: "Salman Khan",
    role: "Skill Development Volunteer",
  },
];

export default function GetInvolved() {
     const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <div className="getinvolved-wrapper">

      {/* HERO */}
      <section className="getinvolved-hero">
  <div className="container getinvolved-hero-grid">

    {/* LEFT CONTENT */}
    <div className="getinvolved-hero-content">
      <h1>Get Involved</h1>
      <p>Your support powers healthcare access, medical education, emergency-readiness training, and community empowerment for underserved families</p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="getinvolved-hero-image">
      <img src={Banner} alt="Get Involved" />
    </div>

  </div>
</section>


      {/* ================= DONATE SECTION ================= */}
      <section className="donate-section container">
        <h2>What Your Donation Supports

</h2>

        <p className="donate-desc">
          Your contribution directly transforms lives by enabling healthcare services, education opportunities, and life-saving skill development in vulnerable communities.
        </p>

        {/* <h3>What Your Donation Supports</h3> */}

        <div className="donate-grid">
          <div className="donate-card">
            <h4>Health Kits</h4>
            <p>BBasic medical supplies, hygiene essentials, First Aid items, and nutrition support for families in rural and underserved areas.</p>
          </div>

          <div className="donate-card">
            <h4>Learning Kits</h4>
            <p>Books, stationery, digital access tools, and educational resources that help children continue their studies and learn essential health awareness.</p>
          </div>

          <div className="donate-card">
            <h4>Skill Kits</h4>
            <p>Vocational tools, First Aid & CPR learning materials, and career guidance resources that help youth and women build independent, sustainable livelihoods.</p>
          </div>
        </div>

        <div className="donate-options">
          <button className="btn-primary">Be a Contributor</button>
          {/* <button className="btn-outline-blue">Monthly</button>
          <button className="btn-outline-blue">Corporate</button> */}
        </div>
      </section>

      {/* ================= VOLUNTEER SECTION ================= */}
 <section className="volunteer-section container">

  <div className="volunteer-two-col">

    {/* LEFT SIDE - HEADING + DESC + ROLES */}
    <div className="volunteer-left">

      <h2>Volunteer Join our mission and contribute your time.

</h2>

      <p className="volunteer-desc">
        Join our mission and contribute your time, skills, and passion for social change.
      </p>

      <h3>Volunteer Roles</h3>

      <div className="volunteer-grid">
        <div className="volunteer-card">Healthcare Camp Assistant</div>
        <div className="volunteer-card">Teaching & Mentorship</div>
        <div className="volunteer-card">Skill Training Support</div>
        <div className="volunteer-card">Fundraising & Outreach</div>
      </div>

    </div>

    {/* RIGHT SIDE - FORM ONLY */}
    <div className="volunteer-form-box">
      <h3>Apply As Volunteer</h3>

      <form className="volunteer-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />

        <select>
          <option>Select Role</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Skill Training</option>
          <option>Fundraising</option>
        </select>

        <textarea rows="4" placeholder="Why do you want to volunteer?"></textarea>

        <button className="btn-primary">Submit Application</button>
      </form>
    </div>

  </div>
</section>

        {/* TESTIMONIALS */}
      

      {/* ================= PARTNER WITH US ================= */}
      <section className="partner-section">
        <div className="container">
          <h2>Partner With Us</h2>

          <p className="partner-desc">
            We collaborate with organizations, institutions, and CSR partners to
            create large-scale, sustainable impact.
          </p>

          <div className="partner-grid">
            <div className="partner-card">
              <h4>CSR Collaboration</h4>
              <p>
                Strategic CSR programs focused on healthcare, education, and skill development.
              </p>
            </div>

            <div className="partner-card">
              <h4>Institutional Partnerships</h4>
              <p>
                Schools, colleges, hospitals, and NGOs partnering for community programs.
              </p>
            </div>

            <div className="partner-card">
              <h4>Impact Possibilities</h4>
              <p>
                Scalable projects, joint campaigns, and long-term transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
<section className="testimonial-carousel-section container">
      <h2>Volunteer Testimonials</h2>
      <p className="testimonial-desc">
        Hear from our amazing volunteers who are creating real change.
      </p>

      <div className="testimonial-carousel-box">

        <button className="carousel-btn left" onClick={prevSlide}>
          ‹
        </button>

        <div className="testimonial-slide">
          <p className="testimonial-text">
            “{testimonials[index].text}”
          </p>
          <h4>{testimonials[index].name}</h4>
          <span>{testimonials[index].role}</span>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          ›
        </button>

      </div>
    </section>

    </div>
  );
}
