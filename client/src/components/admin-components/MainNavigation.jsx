import React from 'react'
import { NavList, NavItem } from '../client-components/Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavList>
      <NavItem>SHOWS</NavItem>
      <NavItem>ADD SHOW</NavItem>
      <NavItem>LOGOUT</NavItem>
    </NavList>
  )
}

export default MainNavigation
