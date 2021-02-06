import './App.css';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileImage from "./putte.jpg";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
          {<img src={ProfileImage} className='profileImage' alt="Patrik profile picture" />}
        </Route>
        <Route path='/projects'>
          <Projects />
          {<img src={ProfileImage} className='profileImage' alt="Patrik profile picture" />}
        </Route>
        <Route path='/contact'>
          <Contact />
          {<img src={ProfileImage} className='profileImage' alt="Patrik profile picture" />}
        </Route>
        <Route path='/'>
          <Home />
          {<img src={ProfileImage} className='profileImage' alt="Patrik profile picture" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
