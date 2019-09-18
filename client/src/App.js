import React, { useState } from 'react'
import './App.css'
import { AppContainer } from './components/Atoms.jsx'
import Header from './components/Header.jsx'
import ContentArea from './components/ContentArea.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
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

export default App
