import dev from 'assets/illustrations/simple-dev.svg'
import {Container} from 'components/common'
import {Header} from 'components/theme'
import Data from 'data/config'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Details, IntroWrapper, Wrapper} from './styles'

export const Intro = () => (
  <Wrapper id="about">
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>{Data.defaultDescription}</h4>
        <AnchorLink className="button is-primary" href="#contact">
          Contact me
        </AnchorLink>
      </Details>
      <figure className="image">
        <img src={dev} alt={Data.defaultDescription} />
      </figure>
    </IntroWrapper>
  </Wrapper>
)
