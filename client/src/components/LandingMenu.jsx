import React from 'react'
import { LandingMenuContainer, LandingMenuItem } from './Atoms.jsx'
import dustinJamming from '../img/dustin-jamming.jpg'
import dustin from '../img/dustin.jpg'
import audioEquipment from '../img/audio-equipment.jpeg'
import musicCollection from '../img/music-collection.jpeg'
import money from '../img/money.jpeg'
import email from '../img/email.jpeg'

const LandingMenu = (props) => {
  return(
    <LandingMenuContainer>
      <LandingMenuItem img={musicCollection} size="auto 100%" position="left center">MUSIC</LandingMenuItem>
      <LandingMenuItem onClick={() => {props.changeDisplay('audio services')}} img={audioEquipment} size="auto 100%">AUDIO SERVICES</LandingMenuItem>
      <LandingMenuItem onClick={() => {props.changeDisplay('about')}} img={dustin} size="100% auto" position="left center">ABOUT</LandingMenuItem>
      <LandingMenuItem img={money} size="100% auto">SUPPORT</LandingMenuItem>
      <LandingMenuItem img={dustinJamming} size="100% auto">SHOWS</LandingMenuItem>
      <LandingMenuItem img={email} size="100% auto">CONTACT</LandingMenuItem>
    </LandingMenuContainer>
  )
}

export default LandingMenu
