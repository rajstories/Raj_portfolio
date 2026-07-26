type Achievement = {
  title: string;
  logo: string;
  accent: 'saffron' | 'blue' | 'violet' | 'coral';
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Smart India Hackathon '25 Runner-Up",
    logo: '/assets/achievements/smart-india-hackathon.png',
    accent: 'saffron',
  },
  {
    title: 'Hack4Delhi Top-5 Finalist',
    logo: '/assets/achievements/hack4delhi.png',
    accent: 'blue',
  },
  {
    title: 'brAInwave 2.0 Winner',
    logo: '/assets/achievements/brainwave-purple-v2.png',
    accent: 'violet',
  },
  {
    title: '5× National Hackathon Finalist',
    logo: '/assets/achievements/national-finalist-team-v2.png',
    accent: 'violet',
  },
  {
    title: '2× National Hackathon Winner',
    logo: '/assets/achievements/national-winner-crown-v2.png',
    accent: 'saffron',
  },
  {
    title: 'AI Agent Hackathon',
    logo: '/assets/achievements/ai-agent-hackathon.png',
    accent: 'blue',
  },
];

function AchievementGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="achievement-marquee__group" aria-hidden={duplicate || undefined}>
      {ACHIEVEMENTS.map((achievement) => (
        <div className={`achievement-logo achievement-logo--${achievement.accent}`} key={achievement.title}>
          <span className="achievement-logo__image">
            <img src={achievement.logo} alt="" loading="eager" />
          </span>
          <span className="achievement-logo__name">{achievement.title}</span>
        </div>
      ))}
    </div>
  );
}

export default function AchievementMarquee() {
  return (
    <section className="achievement-strip" aria-labelledby="achievement-strip-title">
      <p id="achievement-strip-title" className="achievement-strip__label">
        Achievements &amp; recognition
      </p>

      <div className="achievement-marquee">
        <div className="achievement-marquee__track">
          <AchievementGroup />
          <AchievementGroup duplicate />
        </div>
      </div>
    </section>
  );
}
