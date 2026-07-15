import React from 'react';
import {
  BarChart3,
  BookOpen,
  Camera,
  Clapperboard,
  Code2,
  Heart,
  Instagram,
  Plane,
  Play,
  TrendingUp,
  Video,
} from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/the_rajstories/';

const contentPillars = [
  { icon: Camera, label: 'Cinematic Vlogs', description: "Capturing life's aesthetic moments", tone: 'coral' },
  { icon: Clapperboard, label: 'Tech Lifestyle', description: "The reality of a developer's journey", tone: 'blue' },
  { icon: TrendingUp, label: 'Personal Growth', description: 'Mindset & productivity insights', tone: 'purple' },
  { icon: Video, label: 'Visual Storytelling', description: 'Editing & narrative composition', tone: 'gold' },
];

const galleryImages = [
  { src: '/assets/wardwatch.png', alt: 'WardWatch project visual' },
  { src: '/projects/threatpilot.png', alt: 'ThreatPilot developer workspace' },
  { src: '/projects/dealflow.png', alt: 'DealFlow product visual' },
  { src: '/assets/saksham.png', alt: 'Saksham dashboard visual' },
  { src: '/projects/prolytic.png', alt: 'Prolytic project visual' },
  { src: '/assets/apna-thela.png', alt: 'Apna Thela product visual' },
];

const reels = [
  { title: 'CINEMATIC VLOG', subtitle: 'Exploring Mountains', views: '125K', image: '/assets/wardwatch.png', className: 'stories-reel--mountains' },
  { title: 'LIFE OF A DEVELOPER', subtitle: 'The Reality', views: '98K', image: '/projects/threatpilot.png', className: 'stories-reel--developer' },
  { title: 'STUDENT DIARIES', subtitle: 'Growth & Grind', views: '76K', image: '/assets/saksham.png', className: 'stories-reel--student' },
  { title: 'TRAVEL STORIES', subtitle: 'Wander. Capture. Repeat.', views: '112K', image: '/assets/wardwatch.png', className: 'stories-reel--travel' },
  { title: 'BEHIND THE CODE', subtitle: 'Building in Silence', views: '89K', image: '/projects/prolytic.png', className: 'stories-reel--code' },
  { title: 'LESSONS LEARNED', subtitle: 'Notes from the Journey', views: '71K', image: '/assets/apna-thela.png', className: 'stories-reel--lessons' },
];

const ProfileCard: React.FC = () => (
  <div className="stories-profile-frame">
    <article className="stories-profile" aria-label="the_rajstories Instagram profile preview">
      <header className="stories-profile__header">
        <strong>the_rajstories</strong>
        <Instagram aria-hidden="true" />
      </header>

      <div className="stories-profile__overview">
        <div className="stories-profile__avatar"><span>RAJ</span></div>
        <dl className="stories-profile__metrics">
          <div><dt>2.5+</dt><dd>Years</dd></div>
          <div><dt>500K+</dt><dd>Views</dd></div>
          <div><dt>High</dt><dd>Impact</dd></div>
        </dl>
      </div>

      <div className="stories-profile__bio">
        <strong>Raj | Storyteller</strong>
        <p><span aria-hidden="true">&#127909;</span> Creating stories that matter</p>
        <p><span aria-hidden="true">&#128187;</span> Dev by day, Creator by night</p>
        <p><span aria-hidden="true">&#128221;</span> Documenting the journey</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">linktr.ee/rajstories</a>
      </div>

      <div className="stories-profile__highlights" aria-label="Story highlights">
        <span><Camera aria-hidden="true" /></span>
        <span><Code2 aria-hidden="true" /></span>
        <span><Plane aria-hidden="true" /></span>
        <span><BookOpen aria-hidden="true" /></span>
      </div>

      <div className="stories-profile__gallery">
        {galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
      </div>

      <div className="stories-profile__engagement">
        <Heart aria-hidden="true" />
        <span>Consistent<br />Engagement</span>
      </div>
    </article>
  </div>
);

const ReelGrid: React.FC = () => (
  <div className="stories-reels" aria-label="Featured story reels">
    {reels.map((reel) => (
      <article className={`stories-reel ${reel.className}`} key={reel.title}>
        <img src={reel.image} alt="" />
        <div className="stories-reel__shade" />
        <div className="stories-reel__copy">
          <strong>{reel.title}</strong>
          <span>{reel.subtitle}</span>
        </div>
        <span className="stories-reel__views"><Play aria-hidden="true" /> {reel.views}</span>
      </article>
    ))}
  </div>
);

const ContentCreation: React.FC = () => {
  return (
    <section id="content" className="stories-section" aria-labelledby="stories-title">
      <div className="stories-decoration stories-decoration--orbit" aria-hidden="true" />
      <div className="stories-decoration stories-decoration--wash" aria-hidden="true" />
      <span className="stories-decoration stories-decoration--sparkle" aria-hidden="true">&#10022;</span>
      <span className="stories-decoration stories-decoration--sparkle-blue" aria-hidden="true">&#10022;</span>
      <span className="stories-decoration stories-decoration--heart" aria-hidden="true"><Heart /></span>
      <span className="stories-decoration stories-decoration--analytics" aria-hidden="true"><BarChart3 /></span>

      <div className="stories-shell">
        <div className="stories-intro">
          <span className="stories-intro__rule" aria-hidden="true" />
          <p className="stories-eyebrow">Beyond the Code</p>
          <h2 id="stories-title" className="stories-title">
            Engineering<br />
            Solutions, <span>Curating</span><br />
            <em>Narratives</em><b aria-hidden="true">.</b>
          </h2>

          <p className="stories-quote">&ldquo;Code builds the product, but stories build the connection.&rdquo;</p>

          <div className="stories-copy">
            <p>Over the past 2.5 years, I&apos;ve cultivated a community on Instagram (@the_rajstories), blending the precision of software engineering with the art of visual storytelling.</p>
            <p>My content isn&apos;t just about documenting life; it&apos;s about exploring the human side of technology, student growth, and the creative process.</p>
            <p>This dual-focus allows me to approach technical problems with a user-centric, empathetic mindset&mdash;translating complex logic into compelling experiences.</p>
          </div>

          <div className="stories-pillars">
            {contentPillars.map((pillar) => (
              <article className={`stories-pillar stories-pillar--${pillar.tone}`} key={pillar.label}>
                <span className="stories-pillar__icon"><pillar.icon aria-hidden="true" /></span>
                <span><strong>{pillar.label}</strong><small>{pillar.description}</small></span>
              </article>
            ))}
          </div>

          <a className="stories-instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Visit Instagram Profile <Instagram aria-hidden="true" />
          </a>
        </div>

        <div className="stories-profile-column"><ProfileCard /></div>
        <ReelGrid />
      </div>
    </section>
  );
};

export default ContentCreation;
