import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { PROJECT_DATA } from '../data/projects';
import ProjectDetailModal from './ProjectDetailModal';

interface ProjectsProps {
  onViewAll?: () => void;
}

function projectFromUrl(): Project | null {
  const slug = new URLSearchParams(window.location.search).get('project');
  return slug ? PROJECT_DATA.find((project) => project.slug === slug) || null : null;
}

const Projects = ({ onViewAll }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => projectFromUrl());
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const shouldRestoreFocusRef = useRef(false);

  useEffect(() => {
    const handlePopState = () => setSelectedProject(projectFromUrl());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (selectedProject || !shouldRestoreFocusRef.current) return;
    shouldRestoreFocusRef.current = false;
    window.setTimeout(() => lastTriggerRef.current?.focus({ preventScroll: true }), 0);
  }, [selectedProject]);

  const openProject = useCallback((project: Project, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger;
    shouldRestoreFocusRef.current = true;
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.slug);
    window.history.pushState({ projectModal: project.slug }, '', url);
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    if (!selectedProject) return;

    if (window.history.state?.projectModal === selectedProject.slug) {
      window.history.back();
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    window.history.replaceState(window.history.state, '', url);
    setSelectedProject(null);
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-decoration projects-decoration--orbit" aria-hidden="true" />
      <div className="projects-decoration projects-decoration--glow" aria-hidden="true" />
      <div className="projects-sparkle" aria-hidden="true">✦</div>

      <div className="projects-shell">
        <div className="projects-heading-row">
          <div className="projects-heading-copy">
            <div className="projects-heading-rule" aria-hidden="true"><span /></div>
            <p className="projects-eyebrow">Portfolio</p>
            <h2 id="projects-heading" className="projects-title">Featured <span>Projects</span></h2>
            <p className="projects-summary">A selection of high-impact products spanning AI systems, security, governance and intelligent workflows.</p>
            <div className="projects-accent" aria-hidden="true"><span /></div>
          </div>
          <div className="projects-links">
            <button onClick={onViewAll} className="projects-link" type="button">
              View All Projects <ArrowUpRight aria-hidden="true" />
            </button>
            <a href="https://github.com/rajstories" target="_blank" rel="noopener noreferrer" className="projects-link">
              View GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="projects-grid">
          {PROJECT_DATA.map((project) => (
            <article
              key={project.id}
              onClick={(event) => openProject(project, event.currentTarget)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(project, event.currentTarget);
                }
              }}
              className="project-card group"
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} project details`}
            >
              <div className="project-card__media">
                <img src={project.image} alt={project.imageAlt} className="project-card__image" />
                <div className="project-card__veil" aria-hidden="true" />
              </div>

              <div className="project-card__body">
                <div className="project-card__topline">
                  <span className="project-card__category">{project.category}</span>
                  <div className="project-card__arrow" aria-hidden="true"><ArrowUpRight /></div>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={closeProject} />
    </section>
  );
};

export default Projects;
