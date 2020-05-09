import {Button, Container} from 'components/common'
import {Header} from 'components/theme'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Data from 'data/config'
import dev from 'assets/illustrations/dev.svg'
import {Details, IntroWrapper, Thumbnail, Wrapper} from './styles'

export const Intro = () => (
  <Wrapper id="about">
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>{Data.defaultDescription}</h4>
        <Button as={AnchorLink} href="#contact">
          Contact me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt={Data.defaultDescription} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
