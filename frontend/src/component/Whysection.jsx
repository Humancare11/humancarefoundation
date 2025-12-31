import React from "react";
import { Heart, Eye, Users, Zap, Shield, CheckCircle } from "lucide-react";
import "./Whysection.css";

const reasons = [
  {
    icon: Heart,
    title: "Community Medical Support",
    description:
      "Free health camps, medical checkups, essential medicines, diagnostics, and emergency assistance for underserved communities, ensuring timely care and dignity for every life.",
    button: "Explore",
  },
  {
    icon: Eye,
    title: "Maternal & Child Health Care",
    description:
      "Focused support for safe motherhood, nutrition guidance, vaccination awareness, prenatal and postnatal care, ensuring healthier mothers and stronger futures for children.",
    button: "Explore",
  },
  {
    icon: Users,
    title: "Medical Education & Digital Learning",
    description:
      "Access to medical awareness programs, Medical education, Nursing education, digital literacy, and student guidance, empowering learners with knowledge that builds both careers and communities.",
    button: "Explore",
  },
  {
    icon: Zap,
    title: "CPR, First Aid & Emergency Training",
    description:
      "Hands-on CPR, First Aid, and basic life-support training so every individual knows what to do during a medical emergency at home or in public until professional help arrives.",
    button: "Explore",
  },
  {
    icon: Shield,
    title: "Women Empowerment Through Health & Skills",
    description:
      "Empowering women through medical awareness, healthcare training, financial literacy, and self-reliance programs, enabling them to lead healthier, independent lives.",
    button: "Explore",
  },
  {
    icon: CheckCircle,
    title: "Rural Health & Community Development",
    description:
      "Strengthening villages through rural healthcare access, sanitation awareness, emergency preparedness, education support, and livelihood development for sustainable growth. ",
    button: "Explore",
  },
];

export default function WhySection() {
  return (
    <section id="why-choose-us" className="why-section">
              <h2 className="feature-sub-title">Featured Programs</h2>
 
      <div className="feature-heading-container">
      </div>
      <div className="why-container">
        <div className="why-header">
          {/* <div className="why-line"></div> */}
          <p>
            We are committed to compassion, transparency, and meaningful impact
            transforming lives through healthcare, medical education, and
            community well-being.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div className="why-card" key={index}>
                <div className="why-hover-bg"></div>

                <div className="why-card-content">
                  <div className="why-icon">
                    <Icon size={32} />
                  </div>

                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="why-bottom-box">
          <p>
        " We believe in the power of transparency and community trust. Our track record speaks for itself with thousands of lives improved, students educated, and patients supported. When you trust Humancare Foundation Trust, you're joining a movement of compassionate people making real, lasting change. "

          </p>
        </div> */}
      </div>
    </section>
  );
}
