import React from "react";
import bannerImg from "../assets/blog3.jpg";
import "./Blog1.css";

const Blog3 = () => {
  return (
    <>
      {/* ===== Blog Banner Section ===== */}
      <section className="blog-banner-d">
        <img src={bannerImg} alt="Humancare Banner" className="banner-img" />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h1>Together We Create Brighter Communities</h1>
        </div>
      </section>

      {/* ===== Blog Content Section ===== */}
      <section className="blog-content">
        <div className="content-wrapper">


          <p>
            A strong community is built on unity, compassion, and shared responsibility.
            At Humancare Foundation Trust, we believe that when people come together
            with a purpose, extraordinary change becomes possible.
          </p>

          <h2>The Power of Community Support</h2>
          <p>
            Communities thrive when families have access to healthcare, education,
            awareness, and emotional support. When one family suffers, others step in.
            This sense of togetherness is what strengthens neighborhoods, builds trust,
            and creates peace.
          </p>

          <h2>Our Community Initiatives</h2>
          <p>
            We work closely with communities to understand their needs and provide
            solutions that create long-lasting impact. Our programs include:
          </p>

          <ul>
            <li>Health awareness workshops</li>
            <li>Hygiene and sanitation education</li>
            <li>Educational support for children</li>
            <li>Emergency aid for vulnerable families</li>
            <li>Counselling and guidance</li>
            <li>Distribution of essential supplies</li>
          </ul>

          <p>
            These initiatives not only solve immediate challenges but help communities
            grow stronger, safer, and more connected.
          </p>

          <h2>Empowering Families to Build a Better Future</h2>
          <p>
            When families feel supported, they gain the courage to rebuild their lives.
            Children return to school. Parents get access to medical help. Communities
            become cleaner and more responsible. Little by little, we move toward a
            brighter, more caring society.
          </p>

          <h2>Community Growth Starts With You</h2>
          <p>
            Every act of kindness — a donation, a shared meal, a volunteer hour —
            contributes to a larger mission. Together, we can light up hundreds of homes,
            protect vulnerable families, and inspire hope where it’s needed most.
          </p>

        </div>
      </section>
    </>
  );
};

export default Blog3;
