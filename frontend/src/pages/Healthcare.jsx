import React from "react";
import "./Healthcare.css";
import Contact from "../component/Contact";
import Banner from "../assets/about.jpg";
import About from "../assets/blog1.jpg";

import Statestics from "../component/Statestics";

const Healthcare = () => {
  return (
    <div className="healthcare-wrapper">

      {/* HERO */}
      <section className="healthcare-hero">
  <div className="container healthcare-hero-grid">

    {/* LEFT CONTENT */}
    <div className="healthcare-hero-content">
      <h1>Healthcare Development</h1>
      <p>
       Strengthening community health by improving access to essential medical services, promoting emergency readiness through CPR and First Aid training, and expanding healthcare awareness especially in underserved and rural areas.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="healthcare-hero-image">
      <img src={Banner} alt="Healthcare Development" />
    </div>

  </div>
</section>


      {/* INTRO */}
      <section className="healthcare-intro container">
        <h2>Our Healthcare Mission</h2>
        <p>
We believe healthcare and life-saving knowledge should reach every individual. Through medical education support, emergency preparedness training, and community-driven healthcare initiatives, we work to ensure that essential care and awareness reach underserved and rural regions where they are needed the most.        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="healthcare-services container">
  <div className="healthcare-grid">

    <div className="healthcare-card">
      <img src={About} alt="Primary Healthcare" />
      <h3>Primary Healthcare Access</h3>
      <p>
      Ensuring essential medical assistance, consultations, basic treatment, and medication support for underserved communities with limited healthcare availability.
      </p>
    </div>

    <div className="healthcare-card">
      <img src={About} alt="Health Camps" />
      <h3>Preventive Health Camps & Screenings
</h3>
      <p>
     Conducting regular health checkups, anemia and BP screenings, diabetes monitoring, and early detection drives to reduce long-term health risks—especially in rural and low-awareness areas.
      </p>
    </div>

    <div className="healthcare-card">
      <img src={About} alt="Health Awareness" />
      <h3>Health Awareness Programs</h3>
      <p>
        Educating communities on hygiene, nutrition, maternal care, first-response awareness, and lifestyle health practices to help families make informed everyday decisions.

      </p>
    </div>

    <div className="healthcare-card">
      <img src={About} alt="Mental Health" />
      <h3>Mental Health Awareness & Counseling</h3>
      <p>
       Supporting emotional well-being through awareness sessions, stress-management discussions, and basic counseling to help individuals and families cope better.
      </p>
    </div>

    <div className="healthcare-card">
      <img src={About} alt="First Aid Training" />
      <h3>First Aid & Emergency Response Training</h3>
      <p>
   Training people in CPR, First Aid, and immediate emergency response so they know how to act during household or public emergencies until professional help arrives—strengthening community safety.
      </p>
    </div>

    <div className="healthcare-card">
      <img src={About} alt="Telemedicine" />
      <h3>Telemedicine Support</h3>
      <p>
        Connecting individuals in remote and rural areas to certified medical professionals through teleconsultations, ensuring timely guidance when physical access is limited.
      </p>
    </div>

  </div>
</section>


       <Statestics />

      {/* IMPACT */}
      <section className="healthcare-impact">
        <div className="container">
          <h2>Our Healthcare Impact</h2>
          <p>
          Thousands of individuals have benefited from timely care, essential health support, emergency-response training, and life-saving awareness through our programs. Every health camp, CPR session, and tele-consultation helps bridge the gap between rural challenges and accessible, informed healthcare—moving us closer to a safer, healthier society.
          </p>
        </div>
      </section>

     

      {/* CTA */}
      <section className="healthcare-cta">
        <div className="container">
          <h2>Support Our Healthcare Mission</h2>
          <p>
        Your contribution helps us expand healthcare access, medical education support, and emergency preparedness training across villages and remote communities. Together, we can ensure that no family is left without guidance, care, or life-saving knowledge when they need it most.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">Donate for Healthcare</button>
            <button className="btn-outline">Volunteer with Us</button>
          </div>
        </div>
      </section>
<Contact />
    </div>
  );
};

export default Healthcare;
