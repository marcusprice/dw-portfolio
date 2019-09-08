import React from 'react'
import { NavBarContainer, SiteTitle, MenuIcon } from './Atoms'
import menuIcon from '../assets/icons/menu.png'

const NavBar = (props) => {
  return(
    <NavBarContainer>
      <SiteTitle>DUSTIN WILLIAMS</SiteTitle>
      <MenuIcon src={menuIcon} />
    </NavBarContainer>
  )
}

export default NavBar
