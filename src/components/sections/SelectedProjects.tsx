import { projects } from "../../data/projects";
import Container from "../layout/Container";
import ProjectCard from "../layout/ProjectCard";

function SelectedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="border-t border-border py-16">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-sm tracking-wide text-muted">
            SELECTED WORK
          </p>

          <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight">
            Projects I've built and explored.
          </h2>

          <p className="mt-5 leading-7 text-muted">
            A selection of work across reinforcement learning, machine
            learning, AI systems, and data-driven applications.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SelectedProjects;