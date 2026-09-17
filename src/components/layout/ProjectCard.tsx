import { Link } from "react-router";
import type { Project } from "../../data/projects.ts";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-sans text-xl font-semibold tracking-tight">
              {project.title}
            </h3>

            {project.status && (
              <span
                className={`rounded-md border px-2 py-1 font-mono text-[10px] uppercase tracking-wide ${
                  project.status === "ongoing"
                    ? "border-accent/20 bg-accent/5 text-accent"
                    : "border-border bg-background text-muted"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        <span className="shrink-0 text-lg text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
          ↗
        </span>
      </div>

      <p className="mt-3 leading-7 text-muted">{project.summary}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default ProjectCard;