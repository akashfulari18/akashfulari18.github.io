import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/pages/About';
import ContactMe from './Components/pages/ContactMe';
import Home from './Components/pages/Home';
import Projects from './Components/pages/Projects';
import Skills from './Components/pages/Skills';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
