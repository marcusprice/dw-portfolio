import React from 'react'
import { NavList, NavItem } from './Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavList>
      <NavItem><a href="https://soundcloud.com/tarsier-eyes" rel="noopener noreferrer" target="_blank">SOUNDCLOUD</a></NavItem>
      <NavItem>INSTAGRAM</NavItem>
    </NavList>
  )
}

export default MainNavigation
