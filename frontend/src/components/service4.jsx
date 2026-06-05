import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import marketingImg from '../assets/Digitalmarketing.webp';
import './styles/service2.css';

const features = [
  {
    icon: '📈',
    title: 'SEO & Organic Growth',
    desc: 'Optimize your website, content, and technical structure so search engines and customers find you first.',
    bullets: [
      'Keyword research & on-page optimization',
      'Search performance audits & technical SEO',
      'Link-building and local search authority',
    ],
  },
  {
    icon: '🎯',
    title: 'Brand Strategy & Positioning',
    desc: 'We sharpen your brand messaging and digital identity to help you stand out in competitive markets.',
    bullets: [
      'Brand voice, tone, and positioning workshops',
      'Creative campaign direction and launch assets',
      'Differentiated messaging for target audiences',
    ],
  },
  {
    icon: '✍️',
    title: 'Content Strategy & Growth',
    desc: 'Create high-value content plans that turn visitors into leads and help your business scale with authority.',
    bullets: [
      'Editorial calendars and content roadmaps',
      'Performance-driven blog, social, and email content',
      'Conversion-focused campaigns and landing pages',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Discovery & Audience Research',
    desc: 'We map your current digital footprint and customer journeys to identify the exact channels and messages that will drive growth.',
  },
  {
    num: '02',
    title: 'Strategic Campaign Planning',
    desc: 'Our team builds a measurable marketing plan that balances SEO, branding, content production, and paid reach for fast gains.',
  },
  {
    num: '03',
    title: 'Execution & Optimization',
    desc: 'We launch campaigns, monitor performance, and continually optimize your strategy based on real audience behavior and results.',
  },
  {
    num: '04',
    title: 'Reporting & Scale',
    desc: 'Transparent reporting ensures you see the ROI, while our team scales the channels that deliver the strongest customer acquisition.',
  },
];

function Service4() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.s2-reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('s2-revealed')),
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="s2-page">
      <Header />
      <section className="s2-hero">
        <div className="s2-hero-inner">
          <div className="s2-hero-text">
            <span className="s2-badge"><span /> Digital Marketing</span>
            <h1>
              Growth-Focused <span className="highlight">Digital Marketing</span> for Modern Brands
            </h1>
            <p className="s2-lead">
              We combine SEO, branding, and content strategy into a unified growth engine that increases visibility, converts leads, and strengthens customer trust.
            </p>
            <p className="s2-sub">
              From organic search and branded content to campaign creative and conversion funnels, MetaMinds helps your business capture attention and turn it into measurable momentum.
            </p>
            <div className="s2-cta-row">
              <Link to="/contactus" className="s2-btn-primary">Start a Marketing Review</Link>
              <Link to="/services" className="s2-btn-outline">Back to Services</Link>
            </div>
          </div>
          <div className="s2-hero-image-wrap">
            <div className="s2-float-pill s2-pill-1">
              <span className="pill-num">+68%</span>
              Search traffic uplift
            </div>
            <img className="s2-hero-img" src={marketingImg} alt="Digital marketing strategy" />
            <div className="s2-float-pill s2-pill-2">
              <span className="pill-num">24/7</span>
              Campaign monitoring
            </div>
          </div>
        </div>
      </section>

      <div className="s2-stats-bar">
        <div className="s2-stats-inner">
          <div className="s2-stat">
            <h3>Multi-channel</h3>
            <p>SEO, content, branding, and performance campaigns.</p>
          </div>
          <div className="s2-stat">
            <h3>Audience-first</h3>
            <p>Targeted messaging that improves customer acquisition and retention.</p>
          </div>
          <div className="s2-stat">
            <h3>Creative</h3>
            <p>Data-backed creative that turns traffic into qualified leads.</p>
          </div>
          <div className="s2-stat">
            <h3>Reporting</h3>
            <p>Clear performance dashboards for every campaign.</p>
          </div>
        </div>
      </div>

      <section className="s2-features">
        <div className="s2-section-head">
          <h2>Our marketing approach</h2>
          <p>Every digital marketing engagement includes search visibility, storytelling, and conversion optimization to build more consistent business growth.</p>
        </div>
        <div className="s2-feature-grid">
          {features.map((feature) => (
            <div className="s2-feature-card s2-reveal" key={feature.title}>
              <div className="s2-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <ul>
                {feature.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="s2-features">
        <div className="s2-section-head">
          <h2>How we deliver</h2>
          <p>Every marketing program is driven by insights, aligned to your business goals, and built to scale across channels.</p>
        </div>
        <div className="s2-steps-grid">
          {steps.map((step) => (
            <div className="s2-step-card s2-reveal" key={step.num}>
              <span className="s2-step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Service4;
