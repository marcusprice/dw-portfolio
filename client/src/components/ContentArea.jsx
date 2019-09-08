import React from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'

const ContentArea = (props) => {
  return(
    <ContentAreaContainer>
      <LandingMenu />
    </ContentAreaContainer>
  )
}

export default ContentArea
