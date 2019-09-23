import React from 'react'
import { ContentSection } from './Atoms.jsx'
import ContactInfo from './ContactInfo.jsx'
import ContactFormCard from './ContactFormCard.jsx'

const Contact = (props) => {
  return(
    <ContentSection>
      <ContactInfo />
      <ContactFormCard />
    </ContentSection>
  )
}

export default Contact
