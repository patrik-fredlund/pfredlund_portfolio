import './App.css';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
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
  );
}

export default App;
