import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Wrapper} from './styles'

const NavbarLinks = ({desktop}) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#skills">Skills</AnchorLink>
    <AnchorLink href="#experience">Experience</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)

export default NavbarLinks
