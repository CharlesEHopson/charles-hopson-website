import { useEffect, useState } from 'react';

const slides = [
  { id: 1, label: 'Photo placeholder 01' },
  { id: 2, label: 'Photo placeholder 02' },
  { id: 3, label: 'Photo placeholder 03' },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'University of Memphis',
    location: 'Memphis, TN',
    focus: 'Major: Computer Science',
    date: 'Expected graduation: Fall 2026',
    gpa: '3.32',
    status: 'Undergraduate study',
  },
  {
    degree: 'Associate of Science',
    school: 'Southwest Community College',
    location: 'Memphis, TN',
    focus: 'Major: General Education',
    date: 'Graduated: December 2019',
    gpa: '3.6',
    status: 'Completed',
  },
];

const experience = [
  {
    role: 'Systems Engineer Intern',
    organization: 'AutoZone Headquarters',
    location: 'Memphis, TN',
    period: 'Summer 2025',
    tag: 'Internship',
    points: [
      'Gained hands-on coding experience across different branches of an international team.',
      'Adapted to feedback and changing expectations while working in a fast-paced environment.',
      'Continued developing technical knowledge and collaborative working habits alongside colleagues.',
    ],
  },
  {
    role: 'AI Chatbot Developer & Data Analyst',
    organization: 'University of Memphis',
    location: 'Memphis, TN',
    period: 'Spring 2025',
    tag: 'Contracted Team of 4',
    points: [
      'Helped coordinate team tasks and deadlines using Excel and GitHub.',
      'Documented sponsor and customer feedback and contributed to implementing it.',
      'Researched, gathered, and tested data used to train an AI system to produce expected outputs from thousands of prompts in a Prompt Management System (PMS) library.',
    ],
  },
  {
    role: 'Systems Engineer Intern',
    organization: 'AutoZone Headquarters',
    location: 'Memphis, TN',
    period: 'Summer 2024',
    tag: 'Internship',
    points: [
      'Shadowed and learned alongside the AZ international team to understand how online stores are tested, coded, and presented.',
      'Built an introductory view of the work involved in supporting online storefronts inside and outside the company.',
    ],
  },
];

const skillGroups = [
  { level: 'Known', skills: ['Python','Git', 'GitHub', 'CSS', 'HTML','JavaScript', 'C/C++', 'Ruby', 'React', 'Microsoft Office'] }
];

function getPageFromHash() {
  const page = window.location.hash.replace('#', '').toLowerCase();
  return ['professional', 'personal'].includes(page) ? page : 'home';
}

function Header({ theme, onThemeChange, page }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Charles Hopson home">
        <span className="brand-mark" aria-hidden="true">CH</span>
        <span className="brand-name">Charles Hopson</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" aria-current={page === 'home' ? 'page' : undefined}>Home</a>
        <a href="#professional" aria-current={page === 'professional' ? 'page' : undefined}>Professional</a>
        <a href="#personal" aria-current={page === 'personal' ? 'page' : undefined}>Personal</a>
      </nav>

      <div className="theme-controls" role="group" aria-label="Color theme">
        <button
          className={`theme-button ${theme === 'light' ? 'is-active' : ''}`}
          type="button"
          aria-pressed={theme === 'light'}
          onClick={() => onThemeChange('light')}
        >
          <span aria-hidden="true">☼</span> Light Mode
        </button>
        <button
          className={`theme-button ${theme === 'dark' ? 'is-active' : ''}`}
          type="button"
          aria-pressed={theme === 'dark'}
          onClick={() => onThemeChange('dark')}
        >
          <span aria-hidden="true">☾</span> Dark Mode
        </button>
      </div>
    </header>
  );
}

