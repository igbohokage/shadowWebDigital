import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Gauge,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { faqs, portfolio, processSteps, services, testimonials } from './data.jsx';
import { RevealCard, SectionHeader } from './layout.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Hero({ scrollTo, heroY }) {
  return (
    <section className="hero section" id="home">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={stagger}>
        <motion.p className="eyebrow" variants={fadeUp}>
          Working in the shadows so your business can shine.
        </motion.p>
        <motion.h1 variants={fadeUp}>Professional Websites Built To Grow Your Business.</motion.h1>
        <motion.p className="hero-subtitle" variants={fadeUp}>
          Shadow Web Digital creates fast, mobile-friendly websites, local SEO foundations, and landing pages that help businesses attract customers, build trust, and generate more revenue.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <button className="primary-button" onClick={() => scrollTo('contact')}>
            Get a Free Quote
            <ArrowRight size={18} />
          </button>
          <button className="secondary-button" onClick={() => scrollTo('portfolio')}>
            View Our Work
            <ExternalLink size={17} />
          </button>
        </motion.div>
        <motion.div className="trust-strip" variants={fadeUp}>
          {[
            ['Mobile Responsive', ShieldCheck],
            ['SEO Optimized', Search],
            ['Fast Performance', Gauge],
            ['Custom Built', Code2],
          ].map(([label, Icon]) => (
            <span key={label}>
              <Icon size={16} />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div className="hero-visual" style={{ y: heroY }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="dashboard-mockup" aria-label="Futuristic website performance dashboard mockup">
          <div className="mockup-top">
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-grid">
            <div className="mockup-panel wide">
              <p>Revenue Pipeline</p>
              <strong>$84.7k</strong>
              <div className="chart-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="mockup-panel">
              <p>Local Leads</p>
              <strong>+63%</strong>
            </div>
            <div className="mockup-panel">
              <p>Page Speed</p>
              <strong>98</strong>
            </div>
            <div className="mockup-panel wide gradient-panel">
              <img src="/shadowWeb.png" alt="" width="64" height="64" decoding="async" />
              <div>
                <p>Shadow system active</p>
                <strong>Growth mode</strong>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services">
      <SectionHeader eyebrow="Services" title="SEO-Friendly Website Design Services" text="Every build is designed to make your business easier to find, easier to trust, and easier to choose." />
      <div className="service-grid">
        {services.map((service, index) => (
          <RevealCard className="service-card" key={service.title} delay={index * 0.05}>
            <service.icon className="card-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <Check size={15} />
                  {benefit}
                </li>
              ))}
            </ul>
            <a href="#contact">
              Start Growing
              <ArrowRight size={16} />
            </a>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export function WhyChoose() {
  const items = [
    ['More visibility online', 'Build a crawlable, search-ready website around the services customers already search for.'],
    ['Increased customer trust', 'Look established before the first phone call.'],
    ['More leads and sales', 'Give visitors clear reasons and routes to act.'],
    ['Mobile optimized experience', 'Make every tap, scroll, and form feel effortless.'],
    ['Ongoing support', 'Keep improving after launch with a partner behind the scenes.'],
  ];

  return (
    <section className="why section">
      <div>
        <p className="eyebrow">Why Choose Us</p>
        <h2>A Web Design Partner For Search Visibility And Growth</h2>
        <p>
          You stay focused on serving customers. We build the online presence that helps search engines understand your services and helps visitors choose you faster.
        </p>
      </div>
      <div className="growth-list">
        {items.map(([title, text], index) => (
          <motion.div
            key={title}
            className="growth-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.06 }}
          >
            <BadgeCheck />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section" id="process">
      <SectionHeader eyebrow="Process" title="A Clear Website Launch And SEO Process" text="No mystery in the work itself: just focused strategy, polished execution, technical SEO, and measurable growth signals." />
      <div className="timeline">
        {processSteps.map(([title, text], index) => (
          <motion.div
            className="timeline-item"
            key={title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ delay: index * 0.12 }}
          >
            <span>{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <SectionHeader eyebrow="Portfolio" title="Business Website Examples Built Around Real Outcomes" text="Sample project directions showing how targeted websites can move practical numbers: bookings, calls, leads, and inquiries." />
      <div className="portfolio-grid">
        {portfolio.map((project, index) => (
          <RevealCard className="project-card" key={project.title} delay={index * 0.07}>
            <div className="project-image">
              <project.icon />
              <span>{project.industry}</span>
            </div>
            <h3>{project.title}</h3>
            <strong>{project.metrics}</strong>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats-band">
      {[
        ['42%', 'average lift in qualified inquiries'],
        ['98', 'mobile page speed target'],
        ['5+', 'growth channels connected'],
        ['24/7', 'online credibility'],
      ].map(([value, label], index) => (
        <motion.div
          className="stat"
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <AnimatedNumber value={value} />
          <p>{label}</p>
        </motion.div>
      ))}
    </section>
  );
}

function AnimatedNumber({ value }) {
  const numeric = Number.parseInt(value, 10);
  const [display, setDisplay] = useState(value.includes('/') ? value : '0');

  useEffect(() => {
    if (Number.isNaN(numeric) || value.includes('/')) return;
    let frame;
    let start;
    const tick = (timestamp) => {
      start ??= timestamp;
      const progress = Math.min((timestamp - start) / 1100, 1);
      setDisplay(`${Math.round(progress * numeric)}${value.replace(String(numeric), '')}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric, value]);

  return <strong>{display}</strong>;
}

export function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionHeader eyebrow="Testimonials" title="Business Owners Notice When Their Website Starts Ranking And Converting" text="Realistic examples of the kind of business impact Shadow Web Digital is built to create." />
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <RevealCard className="testimonial-card" key={testimonial.name} delay={index * 0.08}>
            <MessageSquare />
            <p>"{testimonial.quote}"</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <SectionHeader eyebrow="FAQ" title="Website Design And SEO Questions" text="A professional site should feel like a smart investment, not a confusing purchase." />
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <div className="faq-item" key={question}>
            <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
              <span>{question}</span>
              <ChevronDown className={open === index ? 'rotated' : ''} />
            </button>
            {open === index && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                {answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Get A Free Quote</p>
        <h2>Get A Website And SEO Plan For Your Business</h2>
        <p>
          Share a few details and we will map the fastest route to a sharper online presence, stronger search visibility, more credibility, and more qualified customers.
        </p>
        <div className="contact-points">
          <span>
            <Phone size={17} />
            Lead-focused website strategy
          </span>
          <span>
            <BarChart3 size={17} />
            Growth metrics built in
          </span>
          <span>
            <MapPin size={17} />
            Local business search visibility
          </span>
        </div>
      </div>
      <form className="contact-form" aria-label="Free quote contact form">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone Number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Business Name
          <input name="business" autoComplete="organization" />
        </label>
        <label>
          Budget Range
          <select name="budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>$1,500 - $3,000</option>
            <option>$3,000 - $6,000</option>
            <option>$6,000 - $10,000</option>
            <option>$10,000+</option>
          </select>
        </label>
        <label className="full">
          Project Details
          <textarea name="details" rows="5" placeholder="What do you need your website to do for your business?" />
        </label>
        <button className="primary-button" type="submit">
          Submit Project Details
          <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
