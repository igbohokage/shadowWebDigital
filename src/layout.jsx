import { motion } from 'framer-motion';
import { Mail, Menu, Send, Sparkles, X } from 'lucide-react';
import { navItems } from './data.jsx';

export function Loader() {
  return (
    <motion.div className="loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.img
        src="/shadowWeb.png"
        alt="Shadow Web Digital logo"
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.55 }}
      />
      <motion.span initial={{ width: 0 }} animate={{ width: 150 }} transition={{ delay: 0.25, duration: 0.55 }} />
    </motion.div>
  );
}

export function Header({ menuOpen, setMenuOpen, scrollTo }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Shadow Web Digital home">
        <img src="/shadowWeb.png" alt="" />
        <span>Shadow Web Digital</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <button className="quote-link" onClick={() => scrollTo('contact')}>
        <Mail size={17} />
        Free Quote
      </button>
      <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && (
        <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}>Get a Free Quote</button>
        </motion.nav>
      )}
    </header>
  );
}

export function Footer({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src="/shadowWeb.png" alt="" />
        <div>
          <strong>Shadow Web Digital</strong>
          <p>Working in the shadows so your business can shine.</p>
        </div>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="socials" aria-label="Social media links">
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <Sparkles />
        </a>
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <Send />
        </a>
        <a href="mailto:hello@shadowwebdigital.com" aria-label="Email">
          <Mail />
        </a>
      </div>
      <p className="copyright">Copyright 2026 Shadow Web Digital. All rights reserved.</p>
    </footer>
  );
}

export function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}

export function RevealCard({ className, children, delay = 0 }) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.45 }}
      whileHover={{ y: -8 }}
    >
      {children}
    </motion.article>
  );
}
