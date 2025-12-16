import React from 'react'
import BannerSlider from "../component/BannerSlider";

import Faq from "./Faq";
import Contact from "../component/Contact";
import Aboutsection from '../component/Aboutsection';
import Servicesection from '../component/Servicesection';
import Whysection from '../component/Whysection';
import CTA from '../component/CTA';
import "./Home.css";



function Home() {
    return (
        <>
            <BannerSlider />
            <Aboutsection />
            <Servicesection />
            <Whysection />
 

 <section className="section-container impact-section">
  <h2>Impact Philosophy</h2>

  <p className="impact-text">
  Care creates the foundation, education opens the path, empowerment builds the courage, and transformation becomes the destination.

  </p>

  <div className="impact-flow">

    <div className="impact-card"> 
      <h3>CARE</h3>
      <p>We begin by caring for people in their most vulnerable moments, offering compassion, support, and hope because care is the first step toward change.</p>
    </div>

    <div className="impact-arrow">→</div>

    <div className="impact-card">
      <h3>EDUCATE</h3>
      <p>Through care, we prepare minds for learning. Education opens doors to awareness, understanding, and new possibilities for a better life.
</p>
    </div>

    <div className="impact-arrow">→</div>

    <div className="impact-card">
      <h3>EMPOWER</h3>
      <p>With education comes confidence, skills, and independence, enabling individuals to take control of their health, decisions, and future.</p>
    </div>

    <div className="impact-arrow">→</div>

    <div className="impact-card">
      <h3>TRANSFORM</h3>
      <p>When people are empowered, their lives, families, and communities transform, creating lasting change that passes from one generation to the next.</p>
    </div>

  </div>
</section>


            <CTA />
<section className="section-container involved-section">
    <h2>Get Involved</h2>

    <div className="involved-cards">
        <div className="involved-card">
            <h3>Donate</h3>
            <p>
             Your contribution helps us support medical education for deserving students, expand CPR & First Aid awareness, and bring essential healthcare support to underserved families.
 

            </p>
            <button className="btn-primary">Donate Now</button>
        </div>

        <div className="involved-card">
            <h3>Volunteer</h3>
            <p>
           Become a part of meaningful change. Your time and compassion help us train communities, guide medical students, conduct health camps, and spread emergency-awareness skills that save lives.
            </p>
            <button className="btn-outline">Join as Volunteer</button>
        </div>

        <div className="involved-card">
            <h3>Partner</h3>
            <p>
Collaborate with us to scale impactful programs supporting health education, emergency preparedness, rural education and health development, and community transformation across regions.            </p>
            <button className="btn-outline">Become a Partner</button>
        </div>
    </div>
</section>

            <Faq />
            <Contact />
        </>)
}

export default Home