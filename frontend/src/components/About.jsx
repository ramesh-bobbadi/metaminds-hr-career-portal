import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backgroundVideo from '../assets/background-video.mp4';
import aboutHeroImg from '../assets/about_hero.png';
import founderImg from '../assets/founder.jpeg';
import directorImg from '../assets/director.jpeg';
import './styles/About.css';

function About() {
  const targetSectionRef = useRef(null);

  const scrollToContent = () => {
    targetSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      
      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <video autoPlay loop muted playsInline className="about-bg-video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="about-hero-overlay"></div>
          
          <div className="about-hero-card reveal">
            <div className="about-hero-content">
              <h1>Discover <span className="highlight">Our Story</span></h1>
              <p>
                At Meta Minds, we engineer digital futures. We combine custom software design, 
                secure cloud architectures, and proactive cybersecurity strategies to build 
                enterprise-ready digital platforms that empower global organizations to scale with trust.
              </p>
              <button className="about-scroll-button" onClick={scrollToContent}>
                Our Vision & Mission &darr;
              </button>
            </div>
            <div className="about-hero-image">
              <img src={aboutHeroImg} alt="Meta Minds Team collaboration and engineering" />
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section ref={targetSectionRef} className="about-section">
          <div className="about-section-container">
            <span className="about-badge reveal">Our Purpose</span>
            <h2 className="reveal">Guided By Innovation, Anchored In Trust</h2>
            
            <div className="mission-vision-grid">
              {/* Mission Card */}
              <div className="mvv-card reveal">
                <div className="mvv-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3>Our Mission</h3>
                <p className="mvv-desc">
                  At Meta Minds Pvt. Ltd., our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation. We are committed to delivering high-quality services in Web Development, App Development, UI/UX Design, Cybersecurity, Cloud Services, Digital Marketing, Data Analytics & AI, DevOps, and IT Consulting.
                </p>
                <p className="mvv-desc">
                  By combining innovation, expertise, and customer-centric strategies, we aim to help organizations unlock their full potential, embrace emerging technologies, and achieve sustainable success in an ever-evolving digital world.
                </p>
                <div className="mvv-quote">
                  "Transforming Ideas into Intelligent Digital Solutions."
                </div>
              </div>

              {/* Vision Card */}
              <div className="mvv-card reveal">
                <div className="mvv-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p className="mvv-desc">
                  At Meta Minds Pvt. Ltd., our vision is to become a globally trusted technology company that drives innovation, accelerates digital transformation, and empowers businesses to achieve sustainable growth through cutting-edge IT solutions.
                </p>
                <p className="mvv-desc">
                  We aspire to shape the future by delivering intelligent, secure, and scalable technologies that create lasting value for our clients, partners, and communities.
                </p>
                <div className="mvv-quote">
                  "To be a leader in digital innovation, transforming businesses through technology and creating a smarter, connected future."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-section values-section">
          <div className="about-section-container">
            <span className="about-badge reveal">Core Principles</span>
            <h2 className="reveal">The Values That Shape Us</h2>
            
            <div className="values-showcase-grid">
              {/* Value 1: Innovation */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>We embrace creativity and emerging technologies to deliver forward-thinking solutions.</p>
              </div>

              {/* Value 2: Excellence */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                  </svg>
                </div>
                <h3>Excellence</h3>
                <p>We strive for the highest standards of quality, performance, and customer satisfaction.</p>
              </div>

              {/* Value 3: Integrity */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 11l2 2 4-4"></path>
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>We conduct our business with honesty, transparency, and ethical responsibility.</p>
              </div>

              {/* Value 4: Customer Success */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"></path>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3>Customer Success</h3>
                <p>Our clients' growth and success are at the heart of every solution we create.</p>
              </div>

              {/* Value 5: Collaboration */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                </div>
                <h3>Collaboration</h3>
                <p>We believe teamwork, mutual respect, and shared knowledge drive exceptional results.</p>
              </div>

              {/* Value 6: Continuous Learning */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
                  </svg>
                </div>
                <h3>Continuous Learning</h3>
                <p>We foster a culture of learning, adaptability, and continuous improvement.</p>
              </div>

              {/* Value 7: Accountability */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Accountability</h3>
                <p>We take ownership of our commitments and deliver with responsibility and professionalism.</p>
              </div>

              {/* Value 8: Security & Trust */}
              <div className="value-showcase-card reveal">
                <div className="value-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0110 0v4"></path>
                  </svg>
                </div>
                <h3>Security & Trust</h3>
                <p>We prioritize data protection, cybersecurity, and building long-term trusted relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leaders Section */}
        <section className="about-section">
          <div className="about-section-container">
            <span className="about-badge reveal">Leadership</span>
            <h2 className="reveal">The Pillars Behind Meta Minds</h2>
            
            <div className="leaders-grid pillars-layout">
              {/* Leader 1: Founder */}
              <div className="leader-card pillar-card reveal">
                <div className="pillar-left-col">
                  <div className="leader-image-container">
                    <img src={founderImg} alt="Maradani Narendra Babu" className="leader-photo" />
                  </div>
                </div>
                
                <div className="pillar-right-col">
                  <h3>Maradani Narendra Babu</h3>
                  <div className="leader-role">CEO & Founder</div>
                  <div className="leader-tagline">"Transforming Ideas into Intelligent Digital Solutions."</div>
                </div>
                
                <div className="pillar-hover-bio">
                  <div className="bio-scroll-area">
                    <p>
                      Maradani Narendra Babu is the visionary CEO & Founder of Meta Minds Pvt. Ltd., a dynamic IT solutions company dedicated to empowering businesses through innovation, technology, and digital transformation.
                    </p>
                    <p>
                      With a strong focus on delivering value-driven solutions, he leads Meta Minds with a commitment to excellence, customer success, and continuous innovation. Under his leadership, the company provides a wide range of services, including Web Development, Mobile App Development, UI/UX Design, Cybersecurity, Cloud Services, Digital Marketing, Data Analytics & AI Solutions, DevOps & Infrastructure Automation, and IT Consulting & Training.
                    </p>
                    <p>
                      His vision is to help organizations leverage technology to achieve sustainable growth, improve operational efficiency, and create impactful digital experiences. By fostering a culture of creativity, collaboration, and innovation, he continues to drive Meta Minds toward becoming a trusted technology partner for businesses worldwide.
                    </p>
                    <p>
                      At Meta Minds Pvt. Ltd., the mission is simple: to transform ideas into powerful digital solutions that inspire growth, innovation, and success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Leader 2: Director */}
              <div className="leader-card pillar-card reveal">
                <div className="pillar-left-col">
                  <div className="leader-image-container">
                    <img src={directorImg} alt="Maradani Vijaya Lakshmi" className="leader-photo" />
                  </div>
                </div>
                
                <div className="pillar-right-col">
                  <h3>Maradani Vijaya Lakshmi</h3>
                  <div className="leader-role">Director</div>
                  <div className="leader-tagline">"Empowering Growth Through Vision and Excellence."</div>
                </div>
                
                <div className="pillar-hover-bio">
                  <div className="bio-scroll-area">
                    <p>
                      Maradani Vijaya Lakshmi serves as the Director of Meta Minds Pvt. Ltd., contributing to the company's growth through strong leadership, strategic vision, and a commitment to excellence. She plays a vital role in driving innovation, fostering collaboration, and ensuring the delivery of quality technology solutions that empower businesses in the digital era.
                    </p>
                    <p>
                      With a focus on sustainable growth and customer success, she supports Meta Minds' mission of transforming ideas into impactful digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Call To Action Section */}
        <section className="about-section" style={{ paddingBottom: "120px" }}>
          <div className="about-section-container">
            <span className="about-badge reveal">Join Our Journey</span>
            <h2 className="reveal">Ready to Shape the Future?</h2>
            
            <div className="cta-grid">
              {/* Talents CTA */}
              <div className="cta-card cta-talent reveal">
                <div className="cta-card-content">
                  <h3>Join Our Team</h3>
                  <p>
                    Are you a passionate developer, cybersecurity expert, or cloud specialist looking for your next challenge? 
                    Thrive in an environment of excellence, collaboration, and rapid professional growth.
                  </p>
                </div>
                <Link to="/careers" className="cta-btn cta-btn-talent">
                  View Career Openings &rarr;
                </Link>
              </div>

              {/* Clients CTA */}
              <div className="cta-card cta-client reveal">
                <div className="cta-card-content">
                  <h3>Partner With Us</h3>
                  <p>
                    Ready to build custom, secure, and enterprise-grade technology? Contact our advisory team today 
                    to schedule an architecture consultation or vulnerability audit.
                  </p>
                </div>
                <Link to="/contactus" className="cta-btn cta-btn-client">
                  Schedule a Consultation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;