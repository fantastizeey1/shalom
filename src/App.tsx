// import Galery from "./components/Galery";
// import Gallery from "./components/Gallery";
import { useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { NewHero } from "./components/NewHero";
import { World } from "./components/World";

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <main className="w-full h-screen bg-slate-500">
      <NavBar />
      <Hero />
      <NewHero />
      <World />
      {/* <Gallery />
      <Galery /> */}
    </main>
  );
}

export default App;
