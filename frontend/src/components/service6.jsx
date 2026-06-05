import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import devopsImg from '../assets/web&appDev.webp';
import './styles/service2.css';

const features = [
  {
    icon: '⚙️',
    title: 'Infrastructure Automation',
    desc: 'Automate cloud provisioning, deployments, and environment management so your teams deploy reliably at scale.',
    bullets: [
      'IaC with Terraform and CloudFormation',
      'Automated provisioning and self-service stacks',
      'Immutable infrastructure deployments',
    ],
  },
  {
    icon: '🚀',
    title: 'CI/CD Pipelines',
    desc: 'Build automated integration and delivery workflows that accelerate release velocity while reducing deployment risk.',
    bullets: [
      'Pipeline orchestration with GitHub Actions & Jenkins',
      'Automated testing and release gating',
      'Zero-downtime rollout strategies',
    ],
  },
  {
    icon: '🧠',
    title: 'Consulting & Training',
    desc: 'We advise teams on best practices, operations maturity, and cloud governance while upskilling your engineers and leaders.',
    bullets: [
      'DevOps maturity assessments and roadmaps',
      'Team training in automation, cloud, and delivery practices',
      'Ongoing operational coaching and support',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Assessment & Roadmap',
    desc: 'We evaluate your current delivery model, infrastructure, and team capabilities to create a tailored DevOps transformation plan.',
  },
  {
    num: '02',
    title: 'Automate & Deploy',
    desc: 'We build automation pipelines, enable infrastructure as code, and launch reproducible deployments across environments.',
  },
  {
    num: '03',
    title: 'Operate & Scale',
    desc: 'We monitor performance, tune processes, and extend your platform as your organization grows.',
  },
  {
    num: '04',
    title: 'Train Your Team',
    desc: 'We provide upskilling sessions and ongoing coaching so your team can own the DevOps process with confidence.',
  },
];

function Service6() {
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
            <span className="s2-badge"><span /> DevOps & Infrastructure</span>
            <h1>
              DevOps Automation <span className="highlight">& Training</span> for Reliable Delivery
            </h1>
            <p className="s2-lead">
              We create resilient deployment systems, infrastructure automation, and training frameworks that improve reliability and speed.
            </p>
            <p className="s2-sub">
              Our consultants bridge operations and engineering with automation, governance, and hands-on training designed for modern tech teams.
            </p>
            <div className="s2-cta-row">
              <Link to="/contactus" className="s2-btn-primary">Request a DevOps Review</Link>
              <Link to="/services" className="s2-btn-outline">Back to Services</Link>
            </div>
          </div>
          <div className="s2-hero-image-wrap">
            <div className="s2-float-pill s2-pill-1">
              <span className="pill-num">99%</span>
              Pipeline uptime
            </div>
            <img className="s2-hero-img" src={devopsImg} alt="DevOps automation" />
            <div className="s2-float-pill s2-pill-2">
              <span className="pill-num">4x</span>
              release speed improvement
            </div>
          </div>
        </div>
      </section>

      <div className="s2-stats-bar">
        <div className="s2-stats-inner">
          <div className="s2-stat">
            <h3>Automated</h3>
            <p>Infrastructure, build, and release workflows.</p>
          </div>
          <div className="s2-stat">
            <h3>Governed</h3>
            <p>Secure controls and audit-ready operations.</p>
          </div>
          <div className="s2-stat">
            <h3>Reliable</h3>
            <p>Repeatable systems you can trust every release.</p>
          </div>
          <div className="s2-stat">
            <h3>Trained</h3>
            <p>Your team gains ownership of the process.</p>
          </div>
        </div>
      </div>

      <section className="s2-features">
        <div className="s2-section-head">
          <h2>Transform your engineering operations</h2>
          <p>Our DevOps and consulting practice helps teams move faster with better stability, automation, and governance.</p>
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
          <h2>Delivery model</h2>
          <p>We follow a phased DevOps rollout to minimize risk and empower your team along the way.</p>
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

export default Service6;
