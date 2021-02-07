import './App.css';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Navbar from './Navbar/Navbar';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileImage from './putte.jpg';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';
import { useState } from 'react'



const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Sidebar  isOpen={isOpen} toggle={toggle} />
      <Switch>
        
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
            <Projects className='profileImage' />
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
};

export default App;
