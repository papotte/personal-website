import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Wrapper} from './styles'

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <AnchorLink className="is-dark" href="#about">About</AnchorLink>
    <AnchorLink className="is-dark" href="#skills">Skills</AnchorLink>
    <AnchorLink className="is-dark" href="#experience">Experience</AnchorLink>
    <AnchorLink className="is-dark" href="#contact">Contact</AnchorLink>
  </Wrapper>
)

export default NavbarLinks
