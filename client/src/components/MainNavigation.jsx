import React from 'react'
import { NavList, NavItem } from './Atoms.jsx'

const MainNavigation = (props) => {

  return(
    <NavList>
      <NavItem onClick={() => {props.changeDisplay('music')}}>MUSIC</NavItem>
      <NavItem onClick={() => {props.changeDisplay('audio services')}}>AUDIO SERVICES</NavItem>
      <NavItem onClick={() => {props.changeDisplay('about')}}>ABOUT</NavItem>
      <NavItem onClick={() => {props.changeDisplay('support')}}>SUPPORT</NavItem>
      <NavItem>SHOWS</NavItem>
      <NavItem onClick={() => {props.changeDisplay('contact')}}>CONTACT</NavItem>
    </NavList>
  )
}

export default MainNavigation