function PhotoSlideshow() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="slideshow-section" aria-labelledby="slideshow-heading">
      <div className="section-heading slideshow-heading-row">
        <div>
          <p className="eyebrow">A little introduction</p>
          <h2 id="slideshow-heading">A few snapshots</h2>
        </div>
        <span className="slide-count" aria-live="polite">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      <div className="slideshow-frame">
        <div
          className="photo-placeholder"
          role="img"
          aria-label={`${currentSlide.label}, ready for a personal photo`}
          key={currentSlide.id}
        >
          <span className="placeholder-index">0{currentSlide.id}</span>
          <span className="placeholder-copy">{currentSlide.label}</span>
        </div>

        <div className="slideshow-controls">
          <button className="arrow-button" type="button" onClick={showPrevious} aria-label="Show previous photo placeholder">
            <span aria-hidden="true">←</span>
          </button>
          <div className="slide-dots" role="group" aria-label="Choose a photo placeholder">
            {slides.map((slide, index) => (
              <button
                className={`slide-dot ${index === activeSlide ? 'is-active' : ''}`}
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.label.toLowerCase()}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
          <button className="arrow-button" type="button" onClick={showNext} aria-label="Show next photo placeholder">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <p className="slideshow-note">Your photos can replace these placeholders whenever you are ready.</p>
    </section>
  );
}

function DestinationCard({ href, number, eyebrow, title, description, action }) {
  return (
    <a className="destination-card" href={href}>
      <div className="destination-card-top">
        <span className="destination-number">{number}</span>
        <span className="destination-arrow" aria-hidden="true">↗</span>
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="destination-description">{description}</p>
      <span className="card-action">{action} <span aria-hidden="true">→</span></span>
    </a>
  );
}

function HomePage() {
  return (
    <main id="home" className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Personal &amp; professional</p>
          <h1>Welcome to my<br /><span>corner of the web.</span></h1>
          <p className="hero-description">
            A central place to explore my professional background, personal interests,
            and creative projects.
          </p>
          <a className="text-link" href="#destinations">Explore the site <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span className="hero-index-line" />
          <span>PERSONAL SITE</span>
          <span className="hero-index-caption">THE HUB</span>
        </div>
      </section>

      <PhotoSlideshow />

      <section id="destinations" className="destinations-section" aria-labelledby="destinations-heading">
        <div className="section-heading destinations-heading">
          <div>
            <p className="eyebrow">Find your way</p>
            <h2 id="destinations-heading">Explore the site</h2>
          </div>
          <p className="section-intro">Two sides, one place. Choose where you would like to go.</p>
        </div>

        <div className="destination-grid">
          <DestinationCard
            href="#professional"
            number="01"
            eyebrow="Career & experience"
            title="Professional"
            description="Education, work experience, skills, and other professional endeavors."
            action="Explore professional"
          />
          <DestinationCard
            href="#personal"
            number="02"
            eyebrow="Interests & creativity"
            title="Personal"
            description="Creative projects, favorite things, ideas, and experiences."
            action="Explore personal"
          />
        </div>
      </section>
    </main>
  );
}

function ProfilePlaceholder() {
  return (
    <div className="profile-photo-placeholder" role="img" aria-label="Placeholder for a professional profile photo">
      <div className="profile-photo-mark" aria-hidden="true">CH</div>
      <span>PROFILE IMAGE</span>
      <small>Photo placeholder</small>
    </div>
  );
}

