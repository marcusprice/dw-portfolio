import React from 'react'
import { ContentSection } from './Atoms.jsx'
import AudioServicesInfo from './AudioServicesInfo.jsx'
import AudioServicesCards from './AudioServicesCards.jsx'
import AudioServicesContact from './AudioServicesContact.jsx'
import 'react-perfect-scrollbar/dist/css/styles.css';

const AudioServices = (props) => {
  return(
    <ContentSection>
      <AudioServicesInfo />
      <AudioServicesCards />
      <AudioServicesContact />
    </ContentSection>
  )
}

export default AudioServices
