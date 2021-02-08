/* --------------------------------------------------------- */
//SidebarElements - styling till samtliga element i sidebaren. 
/* --------------------------------------------------------- */



/* --------------------------------------------------------- */

//Jag har använt mig av styled components i detta fall, precis som i NavbarElements. Vad gäller stylingen i helhet på sidan så har jag även använt vanlig css i App.css. Vid nästa update av sidan kommer jag endast använda styled components i separata filer till varje component. För en tyldligare struktur.
/* --------------------------------------------------------- */


import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

//krysset som stänger sidebaren
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

//Hamburger-symbolen
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

// En container som håller ihop länkarna i menyn. Första gången jag använder mig av grid. Något jag velat testa på tidgare. Kommer använda det mer i framtiden. Ett mer användbart system än t.ex flex.
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
//Länkarna till sidorna.
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-right: 30px;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
