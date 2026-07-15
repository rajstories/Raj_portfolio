import {
  Cloud,
  Cpu,
  Database,
  LayoutPanelTop,
  Rocket,
  Shield,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import type { CSSProperties } from 'react';

type SkillCategory = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  tone: 'orange' | 'blue' | 'purple' | 'green' | 'gold' | 'pink';
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and performant user interfaces.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    icon: LayoutPanelTop,
    tone: 'orange',
  },
  {
    title: 'Backend Engineering',
    description: 'Building robust APIs and scalable backend systems.',
    tags: ['Node.js', 'FastAPI', 'Python', 'Go'],
    icon: Terminal,
    tone: 'blue',
  },
  {
    title: 'AI & Automation',
    description: 'Building intelligent apps and automating workflows.',
    tags: ['LangChain', 'OpenAI', 'n8n', 'HuggingFace'],
    icon: Cpu,
    tone: 'purple',
  },
  {
    title: 'Databases',
    description: 'Working with relational and NoSQL databases.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis'],
    icon: Database,
    tone: 'green',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deploying, monitoring and scaling applications.',
    tags: ['Docker', 'Azure', 'Firebase', 'Git'],
    icon: Cloud,
    tone: 'gold',
  },
  {
    title: 'Security',
    description: 'Ensuring application security and best practices.',
    tags: ['Vulnerability Assessment', 'Analysis'],
    icon: Shield,
    tone: 'pink',
  },
];

function SkillsIntro() {
  return (
    <div className="skills-intro">
      <div className="skills-intro__rule" aria-hidden="true"><span /></div>
      <p className="skills-eyebrow">My Arsenal</p>
      <h2 id="skills-heading" className="skills-title">Skills &amp;<br />Technologies</h2>
      <p className="skills-description">
        A powerful blend of modern technologies and tools I use to build scalable, secure and impactful digital solutions.
      </p>
      <div className="skills-accent" aria-hidden="true"><span /></div>

      <aside className="learning-card" aria-label="Always learning">
        <div className="learning-card__icon"><Rocket aria-hidden="true" /></div>
        <div>
          <h3>Always Learning</h3>
          <p>I&apos;m constantly exploring new tools and techniques to solve real-world problems and build better products.</p>
        </div>
      </aside>
    </div>
  );
}

function SkillRow({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = category.icon;

  return (
    <li className={`skill-row skill-row--${category.tone}`} style={{ '--skill-index': index } as CSSProperties}>
      <div className="skill-row__icon"><Icon aria-hidden="true" /></div>
      <div className="skill-row__rail" aria-hidden="true"><span /></div>
      <div className="skill-row__copy">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>
      <ul className="skill-row__tags" aria-label={`${category.title} technologies`}>
        {category.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </li>
  );
}

export default function Features() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-decoration skills-decoration--orbit" aria-hidden="true" />
      <div className="skills-decoration skills-decoration--shape" aria-hidden="true" />
      <div className="skills-decoration skills-decoration--glow" aria-hidden="true" />
      <div className="skills-sparkle" aria-hidden="true">✦</div>

      <div className="skills-shell">
        <SkillsIntro />
        <ul className="skills-list" aria-label="Technical skill categories">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillRow key={category.title} category={category} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}
