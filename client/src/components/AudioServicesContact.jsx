import React from 'react'
import { SectionCard, SectionSubTitle, ContactForm, FormLabel, Input, TextArea } from './Atoms.jsx'

const AudioServicesContact = (props) => {
  return(
    <SectionCard>
      <SectionSubTitle>Get in Touch For a Quote</SectionSubTitle>
      <ContactForm>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormLabel>Service</FormLabel>
        <Input type="text" />
        <FormLabel>Message</FormLabel>
        <TextArea />
      </ContactForm>
    </SectionCard>
  )
}

export default AudioServicesContact
