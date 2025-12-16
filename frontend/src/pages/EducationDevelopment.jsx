import React from "react";
import "./EducationDevelopment.css";
import Contact from "../component/Contact";
import Banner from "../assets/about.jpg";
import Statestics from "../component/Statestics";


const EducationDevelopment = () => {
  return (
    <div className="education-wrapper">

      {/* HERO */}
    <section className="education-hero">
  <div className="container education-hero-grid">

    {/* LEFT CONTENT */}
    <div className="education-hero-content">
      <h1>Education Development</h1>
      <p>
       Empowering students and youth especially from rural communities with medical awareness, nursing education exposure, emergency-life-saving skills, and learning opportunities that help them grow with confidence and build a healthier, informed future.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="education-hero-image">
      <img src={Banner} alt="Education Development" />
    </div>

  </div>
</section>


      {/* INTRO */}
      <section className="education-intro container">
        <h2>Our Education Mission</h2>
        <p>
       We work to break barriers that limit learning for underserved communities. By expanding access to medical awareness, nursing education exposure, life-saving emergency skills, and essential learning support, we empower individuals to grow with confidence, knowledge, and a stronger sense of purpose.
        </p>
      </section>

      {/* EDUCATION PROGRAMS */}
      <section className="education-programs container">
        <h2 className="section-title">Education & Knowledge Enhancement</h2>

        <div className="education-grid">

          <div className="education-card">
            <h3>Scholarships for Deserving Studentss</h3>
            <p>
             Financial support for students—especially from rural backgrounds—who aspire to pursue healthcare-related studies or skill-based learning but lack resources.
            </p>
          </div>

          <div className="education-card">
            <h3>After-School Learning Support</h3>
            <p>
            Guided learning centers that help children and youth strengthen academics, gain medical awareness, and build foundational confidence in underserved regions.
            </p>
          </div>

          <div className="education-card">
            <h3>Digital Literacy Programs</h3>
            <p>
        Training students in digital tools, online learning, and safe internet use to help them access educational resources, health information, and skill development platforms.
            </p>
          </div>

          <div className="education-card">
            <h3>Health & Hygiene Education in Schools</h3>
            <p>
Educating children on hygiene, nutrition, menstrual health, basic first-response awareness, and healthy habits that protect them throughout life.            </p>
          </div>

          <div className="education-card">
            <h3>Community Awareness Workshops</h3>
            <p>
             Awareness sessions on health, emergency readiness (CPR/First Aid basics), education, social responsibility, and life skills, ensuring communities grow informed and resilient.

            </p>
          </div>

        </div>
      </section>

             <Statestics />
      

      {/* IMPACT */}
      <section className="education-impact">
        <div className="container">
          <h2>Our Education Impact</h2>
          <p>
           Thousands of students and young individuals have gained access to academic support, health awareness, emergency-life-saving skills, and foundational medical learning through our programs helping them grow with confidence and transform their future opportunities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="education-cta">
        <div className="container">
          <h2>Support Education Development</h2>
          <p>
      Your support helps us provide medical education exposure, CPR & First Aid training, skill development, and learning opportunities for children and youth especially in rural and underserved communities building a stronger, healthier, and empowered generation.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">Donate for Education</button>
            <button className="btn-outline">Volunteer as Trainer</button>
          </div>
        </div>
      </section>
<Contact />
    </div>
  );
};

export default EducationDevelopment;
