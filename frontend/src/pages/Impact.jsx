import "./impact.css";
import Statestics from '../component/Statestics';
import Impactimg from "../assets/about.jpg";
import Contact from "../component/Contact";
import Banner from "../assets/about.jpg";
import ImpactBanner from "../assets/our-impact-banner.jpg";

export default function Impact() {
  return (
    <div className="impact-wrapper">

      {/* HERO */}
     <section className="impact-hero">
  <div className="container impact-hero-grid">

    {/* LEFT CONTENT */}
    <div className="impact-hero-content">
      <h1>Our Impact</h1>
      <p>Real care. Real learning. Real lives transformed through healthcare access, medical education support, and life-saving skills.
</p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="impact-hero-image">
      <img src={ImpactBanner} alt="Our Impact" />
    </div>

  </div>
</section>


      {/* IMPACT SUMMARY */}
      {/* <section className="impact-summary container">
        <h2>Impact At A Glance</h2> */}
        {/* <div className="impact-grid">
          <div className="impact-box">
            <h3>25,000+</h3>
            <p>People Treated</p>
          </div>

          <div className="impact-box">
            <h3>12,000+</h3>
            <p>Students Supported</p>
          </div>

          <div className="impact-box">
            <h3>8,500+</h3>
            <p>Skills Trained</p>
          </div>
        </div> */}
      {/* </section> */}

      {/* STORIES */}
      <section className="stories-section container">
        <h2>Stories of Change</h2>

        <div className="story-grid">
          <div className="story-card">
            <h3>From Illness to Hope</h3>
            <p>
             Ramesh, from a rural village, received timely care and health awareness guidance during one of our medical camps. With proper treatment and follow-up support, he regained his strength and is now able to care for his family with confidence.
            </p>
          </div>

          <div className="story-card">
            <h3>Educating a Dream</h3>
            <p>
             Aarti always dreamed of pursuing higher education but lacked resources. Through our learning materials, mentorship, and medical awareness programs, she continued her studies and is now proudly attending college becoming an inspiration for other girls in her community.
            </p>
          </div>

          <div className="story-card">
            <h3>Skilled for Life</h3>
            <p>
            Salman joined our skill development program where he learned practical vocational skills along with basic First Aid and emergency readiness. Today, he works independently, supports his family, and stands as proof that the right skills can transform a life.
            </p>
          </div>
        </div>
      </section>
<Statestics />

      {/* ANNUAL PROGRESS */}
   <section className="annual-progress-section container">

  <div className="annual-progress-grid">

    {/* LEFT COLUMN - FULL CONTENT */}
    <div className="progress-content">
      <h2>Annual Progress Highlights

</h2>

      <p className="progress-desc">
Over the past year, our collective efforts have created measurable impact across healthcare access, medical education, emergency readiness, and rural community development.      </p>

      <div className="progress-list">
        <p>✅ 350+ health camps conducted</p>
        <p>✅ 5,000+ preventive screenings completed</p>
        <p>✅ 2,000+ youth trained in skill and healthcare programs
</p>
        <p>✅ Education & health kits distributed across 40+ villages</p>
        <p>✅ Emergency-response training in 60+ communities</p>
      </div>
    </div>

    {/* RIGHT COLUMN - IMAGE */}
    <div className="progress-image-box">
      <img src={Impactimg} alt="Annual Progress" />
    </div>

  </div>
</section>



      {/* REPORT */}
      <section className="impact-report-section">
        <div className="container">
          <h2>Transparency Matters</h2>
          <p>Access our detailed financial and impact performance report</p>
{/* 
          <a href="#" className="impact-download-btn">
            Download Annual Report
          </a> */}
        </div>
      </section>

      <Contact />

    </div>
  );
}
