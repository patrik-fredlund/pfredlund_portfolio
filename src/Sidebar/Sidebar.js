import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarMenu>
        <SidebarLink to='/' onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to='/about' onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to='/projects' onClick={toggle}>
          Projects
        </SidebarLink>
        <SidebarLink to='/contact' onClick={toggle}>
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
