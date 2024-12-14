import Galery from "./components/Galery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="w-full h-screen bg-slate-500">
      <NavBar />
      <Hero />
      <Galery />
    </main>
  );
}

export default App;
