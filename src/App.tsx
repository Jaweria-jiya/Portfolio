import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import Projects from "./components/Projects/Projects";

export default function App(){
  return <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
}