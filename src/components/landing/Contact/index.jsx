import {Container} from 'components/common'
import React from 'react'
import contact from 'assets/illustrations/talk.svg'
import ContactForm from './ContactForm'
import {Details, Thumbnail, Wrapper} from './styles'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1 className="title">Want to know more?</h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
)
