import React, { useState, useEffect } from 'react'
import Login from './admin-components/Login.jsx'
import Dashboard from './admin-components/Dashboard.jsx'
import AppContainer from 'react-div-100vh'
import { HeaderContainer, SiteTitle, MenuIcon, NavList, NavItem } from './admin-components/Atoms.jsx'
import Header from './client-components/Header.jsx'
import NavBar from './admin-components/NavBar.jsx'

const AdminApp = () => {
  const [navMenuExpanded, setNavMenuExpanded] = useState(false) //true = open nav menu, false = closed nav menu
  const [display, setDisplay] = useState('landing menu')  //the current view/page
  const [loggedIn, setLoggedIn] = useState(false)
  const [shows, setShows] = useState([])

  useEffect(() => {
    //check to see if the user is already logged in
    fetch('/loginCheck')
      .then(response => response.json())
      .then((result) => {
        if (result.loggedIn) {
          setShows(result.shows)
          setLoggedIn(true)
        }
      })
  }, [])

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

  const handleDisplay = () => {
    if(loggedIn) {
      return(
        <AppContainer>
          <Header changeDisplay={changeDisplay} triggerNavMenu={triggerNavMenu} />
          <NavBar changeDisplay={changeDisplay} navMenuExpanded={navMenuExpanded} />
          <Dashboard triggerNavMenu={triggerNavMenu} navMenuExpanded={navMenuExpanded} display={display} changeDisplay={changeDisplay} />
        </AppContainer>
      )
    } else {
      return(
        <AppContainer>
          <Header  changeDisplay={changeDisplay} triggerNavMenu={triggerNavMenu} />
          <Login />
        </AppContainer>
      )
    }
  }

  return handleDisplay()
}

export default AdminApp
