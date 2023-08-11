import './App.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Projects from './projects.js'
import Skills from './Skills.js';
import Footer from './Footer.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    <Nav />
    <Home />
    <Projects />
    <Skills />
    <Footer />
    </div>
  );
}

export default App;
