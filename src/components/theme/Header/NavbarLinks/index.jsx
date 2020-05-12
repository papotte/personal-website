import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Wrapper} from './styles'

function NavLink({name}) {
  return <AnchorLink className="is-dark" href={'#' + name}>
    <FormattedMessage id={'nav.' + name} />
  </AnchorLink>
}

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <NavLink name="about" />
    <NavLink name="skills" />
    <NavLink name="experience" />
    <NavLink name="contact" />
  </Wrapper>
)

export default NavbarLinks
