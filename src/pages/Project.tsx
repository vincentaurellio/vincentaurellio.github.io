import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import Container from "../components/layout/Container";

function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main>
        <Container className="py-24">
          <p className="font-mono text-sm text-muted">404</p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Project not found.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            ← Back to home
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container className="py-16">
        <Link
          to="/#projects"
          className="font-mono text-sm text-muted transition-colors hover:text-text"
        >
          ← Back to work
        </Link>

        <article className="mt-16 max-w-3xl">
          <header>
            <p className="font-mono text-sm tracking-wide text-muted">
              PROJECT
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
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
                className="mt-8 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                View on GitHub ↗
              </a>
            )}
          </header>

          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Overview
              </h2>

              <p className="mt-5 leading-8 text-muted">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Technical Approach
              </h2>

              <ul className="mt-5 space-y-4">
                {project.approach.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 leading-7 text-muted before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {project.results && (
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Results
                </h2>

                <ul className="mt-5 space-y-4">
                  {project.results.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 leading-7 text-muted before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.lessons && (
              <section>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Lessons Learned
                </h2>

                <ul className="mt-5 space-y-4">
                  {project.lessons.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 leading-7 text-muted before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </Container>
    </main>
  );
}

export default Project;