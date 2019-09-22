import React, { useState } from 'react'
import { FullCard, FormContainer, FormInfo, CardTitle, FormParagraph, ContactForm, FormLabel, Input, Submit, TextArea } from './Atoms.jsx'

const AudioServicesContact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    sendEmail({
      name: name,
      email: email,
      subjectType: 'Services',
      subject: service,
      message: message
    })
  }

  const sendEmail = (formValues) => {
    fetch('/sendEmail', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'client',
        body: JSON.stringify(formValues)
    })
      .then(response => response.json())
      .then((result) => {
        console.log(result);
      })
  }

  return(
    <FullCard>
      <FormContainer>

        <FormInfo>
          <CardTitle>Get in Touch For a Quote</CardTitle>
          <FormParagraph>
            Vivamus nisl nibh, viverra vel eleifend eu, viverra eget lorem. Ut ut vulputate massa. Morbi nec purus varius, consectetur sapien et, suscipit erat. Pellentesque rutrum felis lacus, a volutpat lorem cursus ut. Phasellus sed facilisis ante. Vestibulum congue, sem ut consectetur convallis, ipsum massa laoreet leo, et congue orci neque efficitur justo.
          </FormParagraph>
        </FormInfo>

        <ContactForm onSubmit={handleSubmit} autocomplete="off">
          <FormLabel top={true}>Name</FormLabel>
          <Input value={name} onChange={(e) => {setName(e.target.value)}} top={true} type="text" />
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" />
          <FormLabel>Service</FormLabel>
          <Input value={service} onChange={(e) => {setService(e.target.value)}} type="text" />
          <FormLabel>Message</FormLabel>
          <TextArea value={message} onChange={(e) => {setMessage(e.target.value)}} />
          <Submit value="Send Message" type="submit"/>
        </ContactForm>

      </FormContainer>
    </FullCard>
  )
}

export default AudioServicesContact
