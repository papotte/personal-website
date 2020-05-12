import dev from 'assets/illustrations/simple-dev.svg'
import {Container} from 'components/common'
import {Header} from 'components/theme'
import Data from 'data/config'
import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Details, IntroWrapper, Wrapper} from './styles'

export const Intro = () => (
  <Wrapper id="about">
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1><FormattedMessage id={'sections.about.title'} /></h1>
        <h4><FormattedMessage id={'sections.about.subtitle'} /></h4>
        <AnchorLink className="button is-primary" href="#contact">
          <FormattedMessage id={'buttons.contact'} />
        </AnchorLink>
      </Details>
      <figure className="image">
        <img src={dev} alt={Data.defaultDescription} />
      </figure>
    </IntroWrapper>
  </Wrapper>
)
