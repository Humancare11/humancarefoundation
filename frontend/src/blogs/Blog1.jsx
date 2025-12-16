import React from "react";
import bannerImg from "../assets/blog1.jpg";
import "./Blog1.css";

const Blog1 = () => {
  return (
    <>
      {/* ===== Blog Banner Section ===== */}
      <section className="blog-banner-d">
        <img src={bannerImg} alt="Humancare Education Banner" className="banner-img" />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>Education Opens Doors to a Better Future</h1>
        </div>
      </section>

      {/* ===== Blog Content Section ===== */}
      <section className="blog-content">
        <div className="content-wrapper">

          <p>
            Empowering children with learning opportunities that reshape their lives and uplift entire communities.
          </p>

          <p>
            Education is more than a subject taught in classrooms — it is the foundation of opportunity,
            growth, and empowerment. For millions of children in underserved communities, education becomes
            the first stepping stone toward a brighter tomorrow.
          </p>

          <p>
            At Humancare Foundation Trust, we believe that every child, regardless of their financial
            background, deserves access to quality learning that unlocks their true potential.
          </p>

          <h2>Education Creates Endless Possibilities</h2>
          <p>
            A child who learns confidently today becomes a capable adult tomorrow. Education helps children
            develop critical thinking, problem-solving abilities, and leadership qualities that stay with them for life.
          </p>
          <p>
            When children receive proper schooling, they dream bigger, set higher goals, and overcome barriers
            that once seemed impossible.
          </p>

          <h2>Breaking the Cycle of Poverty</h2>
          <p>
            Lack of education is often the biggest reason families remain trapped in poverty for generations.
            When one child gains access to education, it creates a ripple effect — that child grows, supports
            their family, and uplifts their entire community.
          </p>
          <p>
            By sponsoring school fees, providing learning materials, and guiding children through mentorship
            programs, we help them break this cycle and build a better life.
          </p>

          <h2>Community Transformation Through Learning</h2>
          <p>
            Educated children grow into empowered adults who contribute positively to society. They become
            teachers, doctors, caregivers, entrepreneurs, and leaders who bring meaningful change.
          </p>
          <p>
            Every book, every class, and every opportunity contributes to the long-term development of families
            and communities.
          </p>

          <h2>Why We Continue This Mission</h2>
          <p>
            At Humancare Foundation Trust, we are committed to helping children access education through
            scholarships, school supplies, and continuous guidance.
          </p>
          <p>
            When you support a child’s education, you’re not just donating — you are investing in a future that
            becomes brighter with every step.
          </p>

        </div>
      </section>
    </>
  );
};

export default Blog1;
