import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

import blog3 from "../assets/blog3.jpg";

import "./BlogCard.css";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Education Opens Doors to a Better Future",
      desc: "Explore how education empowers children and transforms entire communities.",
      date: "July 15, 2025",
      // category: "Education",
      image: blog1,
      link: "/education-opens-doors-to-a-better-future",
    },
    {
      id: 2,
      title: "Nurse Training and Education at Humancare Foundation Trust",
      desc: "Humancare Foundation Trust trains nurses with strong clinical skills, ethics, and compassionate care for safe and effective healthcare.",
      date: "August 10, 2025",
      // category: "Environment",
      image: blog2,
      link: "/healthy-children-build-stronger-tomorrow",
    },
    {
      id: 3,
      title: "Together We Create Brighter Communities",
      desc: "See how community support and collective action help build stronger, brighter, and more connected neighborhoods.",
      date: "September 5, 2025",
      // category: "Nature",
      image: blog3,
      link: "/together-we-create-brighter-communities",
    },
  ];

  return (
    <>
     <section className="impact-hero">
        <div className="container">
          <h1>Our Blogs</h1>
          <p>          We are committed to earning your trust through transparency, genuine purpose, and proven impact.
</p>
        </div>
      </section>
    <section id="blogs">
      <div className="blog-header">
        <p>
        </p>
      </div>
      <section className="nb-section">
        <div className="nb-container">
          {posts.map((p) => (
            <div key={p.id} className="nb-card">
              <img src={p.image} alt={p.title} className="nb-image" />

              <div className="nb-meta">
                <Calendar size={15} />
                <span>{p.date}</span>
                <span className="nb-dot">•</span>
                <span>{p.category}</span>
              </div>

              <h3 className="nb-title">{p.title}</h3>

              <p className="nb-desc">{p.desc}</p>

              <Link to={p.link} className="nb-read-btn">
                Read More <ArrowRight size={16} className="nb-arrow" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      </section></>
  );
}

export default Blog;
