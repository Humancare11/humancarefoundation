import { HeartHandshake, Clock3, Stethoscope, GraduationCap } from "lucide-react";
import "./Statistics.css";

const stats = [
  {
    icon: HeartHandshake,
    number: "15000+",
    label: "Lives Impacted",
    description: "Patients supported with essential medical care"
  },
  {
    icon: Clock3,
    number: "3000+",
    label: "Program Hours",
    description: "Delivered through scholarships & community initiatives"
  },
  {
    icon: Stethoscope,
    number: "1875+",
    label: "Medical Consultations",
    description: "Health camps organized across multiple communities"
  },
  {
    icon: GraduationCap,
    number: "35+",
    label: "Health Workers Trained",
    description: "Frontline workers empowered through specialist training"
  }
];

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stats-header">
          <h2>Our Impact by the Numbers</h2>
          <div className="stats-line"></div>
          <p>Measuring the meaningful change we bring to communities across India</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isOdd = index % 2 === 0;

            return (
              <div
                key={index}
                className={`stat-card ${isOdd ? "red-bg" : "blue-bg"}`}
              >
                <div className="stat-card-overlay"></div>

                <div className="stat-inner">
                  <div className="stat-icon">
                    <Icon className="icon-size" />
                  </div>

                  <div className="stat-number">{stat.number}</div>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
{/* 
        <div className="stats-bottom-box">
          <div className="bottom-grid">
            <div>
              <h3>Expert Team</h3>
              <p>Doctors, nurses, educators, and social workers committed to serving communities</p>
            </div>
            <div>
              <h3>100% Transparency</h3>
              <p>Every contribution is tracked and reported with complete accountability</p>
            </div>
            <div>
              <h3>Continuous Support</h3>
              <p>We follow up with beneficiaries to ensure long-term positive outcomes</p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
