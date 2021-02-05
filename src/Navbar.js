import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-family: roboto;

  & > li {
    padding: 0 10px 0 0px;
  }
`;



function Navbar() {
    return (
        
      <nav>
        
        <h3 className='logo'>Patrik Fredlund</h3>
        <StyledUL>
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
        </StyledUL>
      </nav>
    );
  }
  
  export default Navbar;