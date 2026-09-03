import NavBar from "../components/layout/NavBar.tsx";
import Hero from "../components/sections/Hero.tsx";
import SelectedProjects from "../components/sections/SelectedProjects.tsx";

function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <NavBar />
      <Hero />
      <SelectedProjects />
    </main>
  );
}

export default Home