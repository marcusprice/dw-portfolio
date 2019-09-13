import React from 'react'
import { SectionCard, FormContainer, FormInfo, SectionSubTitle, FormParagraph, ContactForm, FormLabel, Input, Submit, TextArea } from './Atoms.jsx'

const AudioServicesContact = (props) => {
  return(
    <SectionCard>
      <FormContainer>

        <FormInfo>
          <SectionSubTitle>Get in Touch For a Quote</SectionSubTitle>
          <FormParagraph>
            Vivamus nisl nibh, viverra vel eleifend eu, viverra eget lorem. Ut ut vulputate massa. Morbi nec purus varius, consectetur sapien et, suscipit erat. Pellentesque rutrum felis lacus, a volutpat lorem cursus ut. Phasellus sed facilisis ante. Vestibulum congue, sem ut consectetur convallis, ipsum massa laoreet leo, et congue orci neque efficitur justo.
          </FormParagraph>
        </FormInfo>

        <ContactForm>
          <FormLabel top={true}>Name</FormLabel>
          <Input top={true} type="text" />
          <FormLabel>Email</FormLabel>
          <Input type="email" />
          <FormLabel>Service</FormLabel>
          <Input type="text" />
          <FormLabel>Message</FormLabel>
          <TextArea />
          <Submit value="Send Message" type="submit"/>
        </ContactForm>

      </FormContainer>
    </SectionCard>
  )
}

export default AudioServicesContact
