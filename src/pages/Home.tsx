import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";

function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <NavBar />
      <Hero />
    </main>
  );
}

export default Home