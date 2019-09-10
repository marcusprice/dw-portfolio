import React, { useState } from 'react'
import './App.css'
import { AppContainer } from './components/Atoms.jsx'
import Header from './components/Header.jsx'
import ContentArea from './components/ContentArea.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  const [navMenuExpanded, setNavMenuExpanded] = useState(false)

  const triggerNavMenu = () => {
    setNavMenuExpanded(!navMenuExpanded)
  }

  return (
    <AppContainer>
      <Header triggerNavMenu={triggerNavMenu} />
      <ContentArea navMenuExpanded={navMenuExpanded} />
      <NavBar navMenuExpanded={navMenuExpanded} />
    </AppContainer>
  );
}

export default App
