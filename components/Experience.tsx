import type { LucideIcon } from 'lucide-react';
import type { CSSProperties } from 'react';
import {
  Award,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Crown,
  ExternalLink,
  Instagram,
  Lightbulb,
  Medal,
  PenTool,
  Search,
  Send,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';

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
    date: 'Jul 2025 – Sep 2025',
    duration: '3 months',
    bullets: [
      'Worked on security analysis and vulnerability assessment.',
      'Gained hands-on experience with industry-standard security tools and protocols.',
      'Strengthened practical understanding of secure systems and application security.',
    ],
  },
];

type AchievementStat = {
  value: string;
  label: string;
  detail: string;
  tone: 'orange' | 'blue' | 'purple' | 'green';
  icon: LucideIcon;
};

const ACHIEVEMENT_STATS: AchievementStat[] = [
  { value: '15+', label: 'Hackathons', detail: 'Participated', tone: 'orange', icon: Trophy },
  { value: '7×', label: 'National Hackathon', detail: 'Finalist', tone: 'blue', icon: Medal },
  { value: '2×', label: 'Hackathon', detail: 'Winner', tone: 'purple', icon: Award },
  { value: 'SIH’25', label: 'Grand Finale', detail: 'Runner Up', tone: 'green', icon: Star },
];

const ACHIEVEMENT_MILESTONES = [
  {
    id: 'sih-2025',
    tone: 'orange',
    image: '/assets/achievements/national-winner-2x.png',
    eyebrow: 'Featured Achievement',
    title: 'Smart India Hackathon 2025 — Grand Finale Runner Up',
    description: 'Built SAKSHAM for NDMA — a real-time disaster management training and monitoring system.',
    badge: 'National Level',
    badgeIcon: Award,
  },
  {
    id: 'sih-2024',
    tone: 'blue',
    image: '/assets/achievements/smart-india-hackathon.png',
    eyebrow: 'Winning Milestone',
    title: 'SIH 2024 Internal Hackathon Winner',
    description: 'Won the internal Smart India Hackathon round with a strong problem-solving and product execution approach.',
    badge: 'Internal Winner',
    badgeIcon: Users,
  },
] as const;

const CREATOR_WORKFLOW: Array<{ label: string; icon: LucideIcon; tone: string }> = [
  { label: 'Trend Research', icon: Search, tone: 'blue' },
  { label: 'Audience Insights', icon: BarChart3, tone: 'blue' },
  { label: 'Script Writing', icon: PenTool, tone: 'purple' },
  { label: 'AI Automation', icon: Bot, tone: 'blue' },
  { label: 'Content Planning', icon: CalendarDays, tone: 'blue' },
  { label: 'Post & Publish', icon: Send, tone: 'green' },
  { label: 'Performance Analytics', icon: TrendingUp, tone: 'purple' },
  { label: 'Storytelling & Hooks', icon: Lightbulb, tone: 'orange' },
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

function HackathonAchievements() {
  return (
    <div className="hackathon-achievements" aria-labelledby="hackathon-heading">
      <div className="hackathon-heading">
        <span className="hackathon-heading__node" aria-hidden="true" />
        <p>Hackathon Highlights</p>
        <h3 id="hackathon-heading">Hackathon Glory</h3>
        <span>Competing, winning, and building under pressure across national-level innovation challenges.</span>
      </div>

      <div className="achievement-stats" aria-label="Hackathon achievement summary">
        {ACHIEVEMENT_STATS.map(({ value, label, detail, tone, icon: Icon }) => (
          <article className={`achievement-stat achievement-stat--${tone}`} key={value}>
            <span className="achievement-stat__icon"><Icon aria-hidden="true" /></span>
            <div>
              <strong>{value}</strong>
              <p>{label}<span>{detail}</span></p>
            </div>
          </article>
        ))}
      </div>

      <div className="achievement-milestones">
        {ACHIEVEMENT_MILESTONES.map((milestone) => {
          const BadgeIcon = milestone.badgeIcon;

          return (
            <article className={`achievement-milestone achievement-milestone--${milestone.tone}`} key={milestone.id}>
              <div className="achievement-milestone__visual">
                <img src={milestone.image} alt="" loading="lazy" />
              </div>

              <div className="achievement-milestone__copy">
                <span className="achievement-milestone__eyebrow"><Star aria-hidden="true" />{milestone.eyebrow}</span>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>

              <div className="achievement-milestone__badge">
                <BadgeIcon aria-hidden="true" />
                <span>{milestone.badge}</span>
              </div>
            </article>
          );
        })}
      </div>

      <CreatorAchievement />
    </div>
  );
}

function CreatorAchievement() {
  return (
    <section className="creator-achievement" aria-labelledby="creator-achievement-heading">
      <span className="creator-achievement__node" aria-hidden="true" />

      <div className="creator-achievement__copy">
        <p className="creator-achievement__eyebrow">Creator Achievement</p>
        <h3 id="creator-achievement-heading">Scaling Story by Aish</h3>

        <div className="creator-achievement__rank">
          <Crown aria-hidden="true" />
          <span>India’s No. 1 AI Influencer Page</span>
        </div>

        <p className="creator-achievement__description">
          I helped grow <strong>@storybyaish</strong> by building an automated AI content pipeline that researches trends,
          analyzes audience signals, generates content angles, writes scripts, and powers consistent storytelling at scale.
        </p>

        <div className="creator-achievement__accent" aria-hidden="true" />

        <div className="creator-achievement__stats">
          <article className="creator-stat creator-stat--orange">
            <span><Users aria-hidden="true" /></span>
            <h4>445K+<small>Followers</small></h4>
            <p>Built organic reach through AI-powered content at scale.</p>
          </article>
          <article className="creator-stat creator-stat--blue">
            <span><Cpu aria-hidden="true" /></span>
            <h4>AI Content<small>System</small></h4>
            <p>End-to-end pipeline from trend research to content output.</p>
          </article>
          <article className="creator-stat creator-stat--purple">
            <span><Zap aria-hidden="true" /></span>
            <h4>Trend-to-Script<small>Automation</small></h4>
            <p>Automated discovery, angles, scripts, and workflow.</p>
          </article>
        </div>

        <div className="creator-achievement__callout">
          <Star aria-hidden="true" />
          <p>Owned by the team,<strong> pipeline automated by Raj.</strong></p>
        </div>
      </div>

      <div className="creator-orbit" aria-label="Automated creator content workflow">
        <div className="creator-orbit__glow" aria-hidden="true" />
        <div className="creator-orbit__ring creator-orbit__ring--inner" aria-hidden="true" />
        <div className="creator-orbit__ring creator-orbit__ring--outer" aria-hidden="true" />

        <div className="creator-orbit__track">
          {CREATOR_WORKFLOW.map(({ label, icon: Icon, tone }, index) => (
            <div
              className="creator-orbit__item"
              style={{ '--orbit-index': index } as CSSProperties}
              key={label}
            >
              <div className={`creator-orbit__step creator-orbit__step--${tone}`}>
                <span className="creator-orbit__icon" aria-hidden="true"><Icon /></span>
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="creator-profile">
          <div className="creator-profile__avatar" role="img" aria-label="Story by Aish profile portrait">
            <img src="/images/storybyaish-reference.png" alt="" />
          </div>
          <Instagram className="creator-profile__instagram" aria-hidden="true" />
          <h4>@storybyaish <CheckCircle2 aria-label="Verified" /></h4>
          <p><strong>445K+</strong> Followers</p>
          <span>India’s No. 1 AI Influencer Page</span>
        </div>
      </div>
    </section>
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

        <HackathonAchievements />
      </div>
    </section>
  );
}
