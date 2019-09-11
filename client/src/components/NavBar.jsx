import React from 'react'
import { NavBarContainer } from './Atoms.jsx'
import MainNavigation from './MainNavigation.jsx'
import SecondaryNavigation from './SecondaryNavigation.jsx'

const NavBar = (props) => {
  return (
    <NavBarContainer navMenuExpanded={props.navMenuExpanded}>
      <MainNavigation changeDisplay={props.changeDisplay} />
      <SecondaryNavigation />
    </NavBarContainer>
  )
}

export default NavBar
