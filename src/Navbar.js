import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <h3 className='logo'>Patrik Fredlund</h3>
  
        <div>
          <li>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Contact
            </Link>
          </li>
        </div>
      </nav>
    );
  }
  
  export default Navbar;