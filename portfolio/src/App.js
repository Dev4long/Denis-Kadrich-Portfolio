import './App.css';
import Home from './home.js';
import Projects from './projects.js'
import Skills from './Skills.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Connect from './Connect.js';

function App() {
  return (
    <div className="App">
    <Nav />
    <Home />
    <Projects />
    <Skills />
    <Connect />
    <Footer />
    </div>
  );
}

export default App;
