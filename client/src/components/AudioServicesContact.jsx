import React, { useState } from 'react'
import { FullCard, FormContainer, FormInfo, CardTitle, FormParagraph, Paragraph, ContactForm, FormLabel, Input, Submit, TextArea, Modal, ModalCard, ModalButton } from './Atoms.jsx'

const AudioServicesContact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)

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

  const handleModal = () => {
    if(showModal) {
      if(success) {
        return(
          <Modal onClick={() => {setShowModal(false)}}>
            <ModalCard>
              <CardTitle>Message Sent</CardTitle>
              <Paragraph>Your message to Dustin was successfully sent. You can expect a response within the next few days.</Paragraph>
              <ModalButton onClick={() => {setShowModal(false)}}>Close</ModalButton>
            </ModalCard>
          </Modal>
        )
      } else {
        return(
          <Modal onClick={() => {setShowModal(false)}}>
            <ModalCard>
              <CardTitle>Error!</CardTitle>
              <Paragraph>There was an error sending your message. Please double-check the form and try again.</Paragraph>
              <ModalButton onClick={() => {setShowModal(false)}}>Close</ModalButton>
            </ModalCard>
          </Modal>
        )
      }
    }
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
        if(result.emailSent) {
          setName('')
          setEmail('')
          setService('')
          setMessage('')
          setSuccess(true)
          setShowModal(true)
        } else {
          setSuccess(false)
          setShowModal(true)
        }
      })
  }

  return(
    <FullCard>
      {handleModal()}
      <FormContainer>
        <FormInfo>
          <CardTitle>Get in Touch For a Quote</CardTitle>
          <FormParagraph>
            Vivamus nisl nibh, viverra vel eleifend eu, viverra eget lorem. Ut ut vulputate massa. Morbi nec purus varius, consectetur sapien et, suscipit erat. Pellentesque rutrum felis lacus, a volutpat lorem cursus ut. Phasellus sed facilisis ante. Vestibulum congue, sem ut consectetur convallis, ipsum massa laoreet leo, et congue orci neque efficitur justo.
          </FormParagraph>
        </FormInfo>

        <ContactForm onSubmit={handleSubmit} autocomplete="off">
          <FormLabel top={true}>Name</FormLabel>
          <Input required="required" value={name} onChange={(e) => {setName(e.target.value)}} top={true} type="text" />
          <FormLabel>Email</FormLabel>
          <Input required="required" value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" />
          <FormLabel>Service</FormLabel>
          <Input required="required" value={service} onChange={(e) => {setService(e.target.value)}} type="text" />
          <FormLabel>Message</FormLabel>
          <TextArea required="required" value={message} onChange={(e) => {setMessage(e.target.value)}} />
          <Submit value="Send Message" type="submit"/>
        </ContactForm>

      </FormContainer>
    </FullCard>
  )
}

export default AudioServicesContact
