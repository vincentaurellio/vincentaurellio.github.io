import Container from "./Container";
import { Link } from "react-router";

function NavBar() {
  return (
    <header className="border-b border-border">
      <Container className="flex h-20 items-center justify-between">
        <Link
          to="/"
          className="font-sans text-xl font-semibold tracking-tight"
        >
          Vincent Aurellio Budianto
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/#projects"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Work
          </Link>

          <Link
            to="/about"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            About
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Resume
          </a>

          <a
            href="https://github.com/vincentaurellio"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            GitHub ↗
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
