/* --------------------------------------------------------- */
//NavbarElements - styling till samtliga element i navbaren.
/* --------------------------------------------------------- */

import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

//Hela Navbaren
export const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding-right: 100px;

  overflow: hidden;
  background-color: black;
  position: fixed;
  max-width: 1500px;
  top: 0;
  width: 100%;
  z-index:2;      

  @media screen and (max-width: 768px) {
    
    position: static; 

  }
  

// Container med "logo" Patrik Fredlund och /Portfolio
  }
  & .logoContainer {
    margin-left: 70px;
    margin-top:25px
  }
    /* @media screen and (max-width: 768px) {
      .logoContainer {
background-color: red;
        position: fixed; 
      }

  } */


  

  & .portfolio {
    display: flex;
    font-weight: 100;
    font-style: italic;

  
  
`;

//Navigeringsmenyn till höger
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #00ccff;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00141a;
    border-radius: 50px;
    color: #00ccff;
  }
`;

//Hamburger Menu
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 27px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;