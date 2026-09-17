import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import Container from "../components/layout/Container";

function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main>
        <Container className="py-16 sm:py-24">
          <p className="font-mono text-sm text-muted">404</p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Project not found.
          </h1>

          <Link
            to="/projects"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            ← Back to projects
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container className="py-16 sm:py-24">
        <Link
          to="/projects"
          className="font-mono text-sm text-muted transition-colors hover:text-text"
        >
          ← Back to projects
        </Link>

        <article className="mt-16">
          <header className="max-w-3xl">
            <p className="font-mono text-sm tracking-wide text-muted">
              PROJECT
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-surface px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                View on GitHub
                <span>↗</span>
              </a>
            )}
          </header>

          <div className="mt-20 max-w-4xl space-y-20">
            <ProjectSection title="Overview">
              <p className="leading-8 text-muted">{project.overview}</p>
            </ProjectSection>

            <ProjectSection title="Technical Approach">
              <ProjectList items={project.approach} />
            </ProjectSection>

            {project.results && (
              <ProjectSection title="Results">
                <ProjectList items={project.results} />
              </ProjectSection>
            )}

            {project.lessons && (
              <ProjectSection title="Lessons Learned">
                <ProjectList items={project.lessons} />
              </ProjectSection>
            )}
          </div>
        </article>
      </Container>
    </main>
  );
}

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5">{children}</div>
    </section>
  );
}

interface ProjectListProps {
  items: string[];
}

function ProjectList({ items }: ProjectListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-6 leading-7 text-muted before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Project;