
/* 
Hej och välkommen till min sida!
Ha en trevlig dag!
/Putte

Link to repo: https://github.com/patrik-fredlund/pfredlund_portfolio
Link to surge: https://pfredlund_portfolio.surge.sh/

*/




import './App.css';
import Contact from './Pages/Contact';
import Projects from './Projects/Projects';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import ProfileImage from './putte.jpg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/about'>
          <About />
          <>
            {
              <img
                src={ProfileImage}
                className='profileImage'
                alt='Patrik profile'
              />
            }
          </>
        </Route>
        <Route path='/projects'>
          <Projects />
          <>
            {
              <img
                src={ProfileImage}
                className='profileImage'
                alt='Patrik profile'
              />
            }
          </>
        </Route>
        <Route path='/contact'>
          <Contact />
          <>
            {
              <img
                src={ProfileImage}
                className='profileImage'
                alt='Patrik profile'
              />
            }
          </>
        </Route>
        <Route path='/'>
          <Home />
          <>
            {
              <img
                src={ProfileImage}
                className='profileImage'
                alt='Patrik profile'
              />
            }
          </>
        </Route>
      </Switch>
    </Router>
 
  );
};

export default App;
