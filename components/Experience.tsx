import { BriefcaseBusiness, CalendarDays, ExternalLink } from 'lucide-react';

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  logo: 'lxdia' | 'cdac';
  tone: 'orange' | 'blue';
  date?: string;
  duration?: string;
  bullets: string[];
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'lxdia-ai',
    role: 'AI Engineer Intern',
    company: 'LXDIA AI Pvt. Limited',
    logo: 'lxdia',
    tone: 'orange',
    date: 'Apr 2026 – Jul 2026',
    duration: '3 months',
    bullets: [
      'Built and deployed ML/AI models and orchestrated LLM-based agent workflows for production use cases, working across the full pipeline from data to deployment.',
      'Engineered an automated end-to-end content pipeline — from research to script generation — analyzing trending topics across Instagram, Twitter (X), and Reddit.',
      'Developed AI voice-calling agents for automated, real-time conversational workflows.',
    ],
  },
  {
    id: 'cdac',
    role: 'Cybersecurity Intern',
    company: 'Centre for Development of Advanced Computing (CDAC)',
    logo: 'cdac',
    tone: 'blue',
    bullets: [
      'Worked on security analysis and vulnerability assessment.',
      'Gained hands-on experience with industry-standard security tools and protocols.',
      'Strengthened practical understanding of secure systems and application security.',
    ],
  },
];

function CompanyMark({ logo }: Pick<ExperienceItem, 'logo'>) {
  if (logo === 'lxdia') {
    return <span className="company-mark company-mark--lxdia" aria-label="LXDIA">LXDIA</span>;
  }

  return <span className="company-mark company-mark--cdac" aria-label="CDAC">CDAC</span>;
}

function ExperienceMeta({ date, duration }: Pick<ExperienceItem, 'date' | 'duration'>) {
  if (!date) return null;

  return (
    <p className="experience-card__meta">
      <CalendarDays aria-hidden="true" />
      <span>{date}</span>
      {duration && <><span className="experience-card__meta-dot" aria-hidden="true">•</span><span>{duration}</span></>}
    </p>
  );
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <li className={`experience-entry experience-entry--${item.tone}`}>
      <span className="experience-entry__node" aria-hidden="true" />
      <article className="experience-card">
        <div className={`experience-card__logo experience-card__logo--${item.logo}`}>
          <CompanyMark logo={item.logo} />
        </div>

        <div className="experience-card__details">
          <h4>{item.role}</h4>
          <p className="experience-card__company">{item.company}</p>
          <ExperienceMeta date={item.date} duration={item.duration} />
        </div>

        <ul className="experience-card__bullets">
          {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>

        <span className="experience-card__action" aria-hidden="true">
          <ExternalLink />
        </span>
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="experience-decoration experience-decoration--wash" aria-hidden="true" />
      <div className="experience-decoration experience-decoration--orbit" aria-hidden="true" />
      <div className="experience-decoration experience-decoration--glow" aria-hidden="true" />
      <span className="experience-sparkle" aria-hidden="true">✦</span>

      <div className="experience-shell">
        <header className="experience-intro">
          <p className="experience-eyebrow">Journey So Far</p>
          <h2 id="experience-heading" className="experience-heading">
            <span>Experience &amp;</span>
            <span>Achievements</span>
          </h2>
          <p className="experience-summary">
            Building impactful products, solving real-world problems, and competing in high-performance environments.
          </p>
          <div className="experience-accent" aria-hidden="true"><span /></div>
        </header>

        <div className="experience-content">
          <div className="experience-content__title">
            <span className="experience-content__icon"><BriefcaseBusiness aria-hidden="true" /></span>
            <h3>Professional Experience</h3>
          </div>

          <ol className="experience-timeline">
            {EXPERIENCE_ITEMS.map((item) => <ExperienceEntry key={item.id} item={item} />)}
          </ol>
        </div>
      </div>
    </section>
  );
}
