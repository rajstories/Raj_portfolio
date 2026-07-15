import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const CONTACTS = [
  {
    label: 'Email',
    value: 'rajshrivastav283815@gmail.com',
    href: 'mailto:rajshrivastav283815@gmail.com',
    icon: Mail,
    tone: 'violet',
    actionLabel: 'Email Raj',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rajhub',
    href: 'https://www.linkedin.com/in/rajhub/',
    icon: Linkedin,
    tone: 'blue',
    actionLabel: 'Open Raj’s LinkedIn profile',
  },
  {
    label: 'GitHub',
    value: 'github.com/rajstories',
    href: 'https://github.com/rajstories/',
    icon: Github,
    tone: 'ink',
    actionLabel: 'Open Raj’s GitHub profile',
  },
] as const;

export default function Connect() {
  return (
    <section id="connect" className="connect-section">
      <div className="connect-decoration connect-decoration--left" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div className="connect-decoration connect-decoration--right" aria-hidden="true">
        <i /><i /><i />
      </div>
      <span className="connect-dot connect-dot--one" aria-hidden="true" />
      <span className="connect-dot connect-dot--two" aria-hidden="true" />
      <span className="connect-spark connect-spark--one" aria-hidden="true">✦</span>
      <span className="connect-spark connect-spark--two" aria-hidden="true">✦</span>

      <div className="connect-shell">
        <div className="connect-intro">
          <div className="connect-intro__rule" aria-hidden="true"><span /></div>
          <p className="connect-eyebrow">Let&apos;s connect</p>
          <h2 className="connect-title">Let&apos;s work<br />together.</h2>
          <p className="connect-description">
            I&apos;m currently available for freelance projects and full-time opportunities in AI/ML and Full-Stack Development.
          </p>

          <div className="connect-actions">
            <a className="connect-button connect-button--primary" href="mailto:rajshrivastav283815@gmail.com">
              <span>Get In Touch</span>
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="connect-button connect-button--secondary" href="mailto:rajshrivastav283815@gmail.com?subject=Let%27s%20schedule%20a%20call">
              <CalendarDays aria-hidden="true" />
              <span>Schedule a Call</span>
            </a>
          </div>

          <div className="availability-pill">
            <span className="availability-pill__dot" aria-hidden="true" />
            <strong>Open to opportunities</strong>
            <span>Available for freelance &amp; full-time roles</span>
          </div>

          <div className="connect-best">
            <span className="connect-best__icon"><Sparkles aria-hidden="true" /></span>
            <p><strong>Best for:</strong> AI/ML roles, Full-Stack projects, product collaborations, and impactful problem solving.</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card__rows">
            {CONTACTS.map(({ label, value, href, icon: Icon, tone, actionLabel }) => (
              <div className="contact-row" key={label}>
                <a
                  className={`contact-row__icon contact-row__icon--${tone}`}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={actionLabel}
                >
                  <Icon aria-hidden="true" />
                </a>
                <div className="contact-row__copy">
                  <h3>{label}</h3>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}</a>
                </div>
                <a className="contact-row__action" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={actionLabel}>
                  {label === 'Email' ? <Mail aria-hidden="true" /> : <ExternalLink aria-hidden="true" />}
                </a>
              </div>
            ))}

            <div className="contact-row">
              <span className="contact-row__icon contact-row__icon--green"><MapPin aria-hidden="true" /></span>
              <div className="contact-row__copy">
                <h3>Location / Availability</h3>
                <p>India (Remote) <b>•</b> Flexible hours</p>
              </div>
              <span className="contact-row__status">Available</span>
            </div>
          </div>

          <div className="contact-card__callout">
            <span className="contact-card__briefcase"><BriefcaseBusiness aria-hidden="true" /></span>
            <div>
              <h3>Let&apos;s build something great together.</h3>
              <p>Have a project in mind or want to collaborate?<br />I&apos;d love to hear from you.</p>
            </div>
            <span className="contact-card__flourish" aria-hidden="true">∿↗</span>
          </div>
        </div>

        <footer className="connect-footer">
          <span aria-hidden="true" />
          <p>© {new Date().getFullYear()} Raj. Built with React &amp; Tailwind.</p>
          <span aria-hidden="true" />
        </footer>
      </div>
    </section>
  );
}
