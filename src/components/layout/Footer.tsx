import Container from "./Container";

function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Vincent Aurellio Budianto
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:vincent.aurellio@u.nus.edu"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Email
          </a>

          <a
            href="https://github.com/vincentaurellio"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            GitHub ↗
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Resume ↗
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;