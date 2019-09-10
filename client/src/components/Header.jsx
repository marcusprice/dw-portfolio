import React from 'react'
import { HeaderContainer, SiteTitle, MenuIcon } from './Atoms'
import menuIcon from '../assets/icons/menu.png'

const Header = (props) => {
  return(
    <HeaderContainer>
      <SiteTitle>DUSTIN WILLIAMS</SiteTitle>
      <MenuIcon src={menuIcon} onClick={() => {props.triggerNavMenu()}}/>
    </HeaderContainer>
  )
}

export default Header
