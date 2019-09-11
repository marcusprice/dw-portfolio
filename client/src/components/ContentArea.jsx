import React from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'
import AudioServices from './AudioServices.jsx'
import About from './About.jsx'

const ContentArea = (props) => {

  const handleDisplay = () => {
    let output

    switch(props.display) {
      case 'landing menu':
        output = <LandingMenu changeDisplay={props.changeDisplay} />
        break
      case 'audio services':
        output = <AudioServices />
        break
      case 'about':
        output = <About />
    }

    return output
  }

  return(
    <ContentAreaContainer onClick={() => {props.triggerNavMenu(false)}} navMenuExpanded={props.navMenuExpanded} >
      {handleDisplay()}
    </ContentAreaContainer>
  )
}

export default ContentArea
