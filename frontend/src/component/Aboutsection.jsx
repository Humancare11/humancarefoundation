import React from 'react'
import { Eye, Target } from "lucide-react";
import About from "../assets/About.jpg";   // 🔥 Corrected About image import
import "./Aboutsection.css";
function Aboutsection() {
  return (
<>

{/* =======================about section==================== */}
<section className="about-container" id='about'>
        <div className="about-left">
          <div className="about-image-curve">
            <img src={About} alt="Helping Hands" className="about-main-img" />
          </div>

          
        </div>

        <div className="about-right">
          <p className="about-top-title">About US</p>

          <h1 className="about-heading">
We Believe Everyone Deserves Care, Health & Education


          </h1>

          <p className="about-desc">
At Humancare Foundation Trust, we exist to serve humanity with empathy, integrity, and purpose. We believe that true progress begins when care, health, and Medical education become accessible to all, regardless of background or circumstance. Guided by compassion and social responsibility, we work to uplift the underprivileged, protect dignity, and create lasting impact. Our commitment lies in nurturing hope, strengthening communities, and building a future where every life is valued, supported, and empowered across generations.

       </p>

          
        </div>
      </section>
</>
)
}

export default Aboutsection