import React from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'
import AudioServices from './AudioServices.jsx'

const ContentArea = (props) => {
  return(
    <ContentAreaContainer navMenuExpanded={props.navMenuExpanded} >
      <AudioServices />
    </ContentAreaContainer>
  )
}

export default ContentArea
