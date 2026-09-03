import Container from './Container'

function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-wide text-muted">
            DATA SCIENCE · QUANTITATIVE FINANCE · AI
          </p>

          <h1 className="mt-6 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">
            Building models and systems at the intersection of data, machine
            learning, and quantitative finance.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            NUS Data Science & Analytics graduate focused on machine learning,
            optimization, and quantitative research.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Explore my work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-border/30"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;