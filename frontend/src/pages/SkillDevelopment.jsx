import React from "react";
import "./SkillDevelopment.css";
import Contact from "../component/Contact";
import Banner from "../assets/about.jpg";
import Statestics from "../component/Statestics";

const SkillDevelopment = () => {
  return (
    <div className="skill-wrapper">

      {/* HERO */}
     <section className="skill-hero">
  <div className="container skill-hero-grid">

    {/* LEFT CONTENT */}
    <div className="skill-hero-content">
      <h1>Skill Development</h1>
      <p>
       Empowering youth and women with practical medical awareness, CPR & First Aid skills, healthcare-related training, and livelihood opportunities that build confidence, independence, and a stronger future for their families and communities.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="skill-hero-image">
      <img src={Banner} alt="Skill Development" />
    </div>

  </div>
</section>


      {/* INTRO */}
      <section className="skill-intro container">
        <h2>Our Skill Development Mission</h2>
        <p>
         Our skill development programs aim to uplift individuals—especially youth and women—by providing healthcare-focused training, emergency-life-saving skills, and employability support. We prepare communities to become confident, capable, and ready for meaningful careers in both medical and non-medical fields.
        </p>
      </section>

      {/* SKILL PROGRAMS */}
      <section className="skill-programs container">
        <div className="skill-grid">

          <div className="skill-card">
            <h3>Nursing Assistant & Caregiver Training
</h3>
            <p>
              Hands-on training that prepares individuals for caregiving roles by teaching essential patient care, hygiene support, and basic health handling skills needed in hospitals, homes, and elderly care.
            </p>
          </div>

          <div className="skill-card">
            <h3>Paramedical Skills</h3>
            <p>
            Skill-based training in lab procedures, medical support roles, and allied healthcare practices helping learners build practical skills required in the healthcare field.
            </p>
          </div>

          <div className="skill-card">
            <h3>Community Health Worker (CHW) Training
</h3>
            <p>
          Preparing youth to serve as frontline health responders in rural and semi-urban communities by teaching basic medical awareness, health communication, CPR basics, and emergency response skills.
            </p>
          </div>

          <div className="skill-card">
            <h3>Soft Skills & Women-Centric Healthcare Skills
</h3>
            <p>
            Confidence building, communication, and healthcare-related vocational skills that empower women to become independent along with training that supports employability and income generation.
            </p>
          </div>

          <div className="skill-card">
            <h3>Employment Support</h3>
            <p>
            Resume preparation, interview guidance, and job placement assistance to help learners confidently step into the workforce, especially those entering healthcare and community service roles.
            </p>
          </div>

        </div>
      </section>
             <Statestics />
      

      {/* BEFORE / AFTER SUCCESS */}
      <section className="skill-success">
        <div className="container">
          <h2>Before & After Success Stories</h2>
          <p>
            Our training programs have helped youth and women especially from rural and underserved backgrounds—gain essential healthcare skills, emergency-response knowledge, and confidence to build stable careers and independent futures. Their journeys show how the right skills can truly transform lives.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="skill-cta">
        <div className="container">
          <h2>Support Skill Development</h2>
          <p>
         Your support enables us to train more youth and women in healthcare-related skills, CPR & First Aid, medical awareness, and employability programs—creating stronger, safer, and more empowered communities.
          </p>
          <p>“Empowerment comes when people develop the skills they need to shape their own future.”
— A.P.J. Abdul Kalam</p>

          <div className="cta-buttons">
            <button className="btn-primary">Donate for Skills</button>
            <button className="btn-outline">Become a Trainer</button>
          </div>
        </div>
      </section>
<Contact />
    </div>
  );
};

export default SkillDevelopment;
