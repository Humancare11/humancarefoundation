import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "How will my donation be used?",
    answer:
      "Your contribution is directed toward medical education support, CPR & First Aid training, rural health programs, medication assistance, and community healthcare initiatives. We ensure every rupee is used for genuine impact.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. Donations made to Humancare Foundation Trust are eligible for tax benefits under Section 80G, allowing donors to claim deductions as per government guidelines.",
  },
  {
    question: "What is ATC AID or 80G certification?",
    answer:
      "ATC/80G certification is a government-approved benefit that allows donors to receive income tax deductions on eligible donations. We provide a valid 80G receipt for every contribution.",
  },
  {
    question: "Can I sponsor a medical or nursing education?",
    answer:
      "Yes, you can sponsor students who cannot afford medical or nursing education. Your support helps them pursue training and become future healthcare professionals serving society.",
  },
  {
    question: "Can I sponsor a health camp?",
    answer:
      "Absolutely. You can sponsor health camps, CPR training camps, First Aid workshops, rural check-up drives, or emergency awareness programs. These camps directly benefit underserved communities.",
  },
  {
    question: "What medical assistance do you offer?",
    answer:
      "We provide basic medical support, health screenings, medication aid, emergency awareness programs, and CPR/First Aid training. Our focus is to ensure timely help and increase community-level preparedness.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "You can sign up as a volunteer to help with health camps, awareness drives, student mentoring, event support, and community outreach. No medical background is required—only compassion and dedication.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We work across urban, semi-urban, and rural communities, with a special focus on regions where healthcare access and medical education support are limited.",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We maintain complete transparency through regular reporting, audited financials, impact documentation, donor receipts, and real-time updates about ongoing initiatives.",
  },
  {
    question: " How can I stay updated?",
    answer:
      "Follow us on our social platforms or subscribe to our newsletter for updates on health camps, emergency training sessions, education sponsorships, and community programs.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <h2>Everything You Need to Know
</h2>
          <div className="faq-line"></div>
          <p>
Learn more about our work, your contributions, and the impact we create together.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${
                openIndex === index ? "faq-open" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`faq-icon ${
                    openIndex === index ? "rotate" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT BOX */}
        
      </div>
    </section>
  );
}
