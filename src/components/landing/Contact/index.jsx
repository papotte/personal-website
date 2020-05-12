import {Container} from 'components/common'
import {FormattedMessage} from "gatsby-plugin-intl"
import React from 'react'
import contact from 'assets/illustrations/talk.svg'
import Data from 'data/config'
import ContactForm from './ContactForm'
import {Details, Thumbnail, Wrapper} from './styles'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1 className="title"><FormattedMessage id={'sections.contact'} /></h1>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt={Data.defaultDescription} />
    </Thumbnail>
  </Wrapper>
)
