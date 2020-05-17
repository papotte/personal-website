import dev1 from 'assets/illustrations/dev_cat.svg'
import dev2 from 'assets/illustrations/dev_js.svg'
import dev3 from 'assets/illustrations/dev_phone.svg'
import {Container} from 'components/common'
import {Header} from 'components/theme'
import Data from 'data/config'
import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Details, IntroWrapper, Wrapper} from './styles'

function randomImg() {
  let number = Math.floor(Math.random() * 3)
  switch (number) {
    case 1:
      return dev2
    case 2:
      return dev3
    default:
      return dev1
  }
}

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
      <figure className="image" style={{width: 40 + '%'}}>
        <img src={randomImg()} alt={Data.defaultDescription} />
      </figure>
    </IntroWrapper>
  </Wrapper>
)
