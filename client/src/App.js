import React from 'react'
import './App.css'
import { AppContainer } from './components/Atoms.jsx'
import NavBar from './components/NavBar.jsx'
import ContentArea from './components/ContentArea.jsx'

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <ContentArea />
    </AppContainer>
  );
}

export default App
