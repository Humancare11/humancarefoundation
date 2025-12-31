import React, { useState } from "react";
import "./AboutUs.css";
import { Heart, Users, GraduationCap, Briefcase } from "lucide-react";
import About from "../assets/about.jpg";
import AboutBanner from "../assets/about-us-banner.png";
const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("CARE");

  const tabs = [
    {
      name: "CARE",
      description:
        "We care for people in their vulnerable moments, educate them with essential health knowledge, empower them with skills for independence, and transform communities through long-term, sustainable change.",
    },
    {
      name: "EDUCATE",
      description:
        "We care for people in their vulnerable moments, educate them with essential health knowledge, empower them with skills for independence, and transform communities through long-term, sustainable change.",
    },
    {
      name: "EMPOWER",
      description:
        "We care for people in their vulnerable moments, educate them with essential health knowledge, empower them with skills for independence, and transform communities through long-term, sustainable change.",
    },
    {
      name: "TRANSFORM",
      description:
        "We care for people in their vulnerable moments, educate them with essential health knowledge, empower them with skills for independence, and transform communities through long-term, sustainable change.",
    },
  ];

  return (
    <div className="about-wrapper">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          {/* LEFT CONTENT */}
          <div className="about-hero-content">
            <h1>About Humancare Foundation Trust</h1>
            <p>
              We are a community-driven foundation committed to expanding access
              to healthcare, education, and essential skill development,
              creating opportunities that uplift individuals and families facing
              challenges.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-hero-image">
            <img src={AboutBanner} alt="About Humancare Foundation Trust" />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-section container">
        <h2>Our Story</h2>
        <p>
          The Humancare Foundation Trust began with a simple belief, every
          person deserves care, knowledge, and the chance to grow. What started
          as a small effort to support struggling families has grown into a
          community movement focused on healthcare access, medical education,
          and life-improving skills. Our story is one of compassion, inclusion,
          and hope a journey shaped by people who believe that even a small act
          of care can transform lives.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission container">
        <div className="vm-card">
          <h3>Our Vision</h3>
          <p>
            To build a world where every individual has the support, knowledge,
            and opportunities needed to live a healthy, educated, and empowered
            life.
          </p>
        </div>
        <div className="vm-card">
          <h3>Our Mission</h3>
          <p>
            To offer sustainable healthcare support, promote accessible quality
            medical education, and strengthen communities through skill-building
            programs that create lasting change.
          </p>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Be Part of the Change</h2>
          <p>Your support can transform lives and uplift communities.</p>

          <div className="cta-buttons">
          <a 
  href="https://pmny.in/KI4pIX0tZoST" 
  target="_blank" 
  rel="noopener noreferrer"
  className="no-underline"
>
  <button className="btn-outline">Become a Contributor</button>
</a>
            {/* <button className="btn-primary">Be a Contributor</button> */}
            <a href="/contact">             <button className="btn-outline">Join as Volunteer</button>
</a>
          </div>
        </div>
      </section>
      {/* ===== NEW TAB APPROACH SECTION ===== */}
      <section className="approach-tabs-section container">
        <h2>Our Approach</h2>

        {/* Tabs */}
        <div className="tabs-row">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tab-item ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content-box">
          {tabs.find((t) => t.name === activeTab)?.description}
        </div>
      </section>
      {/* ===== END ===== */}

      {/* TEAM SECTION */}
      {/* <section className="about-section container">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-img"></div>
            <h4>Dr. Aarav Mehta</h4>
            <p>Head of Healthcare Initiatives</p>
          </div>

          <div className="team-card">
            <div className="team-img"></div>
            <h4>Riya Shah</h4>
            <p>Education Program Lead</p>
          </div>

          <div className="team-card">
            <div className="team-img"></div>
            <h4>Karan Patel</h4>
            <p>Skill Development Mentor</p>
          </div>
        </div>
      </section> */}

      {/* CALL TO ACTION */}

      <section className="ethics-section ">
        <h2>Our Ethics</h2>
        <p className="ethics-subtext">
          We are guided by values that uphold dignity, honesty, and compassion
          in everything we do. We believe in:
        </p>

        <div className="ethics-grid">
          <div className="ethics-card">
            <h3>Integrity</h3>
            <p>
              Acting with transparency, accountability, and truth in every
              initiative.
            </p>
          </div>

          <div className="ethics-card">
            <h3>Respect</h3>
            <p>
              Treating every individual with empathy, fairness, and dignity.
            </p>
          </div>

          <div className="ethics-card">
            <h3>Service</h3>
            <p>Placing community well-being above all else.</p>
          </div>

          <div className="ethics-card">
            <h3> Equality</h3>
            <p>
              {" "}
              Ensuring access to healthcare, education, and opportunities for
              all, without discrimination.
            </p>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="section-container vision-layout">
          <div className="vision-text">
            <h2>How did This Vision Came Into Reality?</h2>

            <p>
              The vision of Humancare Foundation Trust began with the journey of
              Dr. Hidayat Khan. Born and brought up in a rural village, he grew
              up witnessing the daily struggles of families who lacked even the
              most basic healthcare support. Becoming a doctor was not easy
              limited resources, long distances, and minimal guidance made the
              path difficult, yet he persevered. When he eventually moved to the
              city, Dr. Hidayat saw a world completely different from the one he
              came from. The gap in medical education, healthcare facilities,
              and health awareness between rural and urban communities was
              overwhelming. He realized that while cities had access, awareness,
              and opportunities, rural areas were filled with brilliant,
              hardworking students who had dreams but no guidance, resources, or
              platform to grow in the medical field. This realization became his
              turning point. He knew that no child should lose a future due to
              lack of exposure, and no family should suffer because they didn’t
              have basic medical knowledge. With this belief, he committed
              himself to creating a bridge a foundation that educates, empowers,
              and uplifts rural communities, giving them the same chances he
              once fought for. What began as one doctor’s personal journey has
              now grown into a movement dedicated to healthcare access, medical
              education, skill development, and community empowerment.
            </p>
          </div>

          <div className="vision-image">
            <img src={About} alt="Our Vision" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
