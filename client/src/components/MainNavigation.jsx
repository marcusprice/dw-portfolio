import React from 'react'
import { NavigationContainer, NavItem } from './Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavigationContainer>
      <NavItem>MUSIC</NavItem>
      <NavItem onClick={() => {props.changeDisplay('audio services')}}>AUDIO SERVICES</NavItem>
      <NavItem onClick={() => {props.changeDisplay('about')}}>ABOUT</NavItem>
      <NavItem>SUPPORT</NavItem>
      <NavItem>SHOWS</NavItem>
      <NavItem>CONTACT</NavItem>
    </NavigationContainer>
  )
}

export default MainNavigation
