import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

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
    <>
      <Nav>
        <NavLink to='/'>
          <div className='logoContainer'>
          <h2 className='logo'>
            Patrik Fredlund <span className='portfolio'>/Portfolio</span>
          </h2>
          </div>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
