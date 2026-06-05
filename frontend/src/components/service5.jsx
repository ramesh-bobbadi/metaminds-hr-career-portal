import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import analyticsImg from '../assets/cloud.webp';
import './styles/service2.css';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    desc: 'We build intelligent pipelines that convert business data into predictive insights and automated recommendations.',
    bullets: [
      'Machine learning models for customer segmentation',
      'Predictive analytics for sales and operations',
      'Recommendation engines and personalization',
    ],
  },
  {
    icon: '📊',
    title: 'Data Engineering & Warehousing',
    desc: 'Our team designs analytics-ready data platforms so your teams can query, visualize, and action data reliably.',
    bullets: [
      'ETL/ELT pipeline design and automation',
      'Data lake and warehouse architecture',
      'Real-time streaming and event tracking',
    ],
  },
  {
    icon: '🔎',
    title: 'Business Intelligence',
    desc: 'We deliver dashboards, KPIs, and reporting systems that help leaders make faster, more confident decisions.',
    bullets: [
      'Custom analytics dashboards',
      'Self-service reporting for business teams',
      'Operational monitoring and anomaly detection',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Data Discovery',
    desc: 'We audit your source systems, data quality, and analytics requirements to build a strong foundation for reporting and AI.'
  },
  {
    num: '02',
    title: 'Architecture Design',
    desc: 'We design a scalable data platform that unifies cloud data, internal systems, and business metrics into one source of truth.'
  },
  {
    num: '03',
    title: 'Model & Dashboard Delivery',
    desc: 'Our team builds predictive models, BI reports, and operational dashboards that are tailored for your stakeholders.'
  },
  {
    num: '04',
    title: 'Operationalize & Iterate',
    desc: 'We automate retraining, reporting cadences, and governance so your analytics remain accurate as your business grows.'
  },
];

function Service5() {
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
            <span className="s2-badge"><span /> Data Analytics & AI</span>
            <h1>
              Data-Driven <span className="highlight">Analytics</span> & AI Solutions
            </h1>
            <p className="s2-lead">
              We help companies transform raw data into strategic advantage with analytics pipelines, business intelligence, and machine learning.
            </p>
            <p className="s2-sub">
              From data ingestion and warehousing to AI-driven insight delivery, our solutions are built to improve decisions, speed operations, and spark innovation.
            </p>
            <div className="s2-cta-row">
              <Link to="/contactus" className="s2-btn-primary">Book an Analytics Audit</Link>
              <Link to="/services" className="s2-btn-outline">Back to Services</Link>
            </div>
          </div>
          <div className="s2-hero-image-wrap">
            <div className="s2-float-pill s2-pill-1">
              <span className="pill-num">AI</span>
              Predictive models
            </div>
            <img className="s2-hero-img" src={analyticsImg} alt="Data analytics process" />
            <div className="s2-float-pill s2-pill-2">
              <span className="pill-num">360°</span>
              Business visibility
            </div>
          </div>
        </div>
      </section>

      <div className="s2-stats-bar">
        <div className="s2-stats-inner">
          <div className="s2-stat">
            <h3>Real-time</h3>
            <p>Data pipelines built for live decision-making.</p>
          </div>
          <div className="s2-stat">
            <h3>Predictive</h3>
            <p>AI insights that anticipate customer and operational trends.</p>
          </div>
          <div className="s2-stat">
            <h3>Actionable</h3>
            <p>Dashboards and workflows your teams can actually use.</p>
          </div>
          <div className="s2-stat">
            <h3>Governed</h3>
            <p>Secure, compliant analytics with enterprise data controls.</p>
          </div>
        </div>
      </div>

      <section className="s2-features">
        <div className="s2-section-head">
          <h2>Analytics with impact</h2>
          <p>We combine engineering, analytics, and machine intelligence to create reporting systems that drive measurable outcomes.</p>
        </div>
        <div className="s2-feature-grid">
          {features.map((feature) => (
            <div className="s2-feature-card s2-reveal" key={feature.title}>
              <div className="s2-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <ul>
                {feature.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="s2-features">
        <div className="s2-section-head">
          <h2>How we deliver AI & analytics</h2>
          <p>Every deployment is built to be reliable, interpretable, and easy for business teams to adopt.</p>
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

export default Service5;
