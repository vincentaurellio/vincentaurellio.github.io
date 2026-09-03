import { Link } from "react-router";
import Container from "../components/layout/Container";

function About() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Container className="py-16 sm:py-24">
        <Link
          to="/"
          className="font-mono text-sm text-muted transition-colors hover:text-text"
        >
          ← Back home
        </Link>

        <article className="mt-16 max-w-3xl">
          <header>
            <p className="font-mono text-sm tracking-wide text-muted">
              ABOUT
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Data science with a quantitative perspective.
            </h1>
          </header>

          <div className="mt-10 space-y-6 text-lg leading-8 text-muted">
            <p>
              I’m a Data Science & Analytics graduate from NUS, with a
              specialization in Operations Research and minors in Quantitative
              Finance and Artificial Intelligence.
            </p>

            <p>
              My interests sit at the intersection of machine learning,
              optimization, data, and quantitative finance. I enjoy working on
              problems where mathematical modeling and computation can be used
              to understand complex systems and support better decisions.
            </p>

            <p>
              My projects span reinforcement learning, machine learning, AI
              systems, and data-driven applications. I’m particularly
              interested in exploring quantitative research and applying
              machine learning to financial problems.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}

export default About;
