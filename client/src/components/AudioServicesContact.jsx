import React from 'react'
import { FullCard, FormContainer, FormInfo, CardTitle, FormParagraph, ContactForm, FormLabel, Input, Submit, TextArea } from './Atoms.jsx'

const AudioServicesContact = (props) => {
  return(
    <FullCard>
      <FormContainer>

        <FormInfo>
          <CardTitle>Get in Touch For a Quote</CardTitle>
          <FormParagraph>
            Vivamus nisl nibh, viverra vel eleifend eu, viverra eget lorem. Ut ut vulputate massa. Morbi nec purus varius, consectetur sapien et, suscipit erat. Pellentesque rutrum felis lacus, a volutpat lorem cursus ut. Phasellus sed facilisis ante. Vestibulum congue, sem ut consectetur convallis, ipsum massa laoreet leo, et congue orci neque efficitur justo.
          </FormParagraph>
        </FormInfo>

        <ContactForm autocomplete="off">
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
    </FullCard>
  )
}

export default AudioServicesContact
