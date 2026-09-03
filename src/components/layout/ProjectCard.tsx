import { Link } from "react-router";
import type { Project } from "../../data/projects.ts";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-border/20"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-sans text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-muted">{project.summary}</p>
        </div>

        <span className="shrink-0 text-lg text-muted transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
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