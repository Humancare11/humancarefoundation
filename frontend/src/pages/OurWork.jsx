import React from "react";
import "./OurWork.css";
import Test from "../assets/about.jpg";
import Banner from "../assets/about.jpg";


const OurWork = () => {
  return (
    <div className="work-wrapper">

      {/* HERO */}
   <section className="work-hero">
  <div className="container work-hero-grid">

    {/* LEFT CONTENT */}
    <div className="work-hero-content">
      <h1>Our Impact</h1>
      <p>Real stories, real numbers, real transformation</p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="work-hero-image">
      <img src={Banner} alt="Our Impact" />
    </div>

  </div>
</section>


      {/* ================= HEALTHCARE ================= */}
      <section className="program-section card-section">
        <div className="container program-flex">
          <div className="program-content">
            <h2>Healthcare Development</h2>
            <p>
              Healthcare is a human right. Our work ensures medical support reaches
              underserved communities through structured interventions.
            </p>
            <ul>
              <li>Why healthcare access matters</li>
              <li>Mobile health clinics</li>
              <li>Preventive screenings (BP, diabetes, anemia)</li>
              <li>Health awareness programs</li>
              <li>Emergency response training</li>
              <li>Telemedicine access</li>
            </ul>
<a href="/healthcare" className="btn-outline">
  Know More
</a>

          </div>

          <div className="program-img">
            <img src={Test} alt="Healthcare" />
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="program-section card-section alt">
        <div className="container program-flex">

          <div className="program-img">
            <img src={Test} alt="Education" />
          </div>

          <div className="program-content">
            <h2>Education & Knowledge Enhancement</h2>
            <p>
              Education opens the door to opportunity. We enable rural students  
              to learn, grow, and build confident futures.
            </p>
            <ul>
              <li>Scholarships for deserving students</li>
              <li>After-school learning centres</li>
              <li>Digital literacy programs</li>
              <li>School health education</li>
              <li>Community workshops</li>
              <li>Success testimonials</li>
            </ul>
            <a href="/educationdevelopment" className="btn-outline">
  Know More
</a>
          </div>

        </div>
      </section>

      {/* ================= SKILL DEVELOPMENT ================= */}
      <section className="program-section card-section">
        <div className="container program-flex">

          <div className="program-content">
            <h2>Skill Development</h2>
            <p>
              Skill-building empowers youth & women with the confidence and ability  
              to achieve meaningful employment.
            </p>
            <ul>
              <li>Nursing assistant & caregiver training</li>
              <li>Paramedical skill development</li>
              <li>Community health worker programs</li>
              <li>Women-focused vocational skills</li>
              <li>Soft skills & employment support</li>
              <li>Before/after success stories</li>
            </ul>
            <a href="/skilldevelopment" className="btn-outline">
  Know More
</a>
          </div>

          <div className="program-img">
            <img src={Test} alt="Skill Development" />
          </div>

        </div>
      </section>

      {/* ================= RURAL HEALTH ================= */}
      <section className="program-section card-section alt">
        <div className="container program-flex">

          <div className="program-img">
            <img src={Test} alt="Rural Healthcare" />
          </div>

          <div className="program-content">
            <h2>Rural Health Development</h2>
            <p>
              Rural communities deserve stronger health systems. Our initiatives  
              build sustainable health access where it's needed most.
            </p>
            <ul>
              <li>Why rural health is our core mission</li>
              <li>Mobile medical vans</li>
              <li>Strengthening PHCs</li>
              <li>Maternal & child health initiatives</li>
              <li>Telemedicine kiosks</li>
              <li>Village Health Champion program</li>
              <li>Emergency transport solutions</li>
            </ul>
            <a href="/ruralhealthdevelopment" className="btn-outline">
  Know More
</a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default OurWork;
