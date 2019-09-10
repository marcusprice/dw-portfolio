import React from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'
import AudioServices from './AudioServices.jsx'

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
    }

    return output
  }

  return(
    <ContentAreaContainer navMenuExpanded={props.navMenuExpanded} >
      {handleDisplay()}
    </ContentAreaContainer>
  )
}

export default ContentArea
