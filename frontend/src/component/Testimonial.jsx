import { useState, useEffect } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import "./Testimonial.css";

const reviews = [
  {
    rating: 4.9,
    stars: 5,
    text: `Climb it see the world, not so the world can see you. This is due to their
    excellent service. Targ consultation apartments. indulgence off under folly
    death wrote cause her yet a spite. Plan upon yet way cold spot its week.
    Almost do am or limits hearts. Resolve a hearts. Almost do hearts.`,
    author: "Daniyel Karlos",
    role: "Web Designer",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    rating: 5.0,
    stars: 5,
    text: `Fantastic experience! Super professional team. Their support and guidance
    were amazing from start to finish.`,
    author: "Sophia Turner",
    role: "Content Writer",
    img: "https://i.pravatar.cc/40?img=12",
  },
  {
    rating: 4.8,
    stars: 5,
    text: `Loved the service. Very polite and quick response. Highly recommended.`,
    author: "Michael Smith",
    role: "Developer",
    img: "https://i.pravatar.cc/40?img=20",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = reviews[index];

  return (
    <div className="container">
        <section className="testimonial-section">
      <div className="left-box">
        <h1 className="rating">{current.rating}</h1>

        <div className="stars">
          {[...Array(current.stars)].map((_, i) => (
            <Star key={i} size={20} fill="#ffb400" color="#ffb400" />
          ))}
        </div>

        <p className="rating-text">5 Star Rating</p>

        <p className="desc">
          Sed ullamcorper tristique nisl at pharetra turpis accumsan et aliquam
          sollicitudin eros. In imperdiet accumsan.
        </p>

        <div className="users">
          <img src="https://i.pravatar.cc/40?img=1" alt="" />
          <img src="https://i.pravatar.cc/40?img=2" alt="" />
          <img src="https://i.pravatar.cc/40?img=3" alt="" />
          <img src="https://i.pravatar.cc/40?img=4" alt="" />
        </div>
      </div>

      <div className="right-box">
        <Quote className="quote" color="var(--blue)" size={50} />
        <p className="text">{current.text}</p>

        <div className="author-row">
          <img src={current.img} className="author-img" />
          <div>
            <h3>{current.author}</h3>
            <p>{current.role}</p>
          </div>
        </div>

        <div className="arrows">
          <button onClick={prev}>
            <ArrowLeft size={20} />
          </button>
          <button onClick={next}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
    </div>
    
  );
}
