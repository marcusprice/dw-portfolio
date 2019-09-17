import React from 'react'
import { ContentSection } from './Atoms.jsx'
import SupportInfo from './SupportInfo.jsx'
import SupportCards from './SupportCards.jsx'

const Support = (props) => {
  return(
    <ContentSection>
      <SupportInfo />
      <SupportCards />
    </ContentSection>
  )
}

export default Support
