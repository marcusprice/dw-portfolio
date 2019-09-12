import React from 'react'
import { SectionTitle, SectionQuote, ContentSection } from './Atoms.jsx'
import PerfectScrollbar from 'react-perfect-scrollbar'
import AudioServicesInfo from './AudioServicesInfo.jsx'
import AudioServicesCards from './AudioServicesCards.jsx'
import AudioServicesContact from './AudioServicesContact.jsx'
import 'react-perfect-scrollbar/dist/css/styles.css';

const AudioServices = (props) => {
  return(
    <ContentSection>
      <SectionTitle>AUDIO SERVICES</SectionTitle>
      <SectionQuote>Morbi diam velit, aliquet quis velit consequat, aliquet blandit tortor.</SectionQuote>
      <AudioServicesInfo />
      <AudioServicesCards />
      <AudioServicesContact />
    </ContentSection>
  )
}

export default AudioServices
