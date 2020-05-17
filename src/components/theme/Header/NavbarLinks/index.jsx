import {FormattedMessage} from 'gatsby-plugin-intl'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Dropdown} from '../../../common/Dropdown'
import {Wrapper} from './styles'

const options = [
  {displayName: 'English', value: 'en'}
]

function LanguageSelector() {
  return <Dropdown options={options} onChange={(item) => {
    console.log(item)
  }} />
}

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
    <LanguageSelector />
  </Wrapper>
)

export default NavbarLinks
