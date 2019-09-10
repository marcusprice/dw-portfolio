import React from 'react'
import { NavigationContainer, NavItem } from './Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavigationContainer>
      <NavItem>MUSIC</NavItem>
      <NavItem>AUDIO SERVICES</NavItem>
      <NavItem>ABOUT</NavItem>
      <NavItem>SUPPORT</NavItem>
      <NavItem>SHOWS</NavItem>
      <NavItem>CONTACT</NavItem>
    </NavigationContainer>
  )
}

export default MainNavigation
