import { useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { NewHero } from "./components/NewHero";
import { World } from "./components/World";
import { Messages } from "./components/messages";

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
      <Messages />
    </main>
  );
}

export default App;
