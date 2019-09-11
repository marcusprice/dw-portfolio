import React from 'react'
import { NavigationContainer, NavItem } from './Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavigationContainer>
      <NavItem><a href="https://soundcloud.com/tarsier-eyes" rel="noopener noreferrer" target="_blank">SOUNDCLOUD</a></NavItem>
      <NavItem>INSTAGRAM</NavItem>
    </NavigationContainer>
  )
}

export default MainNavigation
