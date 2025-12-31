import React, { useState } from "react";
import "./OurPeople.css";

import Upendra from "../assets/upendra.jpg";
import Tiwari from "../assets/tiwari.jpeg";
import Chakravarthi from "../assets/dsc.jpeg";
import Salia from "../assets/salia.jpeg";
import Hidayat from "../assets/hidayat.jpeg";
import People from "../assets/people.jpg";

const OurPeople = () => {
  const [activePerson, setActivePerson] = useState(null);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="impact-hero">
        <div className="container impact-hero-grid">
          <div className="impact-hero-content">
            <h1>Our People</h1>
            <p>
              Real care. Real learning. Real lives transformed through healthcare
              access, medical education support, and life-saving skills.
            </p>
          </div>

          <div className="impact-hero-image">
            <img src={People} alt="Our Impact" />
          </div>
        </div>
      </section>

      {/* ================= TRUSTEES ================= */}
      <section className="trustee-section">
        <h2 className="section-title">Our Trustees</h2>

        <div className="trustee-grid">
          <div className="trustee-card" onClick={() => setActivePerson("khan")}>
            <div className="trustee-image">
              <img src={Hidayat} alt="Hidayat Khan" />
            </div>
            <h3>Dr. Hidayat Khan</h3>
            <span>Managing Trustee & Visionary Philanthropist
</span>
          </div>

          <div className="trustee-card" onClick={() => setActivePerson("ayesha")}>
            <div className="trustee-image">
              <img src={Salia} alt="salia khan" />
            </div>
            <h3>Mrs. Saleha Khan
</h3>
            <span>Main Trustee – Humancare Foundation
</span>
          </div>
        </div>
      </section>

      {/* ================= MENTORS ================= */}
      <section className="trustee-section">
        <h2 className="section-title">Our Advisor</h2>

        <div className="mentor-grid">
          <div className="trustee-card" onClick={() => setActivePerson("upendra")}>
            <div className="trustee-image">
              <img src={Upendra} alt="Dr Upendra" />
            </div>
            <h3>Dr. Upendra Haribhau Sontakke</h3>
            <span>Advisor</span>
          </div>

          <div className="trustee-card" onClick={() => setActivePerson("tiwari")}>
            <div className="trustee-image">
              <img src={Tiwari} alt="Tiwari" />
            </div>
            <h3>Dr. B S Tiwary</h3>
            <span>Advisor</span>
          </div>

          <div
            className="trustee-card"
            onClick={() => setActivePerson("chakravarthi")}
          >
            <div className="trustee-image">
              <img src={Chakravarthi} alt="Chakravarthi" />
            </div>
            <h3>Mr. D.S. Chakravarthi</h3>
            <span>Advisor</span>
          </div>
        </div>
      </section>

      {/* ================= HIDAYAT MODAL ================= */}
      {activePerson === "khan" && (
        <div className="trustee-modal" onClick={() => setActivePerson(null)}>
          <div
            className="modal-content modal-horizontal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActivePerson(null)}
            >
              ✕
            </button>

            {/* <div className="modal-left">
              <img src={Hidayat} alt="Hidayat Khan" />
            </div> */}

            <div className="modal-right">
              <h2>Dr. Hidayat Khan
</h2>
              <h4>Managing Trustee & Visionary Philanthropist</h4>

              <p>
              Dr. Hidayat Khan is a distinguished critical care specialist with over 12 years of extensive clinical experience in leading tertiary-care hospitals in Mumbai. His professional career as an intensivist has placed him at the forefront of emergency and critical care medicine, where he has managed high-acuity cases and complex medical emergencies with clinical excellence and precision.
              </p>

              <p>
               Through sustained frontline engagement, Dr. Khan developed a deep understanding of the structural and systemic challenges within India’s healthcare delivery ecosystem—particularly the disparities affecting marginalized and underserved populations. This insight shaped his vision to contribute beyond institutional medicine and address healthcare access at a community and systems level.
              </p>
              <p>
                 Guided by a strong humanitarian ethos and a commitment to public service, Dr. Khan established the Humancare Foundation Trust as a platform to translate medical expertise into structured social impact. As Managing Trustee, he provides strategic direction, governance oversight, and programmatic leadership, ensuring that the Trust’s initiatives are sustainable, outcome-oriented, and aligned with national public health priorities.</p>
            
            
            <p>Under his leadership, the Trust implements a range of interventions including preventive healthcare programs, medical and diagnostic services, health awareness initiatives, and community capacity-building efforts. Dr. Khan’s work reflects a long-term vision of strengthening healthcare systems and delivering equitable, dignified, and compassionate care to those most in need.
              </p>
              
              </div>
          </div>
        </div>
      )}

      {/* ================= AYESHA MODAL ================= */}
      {activePerson === "ayesha" && (
        <div className="trustee-modal" onClick={() => setActivePerson(null)}>
          <div
            className="modal-content modal-horizontal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActivePerson(null)}
            >
              ✕
            </button>

            {/* <div className="modal-left">
              <img src={Salia} alt="Ayesha Shaikh" />
            </div> */}

            <div className="modal-right">
              <h2>Mrs. Saleha Khan</h2>
              <h4>Main Trustee – Humancare Foundation
</h4>

            <p>
              Mrs. Saleha Khan serves as the Main Trustee of Humancare Foundation, a charitable trust established in 2025 with a focused mandate to advance healthcare access, preventive care, and educational support across India. With a professional background as a Yoga Therapist and a Science Graduate, she brings a structured, holistic, and sustainability-oriented perspective to the Foundation’s governance and program design.
Associated with the Humancare journey since 2009, Mrs. Khan has played a significant role in strengthening the ethical, social, and people-centric framework that underpins the Humancare ecosystem. Her long-standing involvement and strategic insight have contributed to embedding social responsibility as a core value rather than a peripheral activity.
            </p>
            <p>
              Mrs. Khan has been instrumental in conceptualizing and advocating the formation of Humancare Foundation as a dedicated institutional platform to implement structured CSR and social impact initiatives. Her vision was to ensure that Humancare’s operational success is translated into measurable and accountable social outcomes, particularly for underserved and vulnerable populations in India.
As Main Trustee, she provides strategic oversight, policy guidance, and governance leadership, ensuring that all Foundation initiatives are aligned with defined objectives, statutory compliance, transparency, and long-term sustainability. She actively 
            </p>
            <h5>
              promotes:
            </h5>
            <p>
              Ethical governance and accountability frameworks
Outcome-based healthcare and education programs
Preventive healthcare, wellness, and community awareness initiatives
Integration of holistic health approaches with evidence-based medical services
Her expertise in yoga therapy has further enabled the Foundation to design wellness-oriented programs that complement clinical interventions, focusing on preventive health, lifestyle management, mental well-being, and community resilience. This integrated approach reflects global best practices in public health and CSR implementation.
            </p>
            <p>
              Mrs. Khan strongly believes that impactful CSR requires collaboration with public institutions, private stakeholders, NGOs, and community organizations. Under her trusteeship, Humancare Foundation aims to develop scalable models, forge strategic partnerships, and implement programs that deliver sustainable social value rather than short-term relief.
            </p>
            <p>She is known for her disciplined, values-driven leadership approach, emphasizing governance, inclusivity, and measurable impact. Her stewardship ensures that the Foundation remains compliant with regulatory frameworks while continuously improving program effectiveness and social reach.</p>
            <p>Through her role as Main Trustee, Mrs. Saleha Khan continues to guide Humancare Foundation toward its long-term objective of becoming a credible and responsible institution contributing meaningfully to India’s healthcare and education ecosystem.</p>
            </div>
          </div>
        </div>
      )}


      {/* ================= UPENDRA MODAL ================= */}
      {activePerson === "upendra" && (
        <div className="trustee-modal" onClick={() => setActivePerson(null)}>
          <div
            className="modal-content modal-horizontal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActivePerson(null)}
            >
              ✕
            </button>

            {/* <div className="modal-left">
              <img src={Upendra} alt="Dr. Upendra Haribhau Sontakke" />
            </div> */}

            <div className="modal-right">
              <h2>Dr. Upendra Haribhau Sontakke</h2>
              <h4>CSR & Social Development Leader</h4>

              <p>
                A successful Social Sector Leader having 27+ years of experience in development sector with CSRs, Government, IDAs, INGOs and NGOs having strong expertise in planning and execution of socio-economic development programs for less privileged people in India and Developing Countries like Afghanistan, Sri Lanka, Kenya, Congo, Ethiopia and Bangladesh
              </p>

              <p>
             Being a CSR Leader, Upendra Sontakke has successfully developed and executed Corporate Social Responsibility (CSR) policies for various organizations under companies Act 2013. He was part of projects impact evaluation process and tools development at National level, conducted project impact evaluation of more than 200 projects across India, Afghanistan and Kenya. Planned and executed need based projects in areas of  Healthcare, Livelihood, Skill Development, Women Empowerment, Education, Malnutrition, Child Labour & Child Rights, Early Childhood Development, Watershed (NRM) program, Improved Agricultural Practices, Emergency Response & Preparedness, NGOs Partnership Management, Government Liaison, Stakeholder Management, Donors & Research Institutes Networking, Strategic Relationships, Program Reporting, Research & Analysis, Internal & External Communication, Impact Assessment,
              </p>

           

              <h4>Professional Engagements</h4>
              <ul>
                <li>	Dy. State Representative at CRS_USCCB an International Development Agency</li>
                <li>	CSR Head at Landmark Group (Dubai Based Reatil business company)</li>
                <li>	CSR & Sustainability Head at EMCO Ltd</li>
                <li>	CSR Head at LAVASA Corporation Ltd (HCC Group Company)</li>
                <li>	CSR & Sustainability Head at ASTARC Group</li>
                <li>	CSR Head at Scholle IPN India Pvt. Ltd</li>
                <li>	State Head Maharashtra at India CSR Network</li>
                <li>	General Manager (CSR), MPBCDC Govt of Maharashtra</li>
                <li>	General Manager (CSR), MAHAPREIT, Social Justice and Special Assistance Dept. Govt. of Maharashtra</li>
                <li>	Honorary Regional Director Maharashtra by CASI NewYork (US Based Sustainability Institute)</li>
                <li>	Member of Maharashtra Government Chief Minister Office CSR Cell (SAHABHAG)</li>
                <li>	Advisor, Action for Rural Technology</li>
                <li>	Advisor, NIWAS</li>
                <li>	Advisor, NIWARA Centre for Old age and Abandoned people</li>

              </ul>

              <h4>Professional Engagements</h4>
              <ul>
                <li>Dy. State Representative – CRS_USCCB (International Development Agency)</li>
                <li>CSR Head – Landmark Group (Dubai)</li>
                <li>CSR & Sustainability Head – EMCO Ltd</li>
                <li>CSR Head – Lavasa Corporation Ltd (HCC Group)</li>
                <li>CSR & Sustainability Head – ASTARC Group</li>
                <li>CSR Head – Scholle IPN India Pvt. Ltd</li>
                <li>State Head Maharashtra – India CSR Network</li>
                <li>General Manager (CSR) – MPBCDC, Govt. of Maharashtra</li>
                <li>General Manager (CSR) – MAHAPREIT, Govt. of Maharashtra</li>
                <li>Honorary Regional Director Maharashtra – CASI New York</li>
                <li>Member – CM Office CSR Cell (SAHABHAG), Maharashtra</li>
                <li>Advisor – Action for Rural Technology, NIWAS & NIWARA</li>
              </ul>

              <h4>Career Achievements:</h4>
              <ul>
                <li>•	ZEE 24 Taas News Channel CSR Award, February 2022</li>
                <li>•	Big Brain Khelt Ratna award in Social Sector Category as Best CSR & NGO Consultancy, Kolkatta July 2022</li>
                <li>•	Selected in the list of “TOP 25 STERLING CSR LEADERS IN INDIA” by TIMES CSR Magazine (September, 2017).</li>
                <li>•	Awarded “CSR PROFESSIONAL OF THE YEAR” by INDIA CSR & BIMTECH on August, 2016 at INDIA CSR Award event in Bangeluru</li>
                <li>•	Awarded citation of “100 MOST IMPACTFUL CSR LEADERS” (Global Listing) by World CSR Day & World sustainability in February, 2016. </li>
                <li>•	Awarded for “Excellence in Gujarat Earthquake response program and Tamil Nādu Tsunami response program” by CRS-USCCB</li>
                <li>•	Awarded an honorary position of Regional Director by CASI New York, an institute of CSR & Sustainability certification. </li>
              
                              <li>•	Felicitated with various awards by Institutes like World CSR Day, IndiaCSR Network, Govt. of Maharashtra, Zillah Parishad, CSR Times and CASI Global. </li>
                <li>•	Interviewed by leading CSR magazine, “CSR & Competitiveness” for his work in CSR domain in 2015 and 2016 & CSR Times</li>
                <li>•	Helped 200+ grass root NGOs in transforming socio-economic capacities of people.</li>
                <li>•	Written various articles on CSR for various Magazines & Journals.</li>
                <li>•	Member of various knowledge sharing platforms i.e., IndiaCSR, Solution Exchange (UNDP), Maharashtra Government CSR interaction body. </li>
                <li>•	Managed & developed various teams of professionals and built their capacities.</li>
                <li>•	Conducted various Community Participatory Programs at village level.</li>
                <li>•	Worked In India (States of Maharashtra, Gujrat, Rajasthan, MP, West Bengal, Chhattisgarh, Puducherry, DN& H, Jharkhand, Bihar, Andhra Pradesh, Telangana,Tamil Nādu and J&K).</li>
                <li>•	International Exposures: Worked in Countries Afghanistan, Sri Lanka, Bangladesh, Kenya, Israel, Congo (DRC), Bangladesh</li>
               


              </ul>

              <h4>Academics</h4>
              <ul>
                <li>	Doctorate in Social Work from World Human Rights Protection Commission </li>
                <li>MBA in Rural Management</li>
                <li>Disaster Risk Reduction Diploma Certification from World Bank Institute</li>
                <li>	B.Tech. in Agricultural Engineering</li>
              </ul>

            </div>
          </div>
        </div>
      )}



      {/* ================= TIWARI MODAL ================= */}
      {activePerson === "tiwari" && (
        <div className="trustee-modal" onClick={() => setActivePerson(null)}>
          <div
            className="modal-content modal-horizontal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActivePerson(null)}
            >
              ✕
            </button>

            {/* <div className="modal-left">
              <img src={Tiwari} alt="Tiwari" />
            </div> */}

            <div className="modal-right">
              <h2>Dr. B S Tiwary</h2>

              <p>
                Dr. B S Tiwary Member Ethics Committee for Approval of Research on Humans, IIT Delhi, Member National Mission for Clean Ganga TERI Centre of Excellence on Water Reuse Ministry of Jal Shakti Government of India, Member UNDRR, Asia Pacific, National SDG Ambassador Principal Advisor Disaster Management Strategic Partnership Global National Governing Council Advisory Board Member to Unity of Nations Action for Climate Change Council, Representative India to 5th Cooperative Aviation Security Program Asia Pacific (CASP - AP), International Civil Aviation Organization, Fiji, International Delegate to Asia Pacific Ministerial Conference on Disaster Risk Reduction Brisbane Queensland Australia September 22 organised by Government of Australia and United Nations, Distinguished Expert Delegate to Resilience and Sustainability Summit Vision 2047 at Vigyan Bhawan from 17 to 19 Jan 23, Organized by Government of India and United Nations, Delegate to World Sustainability Development Summit 2023, Honoured by Dept of State Bureau of Diplomatic Security, Government of United States of America, Honoured by Consular Corps Diplomatique Comprising of Consul Generals and Hony Consuls representing 115 countries in India for promoting International Relations, International Development,Represented India in Canada in International Program Sponsored by Government of India and Canada,  Ex Director Stellargene Technologies, TBIU, IIT Delhi, Director Concious Humanity Network Foundation, Principal Advisor Disaster Management Zone 4 Solutions, Prepared Disaster Management Plan, Safety Drill for R&I Park, IIT Delhi, Building Innaugerated by Hon'ble President of India, Honoured by Sri Sri Ravishankar for establishing Centre of Excellence on Disaster Risk Reduction at Sri Sri University Cuttack, represented our  country as part of  inspection teams of International Civil Aviation Organization, International Air Transport Organizations, under Universal Aviation Security Audit Programme, security audit of Indian Air carriers, Foreign Air Carriers by International organizations such as Federal Aviation Administration of United States of America, Britain, Germany, Australia etc. Implementation of various contingency plans for meeting man made or natural disasters,  Facilitating economic and commercial development of Aviation and other sectors by application of security policy to ensure economic growth without compromising on Aviation Security and National Security, 
Have contributed as member to various organizing Committees in management of International events, meetings and conferences such as Indo-Africa Meet, Lusofania Games, Common wealth Games, BRICS summit etc., For the first time in the history of Civil Aviation guided Indian Railways and commissioned in record time Santacruz Air Cargo Terminal  the joint venture of Indian Railway (Concor) and Mumbai International Airports Ltd for which Dr Tiwary was praised in writing by Chairman CONCOR, Government of India for ground to strategic level understanding of Aviation Security issues.  Besides he was also appreciated in writing for his sterling account of professionalism by National Security Council Secretariat of the office of Hon’ble Prime Minister of India, Chief of staff of Indian Navy, Chairman, Air India, CEO, AITSL Ltd. And by Embassies, Consulates and International Organisations etc.  He also vetted the Security Design of Hotel Taj Santacruz, Mumbai which is first of its kind in the entire country as a hotel which is part of the terminal building of an Airport. Further he also vetted the design and was also associated with Colaba Seepz Metro Station Project, Multi Level car parkings, Air Catering, Ware Houses, Hotels, Implementation of various contingency plans for meeting man made or natural disasters, Security vetting of design of Airport Infrastructure covering Terminals, commercial area, Fuel facility, Terminal hotels, Airport Metro stations, Air Ambulances, General Aviation, Air Catering facilities and Cargo ware houses.  Formulation, implementation and ensuring adherence to all regulatory compliance in accordance with established standards of International Civil Aviation Organisation (ICAO) involving large number of diverse stakeholders of different nationalities, Navy, Army, Air Force, Police, State Governments, Revenue administration, Central Governments, International Organizations, NGOs, Passengers, and Airlines etc. in multi National, Multi Cultural Environment with stake holders of different Nationalities, Ensuring smooth facilitation in line with International protocols by effectively co-ordinating with foreign embassies, Indian Ministry of External Affairs and Ministry of External Affairs of Foreign Governments and various other agencies regarding movements of Heads of States, Heads of Governments and Heads international bodies like UN, ICAO, WTO etc., Have participated as domain expert in various Research and Development related programmes concerning Research and Development in explosive detection techniques, drones for agricultural etc. and evolvement of related equipment etc. with Indian Institute of Science, Bangalore, College of Military Engineering, Pune.  He also vetted the Security Design of Hotel Taj Santacruz, Mumbai which is first of its kind in the entire country as a hotel which is part of the terminal building.  Further he also vetted the design and was also associated with Colaba Seepz Metro Station Project, Multi Level Car Parking, expansion of all phases of Mumbai International Airport. He also security vetted the designs of terminals and aviation facilities of Delhi International Airport Ltd., Multi-Level Car Parking’s and Terminals, cargo and other infrastructure and facilities of Goa, Shirdi, Hyderabad, Ranchi, Nagpur, Raipur, Dibrugarh, Mangalore, Bangalore etc.,
On being selected from India he had successfully undergone Advanced Crisis Response course at Louisiana State Police Academy, USA. Dr Tiwary is Government of India Certified National Aviation Security Instructor and Auditor, International Civil Aviation Organization certified International Aviation Security Instructor, Ex Head of Environmental Occupational Health Safety and Regulatory compliance IIT Delhi, Ex Head of Bureau of Civil Aviation Security Northern Eastern and Western Indian Regions, Senior Officer incharge Policy and operations BCAS  Government of India, Ex Commandant Border Security Force, Veteran Indian Army
              </p>

              
            </div>
          </div>
        </div>
      )}

      {/* ================= CHAKRAVARTHI MODAL ================= */}
      {activePerson === "chakravarthi" && (
        <div className="trustee-modal" onClick={() => setActivePerson(null)}>
          <div
            className="modal-content modal-horizontal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActivePerson(null)}
            >
              ✕
            </button>

            {/* <div className="modal-left">
              <img src={Chakravarthi} alt="Chakravarthi" />
            </div> */}

            <div className="modal-right">
              <h2>Mr. D.S. Chakravarthi</h2>
              <h4>Healthcare Operations & Quality Management | Executive Leadership | Global Medical Assistance Operations | Academician, Researcher | Certified Assessor |<br />Mobile: (+91) 9867755952, (+971) 509720469  email: dschakri@rediffmail.com</h4>

              <p>
               With over 30 years of distinguished experience, Mr. D.S. Chakravarthi is a seasoned and result-oriented C-level executive, widely recognized for his impactful leadership, strategic vision, and sustained contributions to the healthcare industry. His multifaceted expertise spans healthcare administration and management, global operations, academic mentorship, research, and quality assessments, with significant contributions at both national and international levels.
              </p>

              <p>
             Currently, he serves as the Global Chief Operating Officer of Humancare Worldwide—a globally established medical assistance organization headquartered in Mumbai, with offices in Dubai, Oman, Bangladesh, UK, and registered presence in the USA, with expansions underway in Thailand, Kenya, Malaysia, and Turkey. He oversees a broad portfolio of global operations, including Air Repatriations, Medical Tourism, Mortal Remains Transfer, Corporate Medical Solutions, Ground Ambulance services, and capacity building in healthcare through accreditation, academic collaboration, and research partnerships.
              </p>
              <p>
                Previously, Mr. Chakravarthi was the Chief Executive Officer at Prashanth Hospital, Vijayawada, for over 15 years, where he led operations and administration since 2008. He also concurrently served as the COO of Dhruva Systems, managing IT turnkey solutions and projects for over 13 years.
              </p>

              <p>Academically, he holds multiple advanced degrees including an MBA in Hospital Management, MPhil (HHSM), MPH, and a PhD in Management. He is UGC-NET qualified and has obtained numerous professional certifications including MCSE, PGDHA, PGDMLS, CPHIC, CCHT, LSSGB, CHSP, CMTP,  and is a Fellow of ISQua. His commitment to quality and patient safety is reflected in his active role as an assessor/Auditor for several national and international standards, such as NQAS, ISO, 5S, Baldrige Excellence Framework, WHO PSFHS, CAHO ACE, AACI, IATA Aviation Lead Auditor among others. </p>
            <p>
              In addition, has successfully completed several professional development programs, including the Mastering Corporate Social Responsibility Certificate Course, Patient Safety Officer Certification, etc.
            </p>
            
            <p>
              Mr. Chakravarthi is also engaged in academia. He is a Board of Studies Member at Nagarjuna University Andhra Pradesh, an Adjunct Faculty at Yenepoya (Deemed-to-be University), Mangaluru, and a Visiting Faculty at Sai Datta Institutions, Hyderabad. He mentors students from diverse disciplines including PharmD, BPharm, Nursing, and Healthcare Management in their research and academic projects.
            </p>
            <p>
              A prolific contributor to the professional and research community, he has authored and edited numerous publications, including contributions to a Guinness World Record-winning book recognized for being the thickest book with the highest number of author contributions—a feat also acknowledged by the India Book and Asia Book of Records. With over 25 publications in leading national and international journals, he has served as editor, reviewer, examiner, panellist, speaker, guest of honour, chief guest, and session chair at various conferences.
            </p>
            <p>
              He is affiliated with several esteemed professional bodies, including PMI, QCI, CAHO, AHPI, HIMSS, RFHHA, NHRDN, QCFI, IRCA, AACCI, CII, ICC, AHQP and among others. He serves as Secretary of AHMP, Member of the CAHO International Committee, Honorary Chairman – Medical Services Committee of TACCI, and Mentor/Advisor to premier institutions like BITS Pilani. He is also a Climate and Health Ambassador, advocating for sustainable healthcare development and public health innovation.
            </p>
            <p>
              With a career grounded in service, quality, leadership, and innovation, Mr. Chakravarthi continues to be a guiding force, inspiring the next generation of healthcare professionals through his strategic insights, academic contributions, and unwavering commitment to healthcare excellence
            </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurPeople;
