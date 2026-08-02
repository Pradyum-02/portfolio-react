import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 90} className="projects__cell">
      <Card className="project-card" max={11} lift={14}>
        <div className="project-card__media">
          <img
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            width="760"
            height="520"
            loading="lazy"
            decoding="async"
          />
          {project.featured ? <span className="project-card__flag">Featured</span> : null}
        </div>

        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
          <p className="project-card__desc">{project.description}</p>

          <ul className="project-card__metrics">
            {project.metrics.map((metric) => (
              <li key={metric}>
                <Icon name="gauge" size={14} />
                {metric}
              </li>
            ))}
          </ul>

          <div className="project-card__tech">
            {project.tech.map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="project-card__actions">
            {project.github ? (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                variant={project.demo ? "ghost" : "primary"}
                size="sm"
                icon="github"
              >
                GitHub
              </Button>
            ) : null}
            {project.demo ? (
              <Button
                as="a"
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                variant="primary"
                size="sm"
                iconRight="external"
              >
                Live demo
              </Button>
            ) : null}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="projects section section--soft" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Featured projects"
          title="Crafted with Code"
          highlight={["Code"]}
          description="Every project here started with an idea, fueled by countless cups of coffee, and built with passion. Some are production-ready, while others are still evolving."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