function ContactPanel() {
  return (
    <section className="contact-panel" aria-labelledby="contact-heading">
      <div className="contact-panel-heading">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-heading">Contact</h2>
      </div>
      <a href="mailto:charleshopson98@gmail.com">
        <span className="contact-icon" aria-hidden="true">✉</span>
        <span>charleshopson98@gmail.com</span>
      </a>
      <a href="tel:+19013301384">
        <span className="contact-icon" aria-hidden="true">⌕</span>
        <span>(901) 330-1384</span>
      </a>
      <a href="https://www.linkedin.com/in/charles-hopson" target="_blank" rel="noreferrer">
        <span className="contact-icon contact-icon-linkedin" aria-hidden="true">in</span>
        <span>LinkedIn profile</span>
        <span className="external-mark" aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="professional-section" aria-labelledby="education-heading">
      <div className="professional-section-heading">
        <div>
          <p className="eyebrow">Academic background</p>
          <h2 id="education-heading">Education</h2>
        </div>
        <span className="section-index">01 / 03</span>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <div className="education-card-top">
              <span className="education-status">{item.status}</span>
              <span className="education-gpa"><strong>{item.gpa}</strong><small>GPA</small></span>
            </div>
            <h3>{item.degree}</h3>
            <p className="education-school">{item.school}</p>
            <p className="education-location">{item.location}</p>
            <div className="education-meta">
              <span>{item.focus}</span>
              <span>{item.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="professional-section" aria-labelledby="experience-heading">
      <div className="professional-section-heading">
        <div>
          <p className="eyebrow">Work &amp; applied projects</p>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <span className="section-index">02 / 03</span>
      </div>
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={`${item.organization}-${item.period}`}>
            <div className="experience-marker-column" aria-hidden="true">
              <span className="experience-marker">0{index + 1}</span>
              {index < experience.length - 1 && <span className="experience-connector" />}
            </div>
            <div className="experience-content">
              <div className="experience-topline">
                <span className="experience-period">{item.period}</span>
                <span className="experience-tag">{item.tag}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="experience-organization">{item.organization} <span>·</span> {item.location}</p>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="professional-section skills-section" aria-labelledby="skills-heading">
      <div className="professional-section-heading">
        <div>
          <p className="eyebrow">Technical toolkit</p>
          <h2 id="skills-heading">Skills</h2>
        </div>
        <span className="section-index">03 / 03</span>
      </div>
      <p className="skills-intro">The proficiency grouping below follow the exposed langauages listed on my resume.</p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.level}>
            <div className="skill-group-heading">
              <h3>{group.level}</h3>
              <span>{group.skills.length} skills</span>
            </div>
            <div className="skill-chips">
              {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfessionalPage() {
  return (
    <main id="professional" className="page-shell professional-page">
      <div className="breadcrumb"><a href="#home">Main Page</a><span aria-hidden="true">/</span><span>Professional</span></div>

      <section className="professional-hero">
        <div className="professional-hero-copy">
          <p className="eyebrow">Career, education &amp; technology</p>
          <h1>Building a path<br /><span>in technology.</span></h1>
          <p className="professional-lede">
            I am a Computer Science student at the University of Memphis with experience
            in systems engineering internships and a team-based AI chatbot and data
            analysis project. My work so far has brought together technical learning,
            research, organization, and collaboration.
          </p>
          <div className="professional-hero-facts">
            <span><i aria-hidden="true" /> Computer Science</span>
            <span><i aria-hidden="true" /> Memphis, Tennessee</span>
          </div>
        </div>
        <aside className="professional-aside" aria-label="Profile and contact details">
          <ProfilePlaceholder />
          <ContactPanel />
        </aside>
      </section>

      <div className="professional-divider" />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />

      <section className="professional-next-step">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <h2>There's more to the story.</h2>
          <p>Head back to the hub or take a look at the personal side of the site.</p>
        </div>
        <div className="professional-next-links">
          <a className="text-link" href="#home">← Main Page</a>
          <a className="text-link" href="#personal">Personal Page ↗</a>
        </div>
      </section>
    </main>
  );
}

function ComingSoonPage({ section }) {
  const title = section === 'personal' ? 'Personal' : 'Professional';
  const description = section === 'personal'
    ? 'This space is reserved for creative projects, favorite things, and personal experiences.'
    : 'This space is reserved for education, work experience, skills, and professional projects.';

  return (
    <main className="page-shell coming-soon-page">
      <p className="eyebrow">Main Page / {title}</p>
      <span className="coming-soon-number">0{section === 'professional' ? '1' : '2'}</span>
      <h1>{title}<br /><span>Coming soon.</span></h1>
      <p className="hero-description">{description}</p>
      <p className="coming-soon-note">This section is still being developed.</p>
      <a className="text-link" href="#home"><span aria-hidden="true">←</span> Back to the Main Page</a>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Charles Hopson</span>
      <span>Personal &amp; Professional Website</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('charles-hopson-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#101018' : '#f6f7fb',
    );
    try {
      window.localStorage.setItem('charles-hopson-theme', theme);
    } catch {
      // The site still works when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const updatePage = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  useEffect(() => {
    const pageTitles = {
      home: 'Home',
      professional: 'Professional',
      personal: 'Personal',
    };
    document.title = `Charles Hopson | ${pageTitles[page]}`;
  }, [page]);

  return (
    <div className="app">
      <Header theme={theme} onThemeChange={setTheme} page={page} />
      {page === 'home' && <HomePage />}
      {page === 'professional' && <ProfessionalPage />}
      {page === 'personal' && <ComingSoonPage section="personal" />}
      <Footer />
    </div>
  );
}
