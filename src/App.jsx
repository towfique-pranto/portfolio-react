import "./App.css";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex min-h-screen w-full">
      <HeaderLeft />

      <main className="flex-3">
        <Home />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
