import { ArrowRight, Atom, Github, Linkedin, Mail, Send } from 'lucide-react';

const PORTRAIT_IMAGE = '/images/raj-hero-portrait.png';

const SOCIAL_LINKS: Record<'linkedin' | 'github' | 'leetcode' | 'email', string> = {
  linkedin: 'https://www.linkedin.com/in/rajhub/',
  github: 'https://github.com/rajstories/',
  leetcode: '',
  email: 'mailto:rajshrivastav283815@gmail.com',
} as const;

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.3 3.3 7.1 10.5a4.8 4.8 0 0 0 0 6.8l2.4 2.4a4.8 4.8 0 0 0 6.8 0l1.9-1.9-2.1-2.1-1.9 1.9a1.8 1.8 0 0 1-2.6 0l-2.4-2.4a1.8 1.8 0 0 1 0-2.6l7.2-7.2-2.1-2.1Z" fill="currentColor" />
      <path d="M9.8 10.6h9.5v3H9.8z" fill="#f7a41d" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Social links">
      <span className="hero-socials__label">Let&apos;s connect</span>
      <a className="hero-social hero-social--linkedin" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
        <Linkedin aria-hidden="true" />
      </a>
      <a className="hero-social hero-social--github" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub">
        <Github aria-hidden="true" />
      </a>
      {SOCIAL_LINKS.leetcode ? (
        <a className="hero-social hero-social--leetcode" href={SOCIAL_LINKS.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode profile" title="LeetCode">
          <LeetCodeIcon />
        </a>
      ) : (
        <button className="hero-social hero-social--leetcode" type="button" disabled aria-label="LeetCode profile URL not provided" title="Add your LeetCode URL in Hero.tsx">
          <LeetCodeIcon />
        </button>
      )}
      <a className="hero-social hero-social--email" href={SOCIAL_LINKS.email} aria-label="Send Raj an email" title="Email">
        <Mail aria-hidden="true" />
      </a>
    </div>
  );
}

function PythonLogo() {
  return (
    <span className="python-logo" aria-hidden="true">
      <span className="python-logo__blue">●</span>
      <span className="python-logo__yellow">●</span>
    </span>
  );
}

function TensorFlowLogo() {
  return (
    <svg className="tensorflow-logo" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#ff7b24" d="m24 4 18 10.4v8.2L28.1 14.7v28.1L24 45l-4.1-2.2V14.7L6 22.6v-8.2L24 4Z" />
      <path fill="#ff7b24" d="m31.5 22 10.5 6v8l-10.5-6v-8ZM6 28l10.5-6v8L6 36v-8Z" opacity=".84" />
    </svg>
  );
}

function TechnologyOrbit() {
  return (
    <>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-backdrop hero-backdrop--blue" aria-hidden="true" />
      <div className="hero-backdrop hero-backdrop--lavender" aria-hidden="true" />
      <svg className="hero-connectors" viewBox="0 0 720 650" aria-hidden="true">
        <path d="M154 84c-26 50-35 111 3 180 22 40 58 66 80 115" />
        <path d="M456 127c77 21 128 42 183 70" />
        <path d="M596 194c-8 90 3 174-25 260" />
        <circle cx="155" cy="85" r="7" className="node node--blue" />
        <circle cx="198" cy="276" r="6" className="node node--orange" />
        <circle cx="593" cy="194" r="7" className="node node--pink" />
      </svg>

      <div className="tech-badge tech-badge--react" aria-label="React">
        <Atom />
      </div>
      <div className="tech-badge tech-badge--python" aria-label="Python">
        <PythonLogo />
      </div>
      <div className="tech-badge tech-badge--typescript" aria-label="TypeScript">
        <span>TS</span>
      </div>
      <div className="tech-badge tech-badge--node" aria-label="Node.js">
        <span>JS</span>
      </div>
      <div className="tech-badge tech-badge--tensorflow" aria-label="TensorFlow">
        <TensorFlowLogo />
      </div>

      <div className="hero-sparkle" aria-hidden="true">✦</div>
      <div className="hero-sparkle-dots" aria-hidden="true" />
    </>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Raj's developer portrait with technology logos">
      <TechnologyOrbit />
      <img
        className="hero-portrait"
        src={PORTRAIT_IMAGE}
        alt="Raj seated behind a laptop wearing a navy hoodie"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="hero-floor-glow" aria-hidden="true" />
    </div>
  );
}

function HeroContent() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-content">
      <div className="hero-credential">
        AI Engineer • B.Tech CSE @ DTU
      </div>

      <h1 className="hero-title">
        <span>Hi, I&apos;m Raj</span>
        <span>AI Systems Engineer</span>
      </h1>

      <p className="hero-description">
        Building AI systems, intelligent workflows, and data-driven software that solve real-world business problems.
      </p>

      <div className="hero-actions">
        <button className="hero-button hero-button--primary" type="button" onClick={scrollToProjects}>
          <span>View My Work</span>
          <ArrowRight aria-hidden="true" />
        </button>
        <a className="hero-button hero-button--secondary" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
          <Send aria-hidden="true" />
          <span>Let&apos;s Connect</span>
        </a>
      </div>

      <SocialLinks />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero">
      <div className="hero-side-rule" aria-hidden="true"><span /></div>
      <div className="hero-shell">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
