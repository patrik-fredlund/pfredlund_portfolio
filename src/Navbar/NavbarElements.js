import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((vw 1000px) / 2);
  z-index: 10;
  padding-right: 100px;
  font-family: 'Roboto';

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: #00141a; */
  }
  & .logoContainer {
    display: flex;
    flex-direction: column;
    padding-top: 30px;

  }

  & .portfolio {
    display: flex;
    font-weight: 100;
    font-style: italic;
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
    color: #00ccff;
  }

  & .logo {
    letter-spacing: 2px;
    padding-left: 90px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #00ccff;
//   }
// `;
