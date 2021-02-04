import './App.css';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  )
 
  
}

export default App;
