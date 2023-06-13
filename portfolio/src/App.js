import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';


function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Education/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
