import React, { useState } from "react";
import "./OurPeople.css";

import Banner from "../assets/about.jpg";
import Person1 from "../assets/about.jpg";
import Person2 from "../assets/about.jpg";
import Team1 from "../assets/about.jpg";
import Team2 from "../assets/about.jpg";
import Team3 from "../assets/about.jpg";


const teamData = [
  {
    name: "Josh Dunn",
    role: "CEO & Founder",
    img: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
  },
  {
    name: "Mollie Ross",
    role: "Art Director",
    img: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
  },
  {
    name: "Dylan Adams",
    role: "Developer",
    img: "https://1.bp.blogspot.com/-o0FrH2W7UoQ/YLjr2H_R7vI/AAAAAAAACO0/OCC2qfWChJoJVl4nr6YZvyGPwo2Hc43DQCNcBGAsYHQ/s16000/team-1-1.jpg"
  }
];

const OurPeople = () => {
  const [activePerson, setActivePerson] = useState(null);

  const team = [
    {
      name: "Hidayat Khan",
      role: "Managing Trustee",
      image: Person1,
      about:
        "Hidayat Khan  is the visionary leader behind the foundation. He has dedicated his life to improving healthcare access, education, and livelihood opportunities for underserved communities."
    },
    {
      name: "Saleha Khan",
      role: "Trustee",
      image: Person2,
      about:
        "Saleya leads women empowerment and community development initiatives. Her contribution has helped hundreds of women become financially independent."
    }
  ];
  const teams = [
    { name: "Khan Sir", role: "Managing Trustee", image: Team1 },
    { name: "Salia Ma’am", role: "Trustee", image: Team2 },
    { name: "Upendra", role: "Program Advisor", image: Team3 }
  ];
  return (
    <div className="">

      {/* ===== HERO ===== */}
      <section className="people-hero">
        <div className="container people-hero-grid">
          <div className="people-hero-content">
            <h1>Our People</h1>
            <p>
              Meet the leaders and advisors who guide our mission and help us
              create real and lasting community impact.
            </p>
          </div>

          <div className="people-hero-image">
            <img src={Banner} alt="Our People" />
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
     <section className="team-section">
  <h2 className="team-heading">Our Trustees</h2>

  <div className="team-grid-1">
    {team.map((person, index) => (
      <div
        className="team-card"
        key={index}
        onClick={() => setActivePerson(person)}
      >
        <img src={person.image} alt={person.name} className="team-img" />
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    ))}
  </div>
</section>

      {/* ===== POPUP MODAL ===== */}
      {/* ===== POPUP MODAL ===== */}
{activePerson && (
  <div className="team-modal-overlay">
    <div className="team-modal large left-align">

      <span
        className="modal-close"
        onClick={() => setActivePerson(null)}
      >
        ×
      </span>

      <div className="modal-flex">

        {/* LEFT IMAGE */}
        <div className="modal-img-box">
          <img src={activePerson.image} alt={activePerson.name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="modal-text-box">
          <h3>{activePerson.name}</h3>
          <p className="modal-role">{activePerson.role}</p>

          <p className="modal-about">{activePerson.about}</p>

          {/* SOCIAL ICONS */}
          <div className="modal-socials">
            <a href="#" target="_blank">🌐</a>
            <a href="#" target="_blank">🐦</a>
            <a href="#" target="_blank">💼</a>
            <a href="#" target="_blank">📘</a>
          </div>
        </div>

      </div>
    </div>
  </div>
)}


<section>
<div className="team-section">
      <h2 className="team-heading">Team</h2>

      <div className="team-grid">
        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="Josh Dunn"
            className="team-img"
          />
          <h3>Josh Dunn</h3>
          <p>CEO & Founder</p>
        </div>

        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
            alt="Mollie Ross"
            className="team-img"
          />
          <h3>Mollie Ross</h3>
          <p>Art Director</p>
        </div>

        <div className="team-card">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            alt="Dylan Adams"
            className="team-img"
          />
          <h3>Dylan Adams</h3>
          <p>Developer</p>
        </div>
      </div>
    </div>

</section>
 

    </div>
  );
};

export default OurPeople;
