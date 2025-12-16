import React from 'react'
import "./Cta.css";

function CTA() {
  return (
<>
<section id='cta'><div className="donation-section">
  <h2 className="donation-title">Support Our Mission</h2>
  <div className="donation-line"></div>

  <p className="donation-text">
Your support helps us bridge the gap between dreams and access. Many passionate students cannot afford medical and nursing education, and many lives are lost simply because basic emergency care is not known at the right time.
By supporting our mission, you help us educate future healthcare heroes and equip everyday people with life-saving knowledge so that during any medical emergency at home or outside, someone knows what to do until help arrives. Your contribution doesn’t just fund a program—it creates nurses, first responders, and lifelines for countless families.

  </p>

<a 
  href="https://pmny.in/KI4pIX0tZoST" 
  target="_blank" 
  rel="noopener noreferrer"
  className="no-underline"
>
  <button className="donation-btn">Become a Contributor</button>
</a>
</div></section>

</> )
}

export default CTA