import React from 'react'
import { NavBarContainer } from '../client-components/Atoms.jsx'
import MainNavigation from './MainNavigation.jsx'

const NavBar = (props) => {
  return (
    <NavBarContainer navMenuExpanded={props.navMenuExpanded}>
      <MainNavigation changeDisplay={props.changeDisplay} />
    </NavBarContainer>
  )
}

export default NavBar
