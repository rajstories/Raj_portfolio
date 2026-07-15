import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Rocket,
  Sparkles,
  type LucideIcon,
  Workflow,
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
    title: 'AI / ML & Data Science',
    description: 'Building explainable models and data-driven intelligence.',
    tags: ['Python', 'scikit-learn', 'pandas', 'TensorFlow', 'PyTorch'],
    icon: BrainCircuit,
    tone: 'orange',
  },
  {
    title: 'LLMs & Generative AI',
    description: 'Applying multimodal and local models to practical workflows.',
    tags: ['Gemini', 'Ollama', 'Groq', 'Llama'],
    icon: Sparkles,
    tone: 'purple',
  },
  {
    title: 'AI Agents & Orchestration',
    description: 'Designing multi-agent systems and tool-connected AI workflows.',
    tags: ['LangGraph', 'LangChain', 'CrewAI', 'n8n'],
    icon: Workflow,
    tone: 'blue',
  },
  {
    title: 'Agent Platforms & Tooling',
    description: 'Evaluating emerging agent platforms and collaborative systems.',
    tags: ['OpenClaw', 'Paperclip', 'Hermes Agent', 'MCP'],
    icon: Bot,
    tone: 'green',
  },
  {
    title: 'Data Analytics & Intelligence',
    description: 'Turning data into interpretable dashboards, insights and decisions.',
    tags: ['SQL', 'Power BI', 'Tableau', 'Neo4j'],
    icon: ChartNoAxesCombined,
    tone: 'gold',
  },
  {
    title: 'AI Systems & Deployment',
    description: 'Taking intelligent systems from prototype to reliable delivery.',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Google Cloud'],
    icon: Cloud,
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
        A focused AI stack across machine learning, agents, analytics and production-ready intelligent systems.
      </p>
      <div className="skills-accent" aria-hidden="true"><span /></div>

      <aside className="learning-card" aria-label="Always learning">
        <div className="learning-card__icon"><Rocket aria-hidden="true" /></div>
        <div>
          <h3>Always Learning</h3>
          <p>Continuously exploring agentic workflows, ML systems and data tools for meaningful real-world problems.</p>
        </div>
      </aside>
    </div>
  );
}

function SkillRow({ category, index }: { category: SkillCategory; index: number }) {
  const Icon = category.icon;

  return (
    <li className={`skill-row skill-row--${category.tone}`} style={{ '--skill-index': index } as CSSProperties}>
      <div className="skill-row__icon" aria-hidden="true">
        <span className="skill-row__icon-glow" />
        <Icon />
      </div>
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
