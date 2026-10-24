import { useEffect, useRef, useState } from "react";
import "./App.css";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";

function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

function Reveal({ as: Tag = "div", className = "", children }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

const NAV_LINKS = [
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#languages-spoken", label: "Languages" },
  { href: "#projects", label: "Projects" },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "English", level: "Very good", pct: 80 },
  { name: "Russian", level: "Good — language of study", pct: 75 },
];

const CONTACTS = [
  {
    label: "Email",
    value: "luxiozair@gmail.com",
    href: "mailto:luxiozair@gmail.com",
    icon: (
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.01L12 13l8-6.99V6H4zm16 2.24-7.4 6.47a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z" />
    ),
  },
  {
    label: "GitHub",
    value: "github.com/osama-codes1",
    href: "https://github.com/osama-codes1",
    icon: (
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.35-3.83-1.35-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5z" />
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/osama-s-31143a421",
    href: "https://www.linkedin.com/in/osama-s-31143a421",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    ),
  },
  {
    label: "Telegram",
    value: "@MR_Osama_1",
    href: "https://t.me/MR_Osama_1",
    icon: (
      <path d="M21.94 3.36 18.6 20.2c-.25 1.1-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.49c.41-.36-.09-.56-.63-.2L6.32 12.9l-5.02-1.57c-1.09-.34-1.11-1.09.23-1.61L20.6 2.2c.91-.34 1.71.2 1.34 1.16z" />
    ),
  },
];

function Loader({ visible }) {
  return (
    <div id="loader" className={visible ? "" : "hidden"}>
      <div className="loader-mark">
        OA<span>.</span>
      </div>
      <div className="loader-line">
        <span />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={loading ? "is-loading" : ""}>
      <Loader visible={loading} />

      <nav>
        <div className="nav-in">
          <a href="#top" className="logo" aria-label="Osama home">
            OSAMA ALBISHAI
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </div>
      </nav>

      <main>
        <header className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow">
                <span className="status-dot" />
                Available for internships &amp; junior roles
              </div>

              <h1>
                Hello, I&apos;m <span>Osama Abdulkarim</span>
                <br />
                a Computer Science student &amp; developer
              </h1>

              <p className="lead">
                Third-year student majoring in Computer Engineering and Informatics,
                learning to build web applications and software systems across
                multiple languages and tools, and fluent in three languages.
              </p>

              <div className="cta-row">
                <a href="#contact" className="btn btn-primary">
                  Get in touch
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="#skills" className="btn btn-ghost">
                  My skills
                </a>
              </div>

              <div className="hero-meta">
                <span>Third-year student</span>
                <span className="meta-separator">/</span>
                <span>Available for internships &amp; junior roles</span>
              </div>
            </div>

            <aside className="hero-note">
              <div className="note-top">
                <span>01</span>
                <span>About me</span>
              </div>
              <div className="note-rule" />
              <p>
                Computer Engineering and Informatics
                <br />
                Tambov State Technical University
              </p>
              <div className="note-bottom">
                <span>09.03.01</span>
                <span>TSTU</span>
              </div>
            </aside>
          </div>

          <Reveal className="wrap stat-row">
            <div className="stat">
              <div className="num">3rd year</div>
              <div className="lbl">Computer Engineering &amp; Informatics</div>
            </div>
            <div className="stat">
              <div className="num">10+</div>
              <div className="lbl">Languages &amp; tools</div>
            </div>
            <div className="stat">
              <div className="num">3</div>
              <div className="lbl">Spoken languages</div>
            </div>
          </Reveal>
        </header>

        <section id="education">
          <Reveal className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Background</p>
                <h2 className="section-title">Education</h2>
              </div>
              <p className="section-sub">Current academic path</p>
            </div>

            <div className="edu-card">
              <div className="edu-index">01</div>
              <div className="edu-main">
                <p className="edu-label">University</p>
                <h3>TSTU — Tambov State Technical University</h3>
                <p>3rd year, Computer Engineering and Informatics</p>
              </div>
              <div className="edu-code">09.03.01</div>
            </div>
          </Reveal>
        </section>

        <section id="skills">
          <Reveal className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Toolbox</p>
                <h2 className="section-title">Technical Skills</h2>
              </div>
              <p className="section-sub">Languages and tools I work with</p>
            </div>
            <Skills />
          </Reveal>
        </section>

        <section id="languages-spoken">
          <Reveal className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Communication</p>
                <h2 className="section-title">Spoken Languages</h2>
              </div>
              <p className="section-sub">Communicating in three languages</p>
            </div>

            <div className="lang-grid">
              {LANGUAGES.map((l, index) => (
                <div className="lang-card" key={l.name}>
                  <div className="lang-top">
                    <span className="lang-index">0{index + 1}</span>
                    <span className="name">{l.name}</span>
                  </div>
                  <div className="bar">
                    <div style={{ width: `${l.pct}%` }} />
                  </div>
                  <div className="level">{l.level}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="projects">
          <Reveal className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="section-title">Projects</h2>
              </div>
              <p className="section-sub">Work in progress</p>
            </div>
            <Projects />
          </Reveal>
        </section>

        <section id="contact" className="contact-section">
          <Reveal className="wrap">
            <div className="contact-intro">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="section-title">Let’s talk.</h2>
              </div>
              <p className="section-sub">
                Send me a message or reach me directly
              </p>
            </div>

            <div className="contact-layout">
              <ContactForm />

              <div className="contact-row">
                {CONTACTS.map((c) => (
                  <a
                    className="contact-card"
                    href={c.href}
                    key={c.label}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener"
                  >
                    <div className="icon">
                      <svg viewBox="0 0 24 24">{c.icon}</svg>
                    </div>
                    <div className="text">
                      <div className="label">{c.label}</div>
                      <div className="value">{c.value}</div>
                    </div>
                    <span className="contact-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© 2026 Osama Abdulkarim</span>
          <span>Designed &amp; built with care.</span>
        </div>
      </footer>
    </div>
  );
}
