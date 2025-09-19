import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;