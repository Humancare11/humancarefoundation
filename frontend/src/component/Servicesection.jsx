import React from 'react'
import { 
  Stethoscope, 
  Siren, 
  BookOpen, 
  Package, 
  Megaphone,
  Zap, 
  Shield, 
  CheckCircle,
  Heart,
  Eye,
  Target
} from "lucide-react";
import "./Servicesection.css";
const services = [
  {
    icon: Stethoscope,
    title: "Compassionate Medical Support",
    description:
      "We ensure that quality treatment, emergency medical aid, and essential medication reach underserved and vulnerable individuals with dignity and respect. Our focus is on ethical, timely, and life-saving care because every life deserves a fair chance at health.",
  },
  {
    icon: Heart,
    title: "Medical Education & Public Awareness",
    description:
      "We believe knowledge saves lives. Through nursing education, CPR training, First Aid programs, and preventive health awareness, we empower individuals to act confidently in emergencies and become responsible health caregivers within their communities.",
  },
  {
    icon: Siren,
    title: "Development of Medical Skills",
    description:
      "We are committed to shaping the future of healthcare by developing practical medical skills, professional discipline, and emergency response capabilities among youth and caregivers building a skilled healthcare-ready generation.",
  },
  {
    icon: BookOpen,
    title: "Rural Health Empowerment",
    description:
      "We work to uplift remote and underserved regions by improving health awareness, access to emergency support, and community-level preparedness, ensuring that quality healthcare reaches even the most distant villages with dignity and care.",
  },

];

function Servicesection() {
  return (
    <>
      <section id="whatwedo" className="services-section">
        <div className="why-container">
          <div className="why-header">
            <h2 className='ser-head'>Our Pillars</h2>
            <div className="why-line"></div>
            <p className='ser-para'>
We strengthen communities through compassionate care, medical education, emergency preparedness, and rural health empowerment so that during any household or outdoor medical emergency, individuals are equipped with basic life-saving knowledge until professional help arrives.

            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="service-icon-wrapper">
                    <Icon className="service-icon" />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicesection;
