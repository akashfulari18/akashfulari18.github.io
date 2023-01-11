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
   
        {/* <h1>hello world</h1> */}
        <Navbar />
        <Sidebar/>
        {/* <Navbar2/> */}
      
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      
    </div>
  );
}

export default App;
