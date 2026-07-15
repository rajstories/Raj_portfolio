import { useEffect, useRef, useState, type ComponentType } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowUpRight,
  Atom,
  BarChart3,
  Boxes,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Grid2X2,
  Lightbulb,
  Map,
  Play,
  Server,
  Sparkles,
  Target,
  UserRound,
  Users,
  Volume2,
  Workflow,
  X,
  Zap,
  type LucideProps,
} from 'lucide-react';
import type { Project } from '../types';

type ProjectDetailModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

const TECH_ICONS: Record<string, ComponentType<LucideProps>> = {
  react: Atom,
  'node.js': Server,
  express: Server,
  fastapi: Server,
  mapbox: Map,
  langchain: Workflow,
  'framer motion': Sparkles,
  'web speech api': Workflow,
  pwa: Boxes,
};

function TechnologyIcon({ name }: { name: string }) {
  const Icon = TECH_ICONS[name.toLowerCase()] || Code2;
  return <Icon aria-hidden="true" />;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [showAudioDemo, setShowAudioDemo] = useState(false);

  useEffect(() => {
    setImageFailed(false);
    setShowAudioDemo(false);
  }, [project?.image]);

  useEffect(() => {
    if (!isOpen || !project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 30);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute('aria-hidden'));

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const titleId = `project-modal-title-${project.slug}`;
  const statusTone = project.status.toLowerCase().replaceAll(' ', '-');

  return createPortal(
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button ref={closeButtonRef} className="project-modal__close" type="button" onClick={onClose} aria-label={`Close ${project.title} details`}>
          <X aria-hidden="true" />
        </button>

        <div className="project-modal__content">
          <header className="project-modal__hero">
            <div className="project-modal__intro">
              <span className="project-modal__category"><Zap aria-hidden="true" />{project.category}</span>
              <h2 id={titleId}>{project.title}</h2>
              <p className="project-modal__description">{project.description}</p>

              <dl className="project-modal__metadata">
                <div>
                  <Grid2X2 aria-hidden="true" />
                  <span><dt>Category</dt><dd>{project.categoryValue}</dd></span>
                </div>
                <div>
                  <UserRound aria-hidden="true" />
                  <span><dt>Role</dt><dd>{project.role}</dd></span>
                </div>
                <div className={`project-modal__status project-modal__status--${statusTone}`}>
                  <span className="project-modal__status-dot" aria-hidden="true" />
                  <span><dt>Status</dt><dd>{project.status}</dd></span>
                </div>
              </dl>
            </div>

            <div className={`project-modal__visual${imageFailed ? ' project-modal__visual--fallback' : ''}${project.imageFit === 'contain' ? ' project-modal__visual--contain' : ''}`}>
              {imageFailed ? (
                <div className="project-modal__fallback">
                  <Sparkles aria-hidden="true" />
                  <strong>{project.title}</strong>
                  <span>{project.category}</span>
                </div>
              ) : (
                <img src={project.image} alt={project.imageAlt} onError={() => setImageFailed(true)} />
              )}
            </div>
          </header>

          <div className="project-modal__divider" />

          <section className="project-modal__overview" aria-labelledby={`${titleId}-overview`}>
            <span className="project-modal__round-icon project-modal__round-icon--blue"><Lightbulb aria-hidden="true" /></span>
            <div>
              <h3 id={`${titleId}-overview`}>What is it?</h3>
              <p>{project.longDescription}</p>
            </div>
          </section>

          <div className="project-modal__panels">
            <section className="project-modal__panel project-modal__panel--problem" aria-labelledby={`${titleId}-problem`}>
              <span className="project-modal__round-icon"><Target aria-hidden="true" /></span>
              <div>
                <h3 id={`${titleId}-problem`}>The Problem</h3>
                <p>{project.problem}</p>
              </div>
            </section>
            <section className="project-modal__panel project-modal__panel--solution" aria-labelledby={`${titleId}-solution`}>
              <span className="project-modal__round-icon"><Zap aria-hidden="true" /></span>
              <div>
                <h3 id={`${titleId}-solution`}>Our Solution</h3>
                <p>{project.solution}</p>
              </div>
            </section>
          </div>

          <section className="project-modal__audience" aria-labelledby={`${titleId}-audience`}>
            <Users aria-hidden="true" />
            <div>
              <h3 id={`${titleId}-audience`}>Target Audience</h3>
              <p>{project.audience}</p>
            </div>
          </section>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="project-modal__features" aria-labelledby={`${titleId}-features`}>
              <header>
                <span><Boxes aria-hidden="true" /></span>
                <div>
                  <h3 id={`${titleId}-features`}>Key Features</h3>
                  <p>Core product capabilities delivered in this build.</p>
                </div>
              </header>
              <ul>
                {project.keyFeatures.map((feature) => (
                  <li key={feature}><CheckCircle2 aria-hidden="true" /><span>{feature}</span></li>
                ))}
              </ul>
            </section>
          )}

          <div className="project-modal__tools-actions">
            <section className="project-modal__technologies" aria-labelledby={`${titleId}-technologies`}>
              <h3 id={`${titleId}-technologies`}>Technologies Used</h3>
              <ul>
                {(project.technologies ?? project.tags).map((tag) => (
                  <li key={tag}><TechnologyIcon name={tag} /><span>{tag}</span></li>
                ))}
              </ul>
            </section>

            <nav className="project-modal__actions" aria-label={`${project.title} project links`}>
              {project.link && (
                <a className="project-modal__action project-modal__action--repo" href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github aria-hidden="true" /><span>Repo</span><ArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.websiteLink && (
                <a className="project-modal__action project-modal__action--live" href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                  <Globe aria-hidden="true" /><span>Live Site</span><ExternalLink aria-hidden="true" />
                </a>
              )}
              {project.demoVideo && (
                <a className="project-modal__action project-modal__action--demo" href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                  <Play aria-hidden="true" /><span>Demo</span><ArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.prototypeVideo && (
                <a className="project-modal__action project-modal__action--demo" href={project.prototypeVideo} target="_blank" rel="noopener noreferrer">
                  <Play aria-hidden="true" /><span>Prototype</span><ArrowUpRight aria-hidden="true" />
                </a>
              )}
              {project.audioDemo && (
                <button className="project-modal__action project-modal__action--audio" type="button" onClick={() => setShowAudioDemo(true)}>
                  <Volume2 aria-hidden="true" /><span>Hear Demo</span>
                </button>
              )}
            </nav>
          </div>

          {project.audioDemo && showAudioDemo && (
            <section className="project-modal__audio" aria-label={`${project.title} audio demo`}>
              <span><Volume2 aria-hidden="true" /></span>
              <div>
                <strong>Live outbound call demo</strong>
                <small>Listen to the AI agent handling a real-time voice conversation.</small>
                <audio controls autoPlay preload="metadata" src={project.audioDemo}>
                  Your browser does not support audio playback.
                </audio>
              </div>
            </section>
          )}

          <section className="project-modal__impact" aria-labelledby={`${titleId}-impact`}>
            <span className="project-modal__impact-icon"><Sparkles aria-hidden="true" /></span>
            <div className="project-modal__impact-copy">
              <h3 id={`${titleId}-impact`}>Why it matters</h3>
              <p>{project.whyItMatters}</p>
            </div>
            <div className="project-modal__impact-art" aria-hidden="true">
              <BarChart3 />
              <Target />
              <span>✦</span>
            </div>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}
