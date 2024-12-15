import Galery from "./components/Galery";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { NewHero } from "./components/NewHero";

function App() {
  return (
    <main className="w-full h-screen bg-slate-500">
      <NavBar />
      <Hero />
      <NewHero />
      {/* <Gallery />
      <Galery /> */}
    </main>
  );
}

export default App;
