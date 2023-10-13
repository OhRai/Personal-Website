import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';
import Hero from './Hero';
import Portfolio from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className='select-none mb-0'>
        <Navbar />
        <div id='home'>
          <Hero />
        </div>
        <div id='projects' className='drop-shadow-xl'>
          <Portfolio />
        </div>
        <div id='about'>
          <About />
        </div>   
        <div id='contact'>
          <Contact />
        </div>
      </div>      
    </Router>
  );
}

export default App;
  