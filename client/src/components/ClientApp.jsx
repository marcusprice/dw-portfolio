import React, { useState } from 'react'
import '../App.css'
import AppContainer from 'react-div-100vh'
import Header from './client-components/Header.jsx'
import ContentArea from './client-components/ContentArea.jsx'
import NavBar from './client-components/NavBar.jsx'

const ClientApp = () => {
  const [navMenuExpanded, setNavMenuExpanded] = useState(false) //true = open nav menu, false = closed nav menu
  const [display, setDisplay] = useState('landing menu')  //the current view/page

  //opens & closes the navigation menu
  const triggerNavMenu = (state) => {
    if(state !== undefined) {                 //if a specific state is set, set the nav to that state
      setNavMenuExpanded(state)
    } else {                                  //otherwise just set it to the opposite state
      setNavMenuExpanded(!navMenuExpanded)
    }
  }

  //sets view/page to display
  const changeDisplay = (newDisplay) => {
    setDisplay(newDisplay)
    setNavMenuExpanded(false)
  }

  return (
    <AppContainer>
      <Header changeDisplay={changeDisplay} triggerNavMenu={triggerNavMenu} />
      <ContentArea triggerNavMenu={triggerNavMenu} navMenuExpanded={navMenuExpanded} display={display} changeDisplay={changeDisplay} />
      <NavBar changeDisplay={changeDisplay} navMenuExpanded={navMenuExpanded} />
    </AppContainer>
  )
}

export default ClientApp
