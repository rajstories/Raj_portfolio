import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github, Layers3, Sparkles } from 'lucide-react';
import type { Project, SectionId } from '../types';
import { PROJECT_DATA } from '../data/projects';
import Navbar from './Navbar';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectGalleryProps {
  onBack: () => void;
  onNavigate: (id: SectionId) => void;
}

const ProjectGallery = ({ onBack, onNavigate }: ProjectGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const openProject = (project: Project) => setSelectedProject(project);

  return (
    <div className="project-gallery-page">
      <Navbar activeSection="projects" onNavigate={onNavigate} />

      <main className="project-gallery" aria-labelledby="project-gallery-title">
        <div className="project-gallery__orbit" aria-hidden="true" />
        <div className="project-gallery__glow project-gallery__glow--left" aria-hidden="true" />
        <div className="project-gallery__glow project-gallery__glow--right" aria-hidden="true" />
        <span className="project-gallery__sparkle project-gallery__sparkle--one" aria-hidden="true">&#10022;</span>
        <span className="project-gallery__sparkle project-gallery__sparkle--two" aria-hidden="true">&#10022;</span>

        <div className="project-gallery__shell">
          <button className="project-gallery__back" type="button" onClick={onBack}>
            <ArrowLeft aria-hidden="true" />
            <span>Back to Portfolio</span>
          </button>

          <header className="project-gallery__heading">
            <div className="project-gallery__heading-copy">
              <p className="project-gallery__eyebrow">Selected Work</p>
              <h1 id="project-gallery-title">Complete <span>Project Archive</span></h1>
              <p>Products built across AI, security, civic technology, public systems and human-centered digital experiences.</p>
            </div>

            <div className="project-gallery__summary" aria-label="Project archive summary">
              <span className="project-gallery__summary-icon"><Layers3 aria-hidden="true" /></span>
              <span><strong>{PROJECT_DATA.length} projects</strong><small>Built to solve real problems</small></span>
            </div>
          </header>

          <div className="project-gallery__accent" aria-hidden="true"><span /></div>

          <div className="project-gallery__grid">
            {PROJECT_DATA.map((project) => (
              <article
                key={project.id}
                className="project-gallery-card"
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.title} project details`}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <div className={`project-gallery-card__media${project.imageFit === 'contain' ? ' project-gallery-card__media--contain' : ''}`}>
                  <img src={project.image} alt={project.imageAlt} />
                  <span className="project-gallery-card__number" aria-hidden="true">{String(project.id).padStart(2, '0')}</span>
                </div>

                <div className="project-gallery-card__body">
                  <div className="project-gallery-card__topline">
                    <span>{project.category}</span>
                    <i aria-hidden="true"><ArrowUpRight /></i>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <footer className="project-gallery__footer">
            <span className="project-gallery__footer-icon"><Sparkles aria-hidden="true" /></span>
            <div><strong>More ideas are always in motion.</strong><p>Explore the code, live prototypes, and experiments on GitHub.</p></div>
            <a href="https://github.com/rajstories" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />Visit GitHub <ArrowUpRight aria-hidden="true" /></a>
          </footer>
        </div>
      </main>

      <ProjectDetailModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default ProjectGallery;
