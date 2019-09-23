import React from 'react'
import { ContentSection } from './Atoms.jsx'
import MusicSectionInfo from './MusicSectionInfo.jsx'
import MusicCards from './MusicCards.jsx'

const Music = (props) => {
  return(
    <ContentSection>
      <MusicSectionInfo />
      <MusicCards />
    </ContentSection>
  )
}

export default Music
