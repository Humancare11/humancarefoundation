import React from "react";
import "./RuralHealthDevelopment.css";
import Contact from "../component/Contact";
import Banner from "../assets/about.jpg";
import Statestics from "../component/Statestics";


const RuralHealthDevelopment = () => {
  return (
    <div className="rural-wrapper">

      {/* HERO */}
     <section className="rural-hero">
  <div className="container rural-hero-grid">

    {/* LEFT CONTENT */}
    <div className="rural-hero-content">
      <h1>Rural Health Development</h1>
      <p>
        Strengthening rural communities by improving access to essential healthcare, building emergency readiness through CPR and First Aid training, and expanding medical awareness so families in remote areas can stay informed, prepared, and healthier.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="rural-hero-image">
      <img src={Banner} alt="Rural Health Development" />
    </div>

  </div>
</section>


      {/* INTRO */}
      <section className="rural-intro container">
        <h2>Our Rural Health Mission</h2>
        <p>
         Rural communities face the greatest healthcare challenges due to limited facilities, low awareness, and scarce emergency support. Our mission is to strengthen rural health systems by improving access to essential care, building emergency readiness through CPR & First Aid awareness, and bringing medical guidance directly to villages where it is needed the most.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="rural-services container">

        <div className="rural-grid">

          <div className="rural-card">
            <h3>Mobile Health Clinics</h3>
            <p>
             Bringing essential checkups, basic treatment, and health awareness sessions to remote villages through regular camps and mobile medical units.
            </p>
          </div>

          <div className="rural-card">
            <h3>Strengthening PHCs & Sub-Centers</h3>
            <p>
             Supporting rural health centres with essential equipment, manpower training, and medical supplies to improve their ability to serve local communities.
            </p>
          </div>

          <div className="rural-card">
            <h3>Maternal & Child Health Programs</h3>
            <p>
             Programs focused on safe motherhood, nutrition, immunization awareness, and early health education to protect mothers and children in rural regions.
            </p>
          </div>

          <div className="rural-card">
            <h3>Village Health Volunteer Training</h3>
            <p>
            Training village youth in basic medical awareness, CPR, First Aid, and emergency response, enabling them to become the first line of help during critical situations.
            </p>
          </div>

          <div className="rural-card">
            <h3>WASH Initiatives</h3>
            <p>
           Promoting clean water access, sanitation practices, menstrual hygiene awareness, and public hygiene to improve long-term rural health outcomes.
            </p>
          </div>

          <div className="rural-card">
            <h3>Low-Cost Medical Transport</h3>
            <p>
             Providing affordable ambulance and emergency transport solutions to help rural patients reach medical care quickly and safely.
            </p>
          </div>

          <div className="rural-card">
            <h3>Telemedicine Kiosks</h3>
            <p>
           Enabling villagers to access certified medical professionals through digital health consultations bringing timely advice to even the most remote areas.
            </p>
          </div>

        </div>
      </section>

             <Statestics />
      

      {/* IMPACT */}
      <section className="rural-impact">
        <div className="container">
          <h2>Our Rural Health Impact</h2>
          <p>
          Thousands of villagers have gained access to timely care, emergency support, maternal guidance, and essential medical awareness through our rural health programs. By bringing CPR training, First Aid readiness, and regular medical outreach to remote areas, we continue to save lives and strengthen community health every day.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rural-cta">
        <div className="container">
          <h2>Support Rural Healthcare</h2>
          <p>
            Your contribution helps us expand essential healthcare access, emergency preparedness, and medical education awareness to the most underserved villages—ensuring no family is left without support in critical moments.
          </p>
          <p>
            “Of all the forms of inequality, injustice in health is the most shocking and the most inhuman.”
— Martin Luther King Jr.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">Donate for Rural Health</button>
            <button className="btn-outline">Volunteer With Us</button>
          </div>
        </div>
      </section>
<Contact />
    </div>
  );
};

export default RuralHealthDevelopment;
