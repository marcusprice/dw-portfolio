import React, { useState } from 'react'
import './App.css'
import { AppContainer } from './components/Atoms.jsx'
import Header from './components/Header.jsx'
import ContentArea from './components/ContentArea.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  const [navMenuExpanded, setNavMenuExpanded] = useState(false)
  const [display, setDisplay] = useState('landing menu')

  const triggerNavMenu = () => {
    setNavMenuExpanded(!navMenuExpanded)
  }

  const changeDisplay = (newDisplay) => {
    setDisplay(newDisplay)
    setNavMenuExpanded(false)
  }

  return (
    <AppContainer>
      <Header changeDisplay={changeDisplay} triggerNavMenu={triggerNavMenu} />
      <ContentArea navMenuExpanded={navMenuExpanded} display={display} changeDisplay={changeDisplay} />
      <NavBar navMenuExpanded={navMenuExpanded} />
    </AppContainer>
  );
}

export default App
