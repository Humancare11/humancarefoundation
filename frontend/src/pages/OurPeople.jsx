import React, { useState } from "react";
import "./OurPeople.css";

import Banner from "../assets/about.jpg";
import Person1 from "../assets/about.jpg";
import Person2 from "../assets/about.jpg";
import Team1 from "../assets/about.jpg";
import Team2 from "../assets/about.jpg";
import Team3 from "../assets/about.jpg";
import Team4 from "../assets/cat-hacker.jpg";

import {
  FaUserTie,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdWork } from "react-icons/md";

const OurPeople = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  const trustees = [
    {
      name: "Hidayat Khan",
      role: "Managing Trustee",
      image: Team4,
      description:
        "Hidayat Khan is the visionary leader behind the foundation. He has dedicated his life to improving healthcare access, education, and livelihood opportunities for underserved communities.",
      author: "Mehdi Ahmadi",
      categories: ["Leadership", "Healthcare"],
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Saleha Khan",
      role: "Trustee",
      image: Team4,
      description:
        "Saleha leads women empowerment and community development initiatives. Her contribution has helped hundreds of women become financially independent.",
      author: "Mehdi Ahmadi",
      categories: ["Women Empowerment", "Community"],
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  const team = [
    {
      name: "Khan Sir",
      role: "ABC",
      image: Team4,
      description:
        "Khan Sir brings years of experience in social work and has been instrumental in establishing our key programs across rural communities.",
      author: "Mehdi Ahmadi",
      categories: ["Management", "Social Work"],
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Salia Ma'am",
      role: "ABC",
      image: Team4,
      description:
        "Salia Ma'am specializes in education development and has transformed learning opportunities for thousands of children.",
      author: "Mehdi Ahmadi",
      categories: ["Education", "Development"],
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      name: "Upendra",
      role: "ABC",
      image: Team4,
      description:
        "Upendra provides strategic guidance on program implementation and ensures sustainable impact in all our initiatives.",
      author: "Mehdi Ahmadi",
      categories: ["Strategy", "Programs"],
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <div className="our-people-page">
      {/* Hero Section */}
      <section className="people-hero">
        <div className="hero-content">
          <h1>Our People</h1>
          <p>
            Meet the dedicated leaders and team members who drive our mission
            forward and create lasting impact in communities.
          </p>
        </div>
      </section>

      {/* Trustees Section */}
      <section className="people-section">
        <div className="container">
          <h2 className="section-title">Our Trustees</h2>

          <div className="people-grid">
            {trustees.map((person, index) => (
              <div
                className="people-card"
                key={index}
                onClick={() => openModal(person)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(person);
                }}
              >
                <div className="card-image">
                  <img src={person.image} alt={person.name} />

                  <div className="image-overlay">
                    <button
                      className="read-more-btn"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent double trigger
                        openModal(person);
                      }}
                      aria-label={`Read more about ${person.name}`}
                    >
                      <HiArrowUpRight />
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{person.name}</h3>
                  <p className="card-description">{person.role}</p>

                  <div className="card-meta">{/* meta content */}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="executive-people-section">
        <div className="executive-container">
          <h2 className="executive-section-title">The Executive Team</h2>

          <div className="executive-people-grid executive-people-grid-3">
            {team.map((person, index) => (
              <div
                className="executive-people-card"
                key={index}
                onClick={() => openModal(person)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openModal(person);
                }}
              >
                <div className="executive-card-image">
                  <img src={person.image} alt={person.name} />

                  <div className="image-overlay">
                    <button
                      className="read-more-btn"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent double click
                        openModal(person);
                      }}
                      aria-label={`Read more about ${person.name}`}
                    >
                      <HiArrowUpRight />
                    </button>
                  </div>
                </div>

                <div className="executive-card-content">
                  <h3 className="executive-card-title">{person.name}</h3>
                  <p className="executive-card-description">{person.role}</p>
                  <p className="executive-executive-card-description">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedPerson && (
        <div className="person-modal">
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-container">
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-left">
                <img src={selectedPerson.image} alt={selectedPerson.name} />
              </div>
              <div className="modal-right">
                <h2>{selectedPerson.name}</h2>
                <p className="modal-role">{selectedPerson.role}</p>
                <p className="modal-description">
                  {selectedPerson.description}
                </p>

                {selectedPerson.social && (
                  <div className="modal-social">
                    <h4>Connect:</h4>
                    <div className="social-links">
                      {selectedPerson.social.facebook && (
                        <a
                          className="social-icon"
                          href={selectedPerson.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <FaFacebookF />
                        </a>
                      )}
                      {selectedPerson.social.twitter && (
                        <a
                          className="social-icon"
                          href={selectedPerson.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <FaTwitter />
                        </a>
                      )}
                      {selectedPerson.social.linkedin && (
                        <a
                          className="social-icon"
                          href={selectedPerson.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                      {selectedPerson.social.instagram && (
                        <a
                          className="social-icon"
                          href={selectedPerson.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <FaInstagram />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurPeople;
