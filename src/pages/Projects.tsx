import { Link } from "react-router";
import { projects } from "../data/projects";
import Container from "../components/layout/Container";
import ProjectCard from "../components/layout/ProjectCard";

function Projects() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Container className="py-16 sm:py-24">
        <Link
          to="/"
          className="font-mono text-sm text-muted transition-colors hover:text-text"
        >
          ← Back home
        </Link>

        <header className="mt-16 max-w-3xl">
          <p className="font-mono text-sm tracking-wide text-muted">
            PROJECTS
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            All projects.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">
            A collection of work across machine learning, reinforcement
            learning, AI systems, and data science.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default Projects;