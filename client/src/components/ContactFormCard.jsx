import React, { useState } from 'react'
import { FullCard, FormContainer, FormInfo, CardTitle, FormParagraph, Paragraph, ContactForm, FormLabel, Input, Submit, TextArea, Modal, ModalCard, ModalButton } from './Atoms.jsx'

const ContactFormCard = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    sendEmail({
      name: name,
      email: email,
      subjectType: 'Subject',
      subject: subject,
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
        if(result.emailSent) {
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          setSuccess(true)
          setShowModal(true)
        } else {
          setSuccess(false)
          setShowModal(true)
        }
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

  return(
    <FullCard>
      {handleModal()}
      <FormContainer>

        <FormInfo>
          <CardTitle>Get in Touch!</CardTitle>
          <FormParagraph>
            Vivamus nisl nibh, viverra vel eleifend eu, viverra eget lorem. Ut ut vulputate massa. Morbi nec purus varius, consectetur sapien et, suscipit erat. Pellentesque rutrum felis lacus, a volutpat lorem cursus ut. Phasellus sed facilisis ante. Vestibulum congue, sem ut consectetur convallis, ipsum massa laoreet leo, et congue orci neque efficitur justo.
          </FormParagraph>
        </FormInfo>

        <ContactForm required="required" onSubmit={handleSubmit} autocomplete="off">
          <FormLabel top={true}>Name</FormLabel>
          <Input top={true} value={name} onChange={(e) => {setName(e.target.value)}}  type="text" />
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
          <FormLabel>Subject</FormLabel>
          <Input type="text" value={subject} onChange={(e) => {setSubject(e.target.value)}}  />
          <FormLabel>Message</FormLabel>
          <TextArea value={message} onChange={(e) => {setMessage(e.target.value)}} />
          <Submit value="Send Message" type="submit"/>
        </ContactForm>

      </FormContainer>
    </FullCard>
  )
}

export default ContactFormCard
